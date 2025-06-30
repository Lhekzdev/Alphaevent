import React, { useState } from 'react';
import ProfileSearchBar from '../../dashboard/OnBoarding/ProfileSearchBar';
import Onboardingleft from '../onboardingleft/Onboardingleft';
import MyEventDetails from './MyEventDetails';
import MyEventFullDetail from './MyEventFullDetail';

const MyEvent = () => {
  const [showFullDetail, setShowFullDetail] = useState(false);

  const handleCardClick = () => setShowFullDetail(true);
  const handleBackClick = () => setShowFullDetail(false);

  return (
    <section className="flex bg-[#EBEAEA] min-h-screen h-screen overflow-hidden">
      {/* Left Sidebar */}
      <div className="flex-shrink-0">
        <Onboardingleft />
      </div>

      {/* Right Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-shrink-0">
          <ProfileSearchBar />
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {showFullDetail ? (
            <MyEventFullDetail onBack={handleBackClick} />
          ) : (
            <MyEventDetails onCardClick={handleCardClick} />
          )}
        </div>
      </div>
    </section>
  );
};

export default MyEvent;
