import React from 'react'
import ProfileSearchBar from '../../dashboard/OnBoarding/ProfileSearchBar';
import Onboardingleft from '../onboardingleft/Onboardingleft';
import FinancePg from './FinancePg';
import { useEventForm } from "../../context/context";

const Finance = () => {
     const { userID, userName, userEmail } = useEventForm();
  return (
    <section className="flex bg-[#F8F9FC] min-h-screen h-screen overflow-hidden">
      {/* Left Sidebar */}
      <div className="flex-shrink-0">
        <Onboardingleft />
      </div>

       {/* Right Content Area */}
       <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-shrink-0">
          <ProfileSearchBar 
                             userID={userID}
    userName={userName}
    userEmail={userEmail}
          />
        </div>
        <div className="flex-1 overflow-y-auto p-4">
            <FinancePg
               userID={userID} />
            </div>
        </div>
   </section>
  )
}

export default Finance