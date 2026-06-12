import React, { useEffect, useContext} from "react";
import { jwtDecode } from "jwt-decode";

// import { UserContext } from "../../context/UserContext";
import Section1a from './Section1'
import Section1 from './Section1a'
import Section2 from './Section2'
import Section2a from './Section2a'

import ProfileSearchBar from '../OnBoarding/ProfileSearchBar'
import Onboardingleft from '../onboardingleft/Onboardingleft'
import { useEventForm } from "../../context/context";

const OnboardingMain = () => {

const {
   userID,
  userName,
  userEmail,
  setUserID,
  setUserEmail,
  setUserName,
} = useEventForm();

useEffect(() => {
  const url = new URL(window.location.href);
  const token = url.searchParams.get("token");

  console.log("FULL URL:", window.location.href);
  console.log("TOKEN FOUND:", token);

  if (!token) {
    console.log("No token in URL");
    return;
  }

  try {
    const decoded = jwtDecode(token);

    console.log("DECODED TOKEN:", decoded);

    localStorage.setItem("authToken", token);

    const email = decoded.email || "";
    const userID = decoded.userID || decoded.userId || decoded.sub || "";
    const userName = decoded.name || decoded.userName || "";

    // Update Context
    setUserID(userID);
    setUserEmail(email);
    setUserName(userName);

    // Persist to localStorage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userID", userID);

    console.log("EMAIL SAVED:", email);
    console.log("USERID SAVED:", userID);

    // Clean URL
    window.history.replaceState(
      {},
      document.title,
      window.location.pathname
    );
  } catch (err) {
    console.error("Token processing error:", err);
  }
}, [setUserID, setUserEmail, setUserName]);

useEffect(() => {
  console.log("User ID:", userID);
  console.log("User Name:", userName);
  console.log("User Email:", userEmail);
}, [userID, userName, userEmail]);

  return (
    <>

      <section className='flex'>
        <Onboardingleft />
        <div className='bg-[#F8F9FC] flex flex-col gap-y-[24px]'>

       
       
          <div className="">
            <ProfileSearchBar 
               userID={userID}
    userName={userName}
    userEmail={userEmail}
            />
          </div>
          <div>

            <Section1a />

            <Section2a />
            <Section2 />
            <Section1 />
          </div></div>
      </section>

    </>
  )
}

export default OnboardingMain