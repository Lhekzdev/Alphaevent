import React, { useState } from "react";
import notetificationIcon from '../../../assets/notetificationIcon.svg';
import profileIcon from '../../../assets/profileIcon.svg';
import arrowdownDashboard from '../../../assets/arrowdownDashboard.svg';
import searchIcon from '../../../assets/searchIcon.svg';


const ProfileSearchBar = () => {
  //

  return (
    <section className="p-4 bg-white pl-[30px] pr-[20px]">
      <div className="flex items-center justify-between">
        {/* Greeting */}
        <div className="flex items-center">
          <p className="text-lg font-medium">
            Hello, <span className="font-bold">Fred</span>!
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full lg:w-[338px] px-4 py-2 pr-10 border border-gray-300 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#E4FEDD]"
          />
          <img
            src={searchIcon}
            alt="Search Icon"
            className="absolute top-1/2 right-3 transform -translate-y-1/2 w-5 h-5 text-gray-500"
          />
        </div>

        {/* Right Section: Notifications and Profile */}
        <div className="flex items-center space-x-6">
          {/* Notifications */}
          <div className="relative">
            <img
              src={notetificationIcon}
              alt="Notification Icon"
              className="w-[18px] h-[20px]"
            />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-[8px] w-[12px] h-[12px] rounded-full flex justify-center items-center">
              0
            </span>
          </div>

          
          

          {/* Profile Section */}
          <div className="flex items-center space-x-2">
            <img
              src={profileIcon}
              alt="User Profile"
              className="w-8 h-8 rounded-full"
            />
            <p className="text-sm font-medium">User ID</p>
            <img
              src={arrowdownDashboard}
              alt="Dropdown Arrow"
              className="w-4 h-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSearchBar;
