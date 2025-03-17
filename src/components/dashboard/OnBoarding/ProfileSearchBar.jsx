import React, { useState, useEffect, useRef } from "react";
import notetificationIcon from '../../../assets/notetificationIcon.svg';
import profileIcon from '../../../assets/profileIcon.svg';
import arrowdownDashboard from '../../../assets/arrowdownDashboard.svg';
import searchIcon from '../../../assets/searchIcon.svg';
import { Link } from "react-router-dom";
import {jwtDecode} from "jwt-decode"; 
const ProfileSearchBar = () => {

  const [userName, setUserName] = useState('User');
  // const [userEmail, setUserEmail] = useState('');


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
    <section className="p-4 bg-white   lg:pl-[30px] pr-4 lg:pr-[20px]">
      <div className="flex  h-12 justify-between  ">
        {/* Greeting */}
        
        <div className="flex flex-col lg:flex-row justify-between w-full pr-[24px] lg:items-center lg:max-w-full">
        <p>Welcome, {userName}!</p>
          {/*<p className="text-customRed  text-[14px] font-medium">Verify your account</p>*/}
        </div>

        {/* Search Bar */}
        {/* <div className="relative"> */}
          {/* <input
            type="text"
            placeholder="Search..."
            className="w-full lg:w-[338px] px-4 py-2 pr-10 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#E4FEDD]"
          /> */}
          {/* <img
            src={searchIcon}
            alt="Search Icon"
            className="absolute top-1/2 right-3 transform -translate-y-1/2 w-5 h-5 text-gray-500"
          />
        </div> */}

        {/* Right Section: Notifications and Profile */}
        <div className="flex items-center space-x-6">
          {/* Notifications */}
          <div className="relative flex-none">
            <img
              src={notetificationIcon}
              alt="Notification Icon"
              className="w-[18px] h-[20px]"
            />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-[8px] w-[12px] h-[12px] rounded-full flex justify-center items-center">
              0
            </span>
          </div>


<div>

          {/* Profile Section */}
          <div className=" items-center relative inline-flex  space-x-2">
            <button onClick={(e) => {
              e.stopPropagation(); // Prevent triggering document click listener
              toggleMenu();
            }}
              className=" flex gap-[12px] w-[164px] h-[48px] items-center " id="menu-button" aria-expanded="true" aria-haspopup="true" ><img
                src={profileIcon}
                alt="User Profile"
                className="w-8 h-8 rounded-full"
              />
              <p className="text-sm font-medium">User ID</p>
              <img
                src={arrowdownDashboard}
                alt="Dropdown Arrow"
                className="w-4 h-4"
              /></button>

            {isOpen && (<div ref={menuRef} className="top-14 md:top-16 w-[200px]  md:w-[300px] flex flex-col z-50 bg-white shadow-2xl absolute py-[16px] right-0 origin-top-right " onClick={(e) => e.stopPropagation()}>
              <div className="text-left flex flex-col gap-y-2 pl-3">
                <li className="py-[10px] md:py-[10px] px-[15px] md:px-[25px] w-[130px] transition-all duration-300 ease-in-out  hover:scale-105 md:w-[200px] rounded-lg hover:bg-customlightpink block  text-[16px] font-Roboto font-normal ">Profile</li>
                <li className="py-[10px] md:py-[10px] px-[15px] md:px-[25px] hover:border w-[130px]  md:w-[200px] transition-all duration-300 ease-in-out  hover:scale-105 rounded-lg hover:bg-customlightpink  block text-[16px] font-Roboto font-normal ">Settings</li>
                <li className="py-[10px] md:py-[10px] px-[15px] md:px-[25px] hover:border w-[130px] md:w-[200px] transition-all duration-300 ease-in-out  hover:scale-105 rounded-lg hover:bg-customlightpink block text-[16px] font-Roboto font-normal ">Help</li>
                <Link to="/"><li className="py-[10px] px-[15px] md:px-[25px] w-[130px] block text-[16px] transition-all duration-300 ease-in-out  hover:scale-105 font-Roboto font-normal  text-customRed">Log Out</li></Link>
              </div></div>)}
          </div>
        </div>
      </div></div>
    </section>
  );
};

export default ProfileSearchBar;
