import React, { useState, useEffect, useRef, useContext } from "react";
import { ActiveLinkContext, ActiveLinkProvider } from "../OnboardingMain/ActiveLinkContext"
import { useNavigate } from "react-router-dom";
import notetificationIcon from "../../../assets/notetificationIcon.svg";
import arrowdownDashboard from "../../../assets/arrowdownDashboard.svg";
import Notifications from "../OnboardingMain/Notifications"

const ProfileSearchBar = () => {
  const redir =useNavigate()
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const { activeLink } = useContext(ActiveLinkContext);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);
  const toggleNotifications = () => setShowNotifications((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <section className="p-4 w-full h-[48px] mt-5 mb-5">
        <div className="flex items-center justify-between bg-white rounded-[8px] w-[1020px] px-5">
          {/* Left - Active Page Title */}
          <div className="flex items-center gap-3">
            <img
              src={activeLink.iconBlue}
              alt={`${activeLink.name} Icon`}
              className="w-6 h-6"
            />
            <p className="text-[20px] font-bold text-[#2D6CCF]">
              {activeLink.name}
            </p>
          </div>

          {/* Right - Notifications and Profile */}
          <div className="flex items-center gap-6">
            {/* Notification Bell */}
            <div className="relative cursor-pointer" onClick={toggleNotifications}>
              <img src={notetificationIcon} alt="Notification" className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[8px] w-3 h-3 rounded-full flex items-center justify-center" />
            </div>

            {/* Profile Dropdown */}
            <div className="relative" ref={menuRef}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMenu();
                }}
                className="flex items-center gap-3 w-[164px] h-[48px]"
              >
                <img
                  src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747612841/User_Icon_i71ihm.png"
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
                <p className="text-sm font-medium">User ID</p>
                <img src={arrowdownDashboard} alt="Arrow" className="w-4 h-4" />
              </button>

              {isOpen && (
                <div
                  className="absolute top-14 w-[200px] md:w-[230px] z-50 bg-white shadow-2xl py-4 right-0 origin-top-right"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ul className="text-left flex flex-col gap-y-2 pl-3">
                    {/* <li className="py-1 px-4 hover:scale-105 w-[200px] rounded-lg hover:bg-[#EBF1F5] cursor-pointer">
                      Profile
                    </li> */}
                    <li className="py-1 px-4 hover:scale-105 w-[200px] rounded-lg hover:bg-[#EBF1F5] cursor-pointer">
                      Settings
                    </li>
                    <li className="py-1 px-4 hover:scale-105 w-[200px] rounded-lg hover:bg-[#EBF1F5] cursor-pointer">
                      Help
                    </li>
                    <li onClick={()=>{redir("/")}} className="py-1 https://www.figma.com/design/nfuAgRIelueN2nMKccz3dJ/Alpha-Alvent?node-id=0-1&node-type=canvas&t=4ldRa9SVnXPlRbut-0 px-4 hover:scale-105 text-customRed cursor-pointer">
                      Log Out
                    </li> 
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Notifications modal */}
      {showNotifications && <Notifications onClose={toggleNotifications} />}
    </>
  );
};

export default ProfileSearchBar;
