import React, { useState, useEffect, useRef, useContext } from "react";
import { ActiveLinkContext, ActiveLinkProvider } from "../OnboardingMain/ActiveLinkContext"
import { useNavigate } from "react-router-dom";
import notetificationIcon from "../../../assets/notetificationIcon.svg";
import arrowdownDashboard from "../../../assets/arrowdownDashboard.svg";
import Notifications from "../OnboardingMain/Notifications"
import NotificationBar from "./NotificationBar";




const ProfileSearchBar = ( { userID,
  userName,
  userEmail}
) => {
  const redir =useNavigate()
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



  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);
  const toggleNotifications = () => setShowNotifications((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <section className=" py w-full h-[auto] ">
      <div className="bg-[#EBF1F5] mb-3 py-3 rounded-xl shadow-sm border text-center">
 <h2 className="text-xl font-Lato text-[#123499]">
  {greetingData?.greeting  }
</h2>

  <p className="mt-2 text-gray-600">
    Your User ID:
    <span className="font-semibold text-[#123499] ml-2">
      {userID}
    </span>
  </p>


 
</div>



        <div className="flex items-center justify-between  rounded-[8px] w-[1020px] px-5">
          
          {/* Left - Active Page Title */}
          <div className="flex items-center gap-3">
            <img
              src={activeLink.iconBlue}
              alt={`${activeLink.name} Icon`}
              className="w-6 h-6"
            />
            <p className="text-[20px] font-bold text-[#123499]">
              {activeLink.name}
            </p>
          </div>

          {/* Right - Notifications and Profile */}
         
       <NotificationBar/>
       
       
       
        </div>
      </section>

      {/* Notifications modal */}
      {showNotifications && <Notifications onClose={toggleNotifications} />}
    </>
  );
};

export default ProfileSearchBar;
