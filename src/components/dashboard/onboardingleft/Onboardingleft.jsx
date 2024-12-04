import React, { useState } from "react";
import logoOnboard from "../../../assets/logoOnboard.svg"
import dashboardWhite from "../../../assets/dashboardWhite.svg"
import eventIcon from "../../../assets/eventIcon.svg"
import reportIcon from "../../../assets/reportIcon.svg"
import paymentIcon from "../../../assets/paymentIcon.svg"
import settingIcon from "../../../assets/settingIcon.svg"
import supportIcon from "../../../assets/supportIcon.svg"
import createEventIcon from "../../../assets/createEventIcon.svg"


import { Link } from 'react-router-dom';



const Onboardingleft = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  const handleMouseLeave = () => {
    if (window.innerWidth >= 300) {
      setTimeout(() => {
        setIsMenuOpen(false);
      }, 100);
    }
  };


  const [isLeftComponentVisible, setIsLeftComponentVisible] = useState(false);

  const toggleLeftComponent = () => {
    setIsLeftComponentVisible((prevState) => !prevState);
  };


  const [isMenuVisible, setIsMenuVisible] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="flex">  <div

       onMouseLeave={handleMouseLeave}
        className={`${isMenuOpen ? "block" : "hidden"
          } absolute transition-all opacity-100 sm:duration-500 sm:ease-in-out top-20 md:top-0  md:flex md:relative pt-[24px] pr-[10px] pb-[151px] pl-[28px] bg-customdarkblue z-10 w-[280px] h-40md:h-[1024px] hover:opacity-100 md:opacity-100`}
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
              <Link to="/OnboardingMain">  <li className="flex items-center w-[228px] h-[60px] gap-[20px] rounded-[12px] pl-[24px] hover:text-white hover:bg-customSkyblue">
                <img src={dashboardWhite} alt="dashboardWhite" />
                <h3>Dashboard</h3>
              </li></Link>

              <li className="hover:bg-customSkyblue hover:text-white flex items-center rounded-[12px] w-[228px] h-[60px] py-[16px] pr-[48px] pl-[24px] gap-[20px]">
                <img src={eventIcon} alt="eventIcon" />
                <h3><Link to="/OnboardEvent">Event</Link></h3>
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
              <button className="w-[140px] items-center leading-[24px] h-[24px]"><Link to="/createEvent">Create Event</Link></button>
              <img className="w-[16.33px] h-[16.33px]" src={createEventIcon} alt="" />
            </ol>
          </ol>
        </div>

      </div>


      {/* Button to Toggle the Visibility on small screens */}





      <button
        onClick={toggleMenu}
        className="flex md:hidden absolute top-[79.5px] z-40 left-1 px-1 py-1 bg-customDarkgrey text-white rounded-md"
      >
        {!isMenuOpen ? (
          <span className="text-xl">☰</span> // Hamburger icon
        ) : (
          <span className="text-xl">X</span> // Close icon
        )}
      </button>
    </div>

  );
};

export default Onboardingleft;
