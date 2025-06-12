import React, { useState, useEffect, useRef } from "react";
import notetificationIcon from '../../../assets/notetificationIcon.svg';
import profileIcon from '../../../assets/profileIcon.svg';
import arrowdownDashboard from '../../../assets/arrowdownDashboard.svg';
import searchIcon from '../../../assets/searchIcon.svg';
import { Link } from "react-router-dom";
import {jwtDecode} from "jwt-decode"; 
import NotificationBar from "./NotificationBar";


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

        

  return (
    <section className="p-4 w-full h-[48px] mt-[20px] mb-[20px]">
         <p className="pl-3 ">Welcome, {userName}!</p>
    <div className="flex items-center  gap-[650px] bg-[#FFFFFF] rounded-[8px] w-[1020px] px-[20px]  ">
           
      {/* Side-A */}
      <div className="flex gap-3 items-center">
        <img
          src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747612788/icon_14_gn2edn.svg"
          alt="User Icon"
        />
        <p className="text-[20px] font-bold text-[#2D6CCF]">Dashboard</p>
      </div>
      
  <div> <NotificationBar/></div>
  
    </div>
  </section>
  );
};

export default ProfileSearchBar;
