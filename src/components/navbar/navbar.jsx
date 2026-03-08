import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from "/logo.svg"
import arrowRight from "/arrowRight.svg"
import { FaArrowRightToBracket } from "react-icons/fa6";

const harburgermenu = "https://res.cloudinary.com/dzyvwxh7n/image/upload/v1731299161/hamburger_hod9qo.png"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (

    <div className='w-full fixed top-0 inset-0 z-50 bg-[#F3F5FA] items-center h-[82px] py-[19px]'>

      <div className='flex md:px-[80px] px-[20px]'>

        {/* ================= MAIN NAVBAR CONTAINER ================= */}
        <div className="w-full items-center flex">

          {/* ================= LOGO (LEFT SIDE) ================= */}
          <div className='flex-1 md:mr-[50px] lg:mr-[77px]'>

            <Link to="/">
              <img
                className='items-center place-content-center w-[189px] h-[32px]'
                src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1770048496/Blue_Logo_ijoxkj.png"
                alt="alventlogo"
              />
            </Link>

          </div>


          {/* ================= NAV OPTIONS (CENTER) ================= */}
          <div className='flex-1 flex items-center justify-center text-center md:w-full'>

            <ol className='hidden font-Roboto text-nowrap items-center md:flex h-[32px] sm:gap-2 md:gap-2 lg:gap-[4.7vw]'>

              <li className='hover:border-b-2 hover:border-[#123499]'>
                <Link to="/">Explore events</Link>
              </li>

              <li className='hover:border-b-2 hover:border-[#123499]'>
                <Link to="/ticket">My Ticket</Link>
              </li>

              <li className='hover:border-b-2 hover:border-[#123499]'>
                <Link to="/About">About</Link>
              </li>

            </ol>

          </div>


          {/* ================= BUTTONS (RIGHT SIDE) ================= */}
          <div className='flex-1 flex justify-end gap-[12px] items-center'>

            {/* LOGIN BUTTON */}
            <ol className='md:flex items-center hidden gap-[10px] border-2 border-[#123499] text-center rounded-[10px] lg:px-[32px] h-[44px] w-[117px]'>

              <h4 className='text-[#123499] font-semibold'>
                <Link to="/LogIn">Login</Link>
              </h4>

              <div>
                <FaArrowRightToBracket className="text-[#123499]" />
              </div>

            </ol>


            {/* SIGN UP BUTTON */}
            <ol className="hidden md:flex">

              <button className='items-center py-1 px-5 text-white text-center rounded-[10px] lg:px-[32px] h-[44px] w-[117px] bg-[#123499] text-nowrap'>
                <Link to="/SignUp">Sign up</Link>
              </button>

            </ol>

          </div>

        </div>


        {/* ================= HAMBURGER MENU (MOBILE) ================= */}
        <ol>

          <button
            onClick={toggleMenu}
            className="items-center md:hidden justify-center border ml-3 px-1 mt-2 text-sm font-medium text-gray-700 rounded-[40px] shadow-sm hover:bg-customSkyblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >

            <img
              src={harburgermenu}
              alt="harburgermenu"
              className="w-10 rounded-[100%] h-8"
            />

          </button>


          {/* ================= MOBILE DROPDOWN MENU ================= */}
          {isOpen && (

            <div className="md:hidden z-50 flex flex-col absolute right-0 mt-6 w-56 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg outline-none">

              <div className="py-1" onMouseLeave={closeMenu}>

                {/* MOBILE NAV LINKS */}
                <div className="text-left w-40">

                  <a className="text-gray-700 block px-4 py-1 text-lg hover:border-b-2 w-[150px] hover:border-customSkyblue">
                    <Link to="/">Explore events</Link>
                  </a>

                  <a className="text-gray-700 block px-4 py-1 text-lg hover:border-b-2 w-28 hover:border-customSkyblue">
                    <Link to="/ticket">My Ticket</Link>
                  </a>

                  <a className="text-gray-700 block px-4 py-1 mb-4 text-lg hover:border-b-2 w-20 hover:border-customSkyblue">
                    <Link to="/">About</Link>
                  </a>

                </div>


                {/* MOBILE LOGIN & SIGNUP */}
                <div className="flex">

                  <a className='flex text-gray-700 px-4 py-1 text-sm gap-[10px]'>

                    <h4 className='hover:text-customSkyblue text-xl mb-3 text-sky-900'>
                      <Link to="/LogIn">Login</Link>
                    </h4>

                    <img className='w-[10.67px] h-[10p.67px]' src={arrowRight} alt="" />

                  </a>

                  <button className='items-center px-5 py-0 text-xl hover:bg-sky-900 rounded-[10px] lg:px-[32px] bg-customSkyblue text-nowrap'>
                    <Link to="/signUp">Sign up</Link>
                  </button>

                </div>

              </div>

            </div>

          )}

        </ol>

      </div>

    </div>

  )
}

export default Navbar