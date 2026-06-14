import React, { useState, useEffect, useRef, useContext } from "react";
import ProfileSearchBar from '../../dashboard/OnBoarding/ProfileSearchBar';
import Onboardingleft from '../onboardingleft/Onboardingleft';
import MyEventDetails from './MyEventDetails';
import MyEventFullDetail from './MyEventFullDetail';
import { useEventForm } from "../../context/context";
import NotificationBar from "../OnBoarding/NotificationBar";

const MyEvent = () => {
   const { userID, userName, userEmail } = useEventForm();
  const [showFullDetail, setShowFullDetail] = useState(false);
  const [selectedEventID, setSelectedEventID] = useState(null);

const handleCardClick = (eventID) => {
  setSelectedEventID(eventID);
  setShowFullDetail(true);
};

const handleBackClick = () => {
  setShowFullDetail(false);
  setSelectedEventID(null);
};

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
          {showFullDetail ? (
  <MyEventFullDetail
  eventID={selectedEventID}
  onBack={handleBackClick}
/>
          ) : (
            <MyEventDetails onCardClick={handleCardClick} />
          )}
        </div>
      </div>
    </section>
  );
};

export default MyEvent;
