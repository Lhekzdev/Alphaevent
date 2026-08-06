import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

import createEventIcon from "../../../assets/createEventIcon.svg";
import { ActiveLinkContext } from "../OnboardingMain/ActiveLinkContext";

const Onboardingleft = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { activeLink, setActiveLink, sidebarLinks } =
    useContext(ActiveLinkContext);

  const navigate = useNavigate();

  const linkStyle = (linkName) =>
    activeLink.name === linkName
      ? "bg-[#123499] text-white"
      : "text-[#757575] hover:bg-[#3A7BD533] hover:text-white";

  const iconSource = (linkName, grayIcon, whiteIcon) =>
    activeLink.name === linkName ? whiteIcon : grayIcon;

  return (
    <div className="flex">

      {/* Sidebar Menu */}
      <div
        className={`
  ${isMenuOpen ? "block" : "hidden"}
  md:flex
  fixed
  md:relative
  top-0
  md:top-0
  left-0
  z-50
  transition-all
  bg-[#F3F5FA]
  w-[280px]
  max-w-full
  min-h-screen
  pt-6
  pr-2
  pb-[151px]
  pl-7
`}
      >

        <div className="flex flex-col font-Lato text-white gap-y-10 w-full">

          {/* Logo */}
          <Link to="/" className="w-full">
            <img
              src="https://res.cloudinary.com/dqtyrjpeh/image/upload/q_auto/f_auto/v1770048496/Blue_Logo_ijoxkj.png"
              alt="Alvent Logo"
              className="pt-3 w-[189px] px-6 h-[32px] cursor-pointer"
            />
          </Link>


          {/* Navigation Links */}
          <ul className="flex flex-col gap-y-3 w-full md:w-[238px] mb-[380px]">

            {sidebarLinks.map((link) => (

              <li key={link.name}>

                <div
                  className={`
                    flex
                    items-center
                    gap-4
                    px-4
                    py-3
                    rounded-lg
                    cursor-pointer
                    ${linkStyle(link.name)}
                  `}
                  onClick={() => {

                    setActiveLink({
                      name: link.name,
                      icon: link.iconWhite,
                      iconBlue: link.iconBlue || link.iconWhite,
                    });

                    navigate(link.route);

                    // close sidebar on mobile after clicking
                    setIsMenuOpen(false);
                  }}
                >

                  <img
                    src={iconSource(
                      link.name,
                      link.iconGray,
                      link.iconWhite
                    )}
                    alt={`${link.name} Icon`}
                    className="w-6 h-6"
                  />

                  <span>
                    {link.name}
                  </span>

                </div>

              </li>

            ))}

          </ul>



          {/* Create Event Button */}
          <div
            onClick={() => {

              setActiveLink({
                name: "createEvent",
              });

              navigate("/createEvent");

              setIsMenuOpen(false);

            }}
          >

            <button
              className="
                flex
                items-center
                justify-between
                w-full
                md:w-[238px]
                h-[60px]
                bg-[#123499]
                text-white
                rounded-[12px]
                px-6
                text-[16px]
                hover:bg-[#2D6CCF]
              "
            >

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



      {/* Mobile Hamburger Button */}
      <button

        onClick={() =>
          setIsMenuOpen((prev) => !prev)
        }

       className="
  flex
  md:hidden
  fixed
  top-4
  left-4
          z-[60]
          p-2
          bg-[#123499]
          text-white
          rounded-md
        "

      >

        {
          isMenuOpen
            ? <FiX size={24} />
            : <FiMenu size={24} />
        }

      </button>


    </div>
  );
};


export default Onboardingleft;