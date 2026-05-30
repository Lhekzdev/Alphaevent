import React, { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

import Section1a from './Section1'
import Section1 from './Section1a'
import Section2 from './Section2'
import Section2a from './Section2a'

import ProfileSearchBar from '../OnBoarding/ProfileSearchBar'
import Onboardingleft from '../onboardingleft/Onboardingleft'

const OnboardingMain = () => {

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
    localStorage.setItem("authToken", token);

    const decoded = jwtDecode(token);
    console.log("DECODED TOKEN:", decoded);

    if (decoded.email) {
      localStorage.setItem("userEmail", decoded.email);
      console.log("EMAIL SAVED:", decoded.email);
    } else {
      console.log("No email inside token");
    }

    if (decoded.userID) {
      localStorage.setItem("userID", decoded.userID);
      console.log("USERID SAVED:", decoded.userID);
    }

    // IMPORTANT: clean URL after saving
    window.history.replaceState({}, document.title, "/OnboardingMain");

  } catch (err) {
    console.error("Token processing error:", err);
  }
}, []);

  return (
    <>

      <section className='flex'>
        <Onboardingleft />
        <div className='bg-[#F8F9FC] flex flex-col gap-y-[24px]'>

          <div >
            <ProfileSearchBar />
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