import React, { useState, useEffect, useRef } from "react";
import notetificationIcon from '../../../assets/notetificationIcon.svg';
import profileIcon from '../../../assets/profileIcon.svg';
import arrowdownDashboard from '../../../assets/arrowdownDashboard.svg';
import searchIcon from '../../../assets/searchIcon.svg';
import { Link,useNavigate } from "react-router-dom";




const NotificationBar = () => {


  let redir = useNavigate();


  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      ;
    };
  }, []);




  return (
    <div className="flex items-center space-x-6">
      {/* Envelope */}
      {/* <div className="relative flex-none">
          <img
            src={"https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747870971/Icon_Pack_2_cbbg14.png"}
            alt="Envelope Icon"
            className="w-[24px] h-[24px]"
          />
          <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[8px] w-[12px] h-[12px] rounded-full flex justify-center items-center" />
        </div> */}

      {/* Notification */}
      <div className="relative flex-none">
        <img
          src={notetificationIcon}
          alt="Notification Icon"
          className="w-[18px] h-[20px]"
        />
        <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[8px] w-[12px] h-[12px] rounded-full flex justify-center items-center" />
      </div>

      {/* Profile Dropdown */}
      <div className="relative inline-flex items-center space-x-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
          className="flex gap-[12px] w-[164px] h-[48px] items-center"
        >
          <img
            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747612841/User_Icon_i71ihm.png"
            alt="User Profile"
            className="w-8 h-8 rounded-full"
          />
          <p className="text-sm font-medium">User ID</p>
          <img
            src={arrowdownDashboard}
            alt="Dropdown Arrow"
            className="w-4 h-4"
          />
        </button>

        {isOpen && (
          <div
            ref={menuRef}
            className="absolute top-14 md:top-16 w-[200px] md:w-[300px] flex flex-col z-50 bg-white shadow-2xl py-[16px] right-0 origin-top-right"
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

              <li className="bg-black" onClick={() => { redir('/Login') }} className="py-1https://www.figma.com/design/nfuAgRIelueN2nMKccz3dJ/Alpha-Alvent?node-id=0-1&node-type=canvas&t=4ldRa9SVnXPlRbut-0 px-4 hover:scale-105 text-customRed cursor-pointer">
                Log Out
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>)

}

export default NotificationBar;
