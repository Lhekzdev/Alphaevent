import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightToBracket } from "react-icons/fa6";

import arrowRight from "/arrowRight.svg";

const harburgermenu =
  "https://res.cloudinary.com/dzyvwxh7n/image/upload/v1731299161/hamburger_hod9qo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-[#F3F5FA] h-[82px] py-[19px]">
      <div className="flex md:px-[80px] px-4 sm:px-5">
        {/* ================= MAIN NAVBAR CONTAINER ================= */}
        <div className="w-full items-center flex">

          {/* ================= LOGO (LEFT SIDE) ================= */}
          <div className="flex-1 md:mr-[50px] lg:mr-[77px] min-w-0">
            <Link to="/" onClick={closeMenu}>
              <img
                className="
                  object-contain
                  w-[130px]
                  h-auto
                  sm:w-[145px]
                  md:w-[165px]
                  lg:w-[189px]
                  max-w-full
                "
                src="https://res.cloudinary.com/dqtyrjpeh/image/upload/q_auto/f_auto/v1770048496/Blue_Logo_ijoxkj.png"
                alt="Alvent logo"
              />
            </Link>
          </div>

          {/* ================= NAV OPTIONS (CENTER) ================= */}
          <div className="flex-1 flex items-center justify-center text-center md:w-full">
            <ol className="hidden font-Roboto text-nowrap items-center md:flex h-[32px] sm:gap-2 md:gap-2 lg:gap-[4.7vw]">

              <li className="hover:border-b-2 hover:border-[#123499]">
                <Link to="/">Home</Link>
              </li>

              <li className="hover:border-b-2 hover:border-[#123499]">
                <Link to="/ExploreEvents">Explore Events</Link>
              </li>

              <li className="hover:border-b-2 hover:border-[#123499]">
                <Link to="/ticket">My Ticket</Link>
              </li>

              <li className="hover:border-b-2 hover:border-[#123499]">
                <Link to="/About">About</Link>
              </li>

            </ol>
          </div>

          {/* ================= BUTTONS (RIGHT SIDE) ================= */}
          <div className="flex-1 flex justify-end gap-[12px] items-center">

            {/* LOGIN BUTTON */}
            <ol className="md:flex items-center hidden gap-[10px] border-2 border-[#123499] text-center rounded-[10px] lg:px-[32px] h-[44px] w-[117px]">

              <h4 className="text-[#123499] font-semibold">
                <Link to="/LogIn">Login</Link>
              </h4>

              <div>
                <FaArrowRightToBracket className="text-[#123499]" />
              </div>

            </ol>

            {/* SIGN UP BUTTON */}
            <ol className="hidden md:flex">

              <button
                className="
                  items-center
                  py-1
                  px-5
                  text-white
                  text-center
                  rounded-[10px]
                  lg:px-[32px]
                  h-[44px]
                  w-[117px]
                  bg-[#123499]
                  text-nowrap
                "
              >
                <Link to="/SignUp">Sign up</Link>
              </button>

            </ol>

          </div>

        </div>

        {/* ================= HAMBURGER MENU (MOBILE) ================= */}
        <ol>
          <button
            onClick={toggleMenu}
            className="
              flex
              items-center
              md:hidden
              justify-center
              border
              ml-2
              sm:ml-3
              px-1
              mt-2
              text-sm
              font-medium
              text-gray-700
              rounded-[40px]
              shadow-sm
              hover:bg-customSkyblue
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-indigo-500
            "
            id="menu-button"
            aria-expanded={isOpen}
            aria-haspopup="true"
            aria-label="Toggle navigation menu"
          >
            <img
              src={harburgermenu}
              alt="Menu"
              className="w-9 h-8 sm:w-10 rounded-[100%]"
            />
          </button>

          {/* ================= MOBILE DROPDOWN MENU ================= */}
          {isOpen && (
            <div
              className="
                md:hidden
                z-50
                flex
                flex-col
                absolute
                right-3
                sm:right-5
                mt-6
                w-[220px]
                sm:w-56
                origin-top-right
                bg-white
                border
                border-gray-200
                rounded-md
                shadow-lg
                outline-none
              "
            >
              <div className="py-1">

                {/* MOBILE NAV LINKS */}
                <div className="text-left w-full">

                  <Link
                    to="/"
                    onClick={closeMenu}
                    className="
                      text-gray-700
                      block
                      px-4
                      py-2
                      text-lg
                      hover:border-b-2
                      w-[150px]
                      hover:border-customSkyblue
                    "
                  >
                    Home
                  </Link>

                  <Link
                    to="/ExploreEvents"
                    onClick={closeMenu}
                    className="
                      text-gray-700
                      block
                      px-4
                      py-2
                      text-lg
                      hover:border-b-2
                      w-[150px]
                      hover:border-customSkyblue
                    "
                  >
                    Explore Events
                  </Link>

                  <Link
                    to="/ticket"
                    onClick={closeMenu}
                    className="
                      text-gray-700
                      block
                      px-4
                      py-2
                      text-lg
                      hover:border-b-2
                      w-28
                      hover:border-customSkyblue
                    "
                  >
                    My Ticket
                  </Link>

                  <Link
                    to="/About"
                    onClick={closeMenu}
                    className="
                      text-gray-700
                      block
                      px-4
                      py-2
                      mb-4
                      text-lg
                      hover:border-b-2
                      w-20
                      hover:border-customSkyblue
                    "
                  >
                    About
                  </Link>

                </div>

                {/* MOBILE LOGIN & SIGNUP */}
                <div className="flex items-center gap-2 px-4">

                  <Link
                    to="/LogIn"
                    onClick={closeMenu}
                    className="
                      flex
                      items-center
                      text-gray-700
                      py-1
                      text-sm
                      gap-[10px]
                    "
                  >
                    <h4 className="hover:text-customSkyblue text-xl mb-3 text-sky-900">
                      Login
                    </h4>

                    <img
                      className="w-[10.67px] h-[10.67px]"
                      src={arrowRight}
                      alt=""
                    />
                  </Link>

                  <button
                    className="
                      items-center
                      px-4
                      py-1
                      text-lg
                      hover:bg-sky-900
                      text-white
                      rounded-[10px]
                      bg-customSkyblue
                      text-nowrap
                    "
                  >
                    <Link
                      to="/SignUp"
                      onClick={closeMenu}
                    >
                      Sign up
                    </Link>
                  </button>

                </div>

              </div>
            </div>
          )}
        </ol>

      </div>
    </div>
  );
};

export default Navbar;

