import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import eventIcon from "../../../assets/eventIcon.svg";
// import eventWhiteIcon from "../../../assets/eventWhiteIcon.svg";
// import finance from "../../../assets/finance.svg";
// import reportIconWhite from "../../../assets/reportIconWhite.svg";
// import settingIcon from "../../../assets/settingIcon.svg";
// import settingIconWhite from "../../../assets/settingIconWhite.svg";
import createEventIcon from "../../../assets/createEventIcon.svg";
import { ActiveLinkContext } from "../OnboardingMain/ActiveLinkContext";

const Onboardingleft = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeLink, setActiveLink, sidebarLinks } = useContext(ActiveLinkContext);
  const navigate = useNavigate();

  const linkStyle = (linkName) =>
    activeLink.name === linkName
      ? "bg-[#3A7BD5] text-white"
      : "text-[#757575] hover:bg-[#3A7BD533] hover:text-white";

  const iconSource = (linkName, grayIcon, whiteIcon) =>
    activeLink.name === linkName ? whiteIcon : grayIcon;

  return (
    <div className="flex">
      {/* Sidebar Menu */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"} absolute md:flex md:relative top-20 md:top-0 z-10 transition-all bg-white w-[280px] h-[900px] pt-6 pr-2 pb-[151px] pl-7`}
      >
        <div className="flex flex-col font-Lato text-white gap-y-10">
          {/* Logo */}
          <div className="w-[258px]">
            <img
              src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747615311/ALVENT_1_omcg0v.png"
              alt="Alvent Logo"
              className="pt-3 w-[112px] px-6 h-[24px] cursor-pointer"
              // onClick={() => navigate("/")}
            />
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col gap-y-3 w-[238px] mb-[380px]">
            {sidebarLinks.map((link) => {
              return (
                <li key={link.name}>
                  <div
                    className={`flex items-center gap-4 px-4 py-3 rounded-lg cursor-pointer ${linkStyle(link.name)}`}
                    onClick={() => {
                      setActiveLink({
                        name: link.name,
                        icon: link.iconWhite,
                        iconBlue: link.iconBlue || link.iconWhite,
                      });
                      navigate(link.route);
                    }}
                  >
                    <img
                      src={iconSource(link.name, link.iconGray, link.iconWhite)}
                      alt={`${link.name} Icon`}
                      className="w-6 h-6"
                    />
                    <span>{link.name}</span>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Create Event Button */}
          <div onClick={() => {
            setActiveLink({ name: "createEvent" });
            navigate("/createEvent");
          }}>
            <button className="flex items-center justify-between w-[238px] h-[60px] bg-[#3A7BD5] text-white rounded-[12px] px-6 text-[16px] hover:bg-[#2D6CCF]">
              Create Event
              <img
                src={createEventIcon}
                alt="Create Event Icon"
                className="w-[16px] h-[16px]"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="flex md:hidden absolute top-[79.5px] z-40 left-1 px-2 py-1 bg-customDarkgrey text-white rounded-md"
      >
        {isMenuOpen ? "X" : ""}
      </button>
    </div>
  );
};

export default Onboardingleft;
