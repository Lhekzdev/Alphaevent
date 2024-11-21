import React, { useState } from "react";
import logoOnboard from "../../../assets/logoOnboard.svg"
import dashboardWhite from "../../../assets/dashboardWhite.svg"
import eventIcon from "../../../assets/eventIcon.svg"
import reportIcon from "../../../assets/reportIcon.svg"
import paymentIcon from "../../../assets/paymentIcon.svg"
import settingIcon from "../../../assets/settingIcon.svg"
import supportIcon from "../../../assets/supportIcon.svg"
import createEventIcon from "../../../assets/createEventIcon.svg"
import OnboardingMain from "../OnboardingMain/OnboardingMain.jsx"

import { Link } from 'react-router-dom';




const Onboardingleft = () => {
  // Define state to handle left component visibility
  const [isLeftComponentVisible, setIsLeftComponentVisible] = useState(false);
  // const [isButtonVisible, setIsButtonVisible] = useState(true);

  // Toggle function to switch visibility
  const toggleLeftComponent = () => {
    setIsLeftComponentVisible((prevState) => !prevState);
  };

    // State to control menu visibility
    const [isMenuVisible, setIsMenuVisible] = useState(false);
  
    // Toggle function to handle menu visibility
    const toggleMenu = () => {
      setIsMenuVisible((prevState) => !prevState);
    };
  
  return (
    <div className="flex">
      {/* Left panel that will be hidden on small screens and toggled */}
      <div
        className={`${
          isMenuVisible ? "block" : "hidden"
        } absolute transition-all sm:opacity-0 sm:duration-500 sm:ease-in-out sm:hover:opacity-100 hover:translate-y-4 md:flex md:relative pt-[24px] pr-[10px] pb-[151px] pl-[28px] bg-customdarkblue z-10 w-[296px] h-40md:h-[1024px] md:opacity-100`}
      >
        {/* dashboard with icons section */}
        <div className="flex flex-col md:gap-y-[40px] font-Lato  text-white">
          <ol className="px-[24px] py-[12px] w-[258px]">
           <Link to="/"> <img 
              className="pt-[12px] w-[200px] px-[24px] h-[48px]"
              src={logoOnboard}
              alt="alvent-logo"
            /></Link>
          </ol>

          <ol className="gap-y-[59px] md:gap-y-[304px] font-bold text-[24px] font-Lato flex flex-col">
            <ol className="flex font-bold text-customGreySech text-[24px] flex-col gap-y-[10px]">
              <li className="flex items-center w-[228px] h-[60px] gap-[20px] rounded-[12px] pl-[24px] hover:text-white hover:bg-customSkyblue">
                <img src={dashboardWhite} alt="dashboardWhite" />
                <h3>Dashboard</h3>
              </li>

              <li className="hover:bg-customSkyblue hover:text-white flex items-center rounded-[12px] w-[228px] h-[60px] py-[16px] pr-[48px] pl-[24px] gap-[20px]">
                <img src={eventIcon} alt="eventIcon" />
                <h3>Event</h3>
              </li>
              <li className="items-center flex hover:text-white hover:bg-customSkyblue rounded-[12px] w-[228px] h-[60px] py-[16px] pr-[48px] pl-[24px] gap-[20px]">
                <img src={reportIcon} alt="" />
                <h3>Report</h3>
              </li>

              <li className="flex hover:text-white items-center hover:bg-customSkyblue rounded-[12px] w-[228px] h-[60px] py-[16px] pr-[48px] pl-[24px] gap-[20px]">
                <img src={paymentIcon} alt="" />
                <h3>Payment</h3>
              </li>

              <li className="flex hover:text-white items-center hover:bg-customSkyblue w-[228px] rounded-[12px] h-[60px] py-[16px] pr-[48px] pl-[24px] gap-[20px]">
                <img src={settingIcon} alt="" />
                <h3>Settings</h3>
              </li>
              <li className="items-center hover:text-white hover:bg-customSkyblue flex w-[228px] rounded-[12px] h-[60px] py-[16px] pr-[48px] pl-[24px] gap-[20px]">
                <img src={supportIcon} alt="" />
                <h3>Support</h3>
              </li>
            </ol>
            <ol className="flex w-[238px] h-[60px] hover:text-white rounded-[12px] bg-customSkyblue pl-[24px] items-center gap-[20px]">
              <button className="w-[140px] items-center leading-[24px] h-[24px]">Create Event</button>
              <img className="w-[16.33px] h-[16.33px]" src={createEventIcon} alt="" />
            </ol>
          </ol>
        </div>
      </div>

      {/* Button to Toggle the Visibility on small screens */}
      <button
        onClick={toggleMenu}
        className="flex md:hidden absolute top-[75.5px] z-40 left-2 px-2 py-1 bg-customRed text-white rounded-md"
      >
        {!isMenuVisible ? (
          <span className="text-xl">☰</span> // Hamburger icon
        ) : (
          <span className="text-xl">X</span> // Close icon
        )}
      </button>

      <OnboardingMain />
    </div>
  );
};

export default Onboardingleft;
