import React from "react";
import ProfileSearchBar from "../../dashboard/OnBoarding/ProfileSearchBar";
import Onboardingleft from "../onboardingleft/Onboardingleft";
import FinancePg from "./FinancePg";
import { useEventForm } from "../../context/context";

const Finance = () => {
  const { userID, userName, userEmail } = useEventForm();

  return (
    <div className="flex min-h-screen w-full bg-white overflow-x-hidden">

      {/* Left Sidebar */}
        <Onboardingleft />
      

      {/* Right Content Area */}
      <main
        className="
 bg-[#F8F9FC]
 flex
 flex-col
 gap-y-[24px]
 flex-1
 w-full
 overflow-hidden
 pt-16
 md:pt-0
 "
      >
        
        {/* Top Search Bar */}
        <div className="w-full flex-shrink-0">
          <ProfileSearchBar
            userID={userID}
            userName={userName}
            userEmail={userEmail}
          />
        </div>

        {/* Finance Content */}
        <div
          className="
            flex-1
            w-full
            min-w-0
            overflow-y-auto
            overflow-x-hidden
            p-3
            sm:p-4
            md:p-5
            lg:p-6
            xl:p-8
          "
        >
          <FinancePg userID={userID} />
        </div>
      </main>
    </div>
  );
};

export default Finance;
