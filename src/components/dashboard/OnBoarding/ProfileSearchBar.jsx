import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ActiveLinkContext } from "../OnboardingMain/ActiveLinkContext";

import Notifications from "../OnboardingMain/Notifications";
import NotificationBar from "./NotificationBar";



const ProfileSearchBar = ({
  userID,
  userName,
  userEmail
}) => {


  const redir = useNavigate();

  const menuRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const [showNotifications, setShowNotifications] = useState(false);


  const { activeLink } = useContext(ActiveLinkContext);


  const [greetingData, setGreetingData] = useState(null);



  useEffect(() => {

    if (!userID) return;


    const token = localStorage.getItem("authToken");


    const fetchGreeting = async () => {

      try {

        const res = await fetch(
          `https://alphaeventappdevmode.onrender.com/api/dashboard-greeting/${userID}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );


        const data = await res.json();


        console.log("Greeting Response:", data);


        if (data.success) {

          setGreetingData(data.data);

        }


      } catch (err) {

        console.error(err);

      }

    };


    fetchGreeting();


  }, [userID]);





  const toggleMenu = () =>
    setIsOpen((prev) => !prev);


  const closeMenu = () =>
    setIsOpen(false);



  const toggleNotifications = () =>
    setShowNotifications((prev) => !prev);




  useEffect(() => {


    const handleClickOutside = (event) => {


      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {

        closeMenu();

      }


    };



    document.addEventListener(
      "click",
      handleClickOutside
    );


    return () =>
      document.removeEventListener(
        "click",
        handleClickOutside
      );


  }, []);




  return (

    <>

      <div
        className="
          flex
          items-center
          justify-between
          rounded-[8px]
          w-full
          px-3
          md:px-5
          py-3
          gap-3
        "
      >



        {/* Left - Active Page Title */}

        <div
          className="
            flex
            items-center
            gap-3
            min-w-0
          "
        >

          {
            activeLink.iconBlue && (

              <img

                src={activeLink.iconBlue}

                alt={`${activeLink.name} Icon`}

                className="
                  w-5
                  h-5
                  md:w-6
                  md:h-6
                  flex-shrink-0
                "

              />

            )
          }



          <p
            className="
              text-base
              md:text-[20px]
              font-bold
              text-[#123499]
              truncate
            "
          >

            {activeLink.name}

          </p>


        </div>





        {/* Right - Notifications and Profile */}

        <div
          className="
            flex
            items-center
            gap-2
            md:gap-4
          "
        >

          <NotificationBar />

        </div>



      </div>





      {/* Notifications modal */}

      {
        showNotifications &&
        (
          <Notifications
            onClose={toggleNotifications}
          />
        )
      }


    </>

  );

};



export default ProfileSearchBar;