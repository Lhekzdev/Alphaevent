import React, { useState, useEffect, useRef,useContext } from "react";
import notetificationIcon from '../../../assets/notetificationIcon.svg';
import profileIcon from '../../../assets/profileIcon.svg';
import arrowdownDashboard from '../../../assets/arrowdownDashboard.svg';
import searchIcon from '../../../assets/searchIcon.svg';
import { Link,useNavigate  } from "react-router-dom";
import {jwtDecode} from "jwt-decode"; 
import NotificationBar from "./NotificationBar";
import { ActiveLinkContext } from "../OnboardingMain/ActiveLinkContext";

const ProfileSearchBar = () => {

  let redir = useNavigate();

 const [userName, setUserName] = useState('User');
  // const [userEmail, setUserEmail] = useState('');


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


  // ✅ Fetch username when the component loads
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem("authToken");
        console.log("Stored Token in localStorage:", token);

        if (!token) {
          console.error("❌ Token not found in localStorage.");
          return;
        }

        const decodedToken = jwtDecode(token);
        console.log("Decoded Token from Storage:", decodedToken);

        if (!decodedToken?.name) {
          console.warn("❌ Username missing in token payload!");
        } else {
          setUserName(decodedToken.name);
        }

        const response = await fetch("https://alphaeventappdevmode.onrender.com/userInfo", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const responseData = await response.json();
        console.log("User Info Response:", responseData);

        if (response.ok) {
          console.log("✅ User info fetched successfully:", responseData.data);
          setUserName(responseData.data?.name || "Unknown User");
        } else {
          console.error("❌ Failed to fetch user info:", responseData);
        }
      } catch (error) {
        console.error("❌ Error fetching user info:", error);
      }
    };

    fetchUserInfo();
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
                    <li onClick={()=> redir('/')} className="py-1https://www.figma.com/design/nfuAgRIelueN2nMKccz3dJ/Alpha-Alvent?node-id=0-1&node-type=canvas&t=4ldRa9SVnXPlRbut-0 px-4 hover:scale-105 text-customRed cursor-pointer">
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
      {showNotifications && <NotificationBar onClose={toggleNotifications} />}
    </>
  );
};

export default ProfileSearchBar;