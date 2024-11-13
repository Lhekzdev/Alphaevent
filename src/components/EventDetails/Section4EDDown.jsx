import React from "react";
import heartRed from '../../assets/heartRed.svg';
import calender from '../../assets/calender.svg';
import location from '../../assets/location.svg';
import arrowblue from '../../assets/arrowblue.svg';
import data from '../../../data/db.json'; // Import the data

const Section4EDDown = () => {
  return (
    <>
      <section className="mt-[24px]">
        <div className="w-full  lg:w-[1280px] ml-[60px] mr-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Sm for better scaling */}
          {data.feacturedEvent.map((event) => (
            <div key={event.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative">
                <button className="absolute top-[26px] left-[26px] bg-[#3A7BD5] px-[10px] py-[6px] sm:py-[10px] rounded-[10px] text-[#FFFFFF] text-[12px] sm:text-[14px] z-10">
                  {event.eventType}
                </button>
                <div className="w-full flex flex-col">
                  <img
                    src={event.bg}
                    loading="lazy"
                    alt="event background"
                    className="w-full h-[180px] sm:h-auto"
                  />
                </div>
              </div>
              <div className="px-[12px] sm:px-[20px]">
                <div className="flex justify-between mt-[10px] sm:mt-[17px]">
                  <p className="text-[18px] sm:text-[24px] font-bold text-[#333333]">
                    {event.conference}
                  </p>
                  <img src={heartRed} alt="heart icon" />
                </div>
                <div className="flex flex-col sm:flex-row gap-[10px] mt-[8px] sm:mt-[16px]">
                  <div className="flex gap-[5px]">
                    <img src={calender} alt="calendar icon" />
                    <p className="text-[12px] sm:text-[14px] text-[#757575] font-light">
                      {event.date}
                    </p>
                  </div>
                  <div className="flex gap-[5px]">
                    <img src={location} alt="location icon" />
                    <p className="text-[12px] sm:text-[14px] text-[#757575] font-light">
                      {event.location}
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-[12px] sm:px-[20px] mt-[10px] sm:mt-[12px]">
                <p className="text-left text-[#757575] font-light text-[12px] sm:text-[14px]">
                  Organized by <span className="text-[#333333]">{event.by}</span>
                </p>
                <div className="flex justify-between items-center mt-[8px] sm:mt-[8.5px] mb-[20px] sm:mb-[25px]">
                  <div className="flex gap-[5px] text-[#FF6B6B]">
                    <p>
                      $ <span>{event.initialAmount}</span>
                    </p>
                    <p>-</p>
                    <p>
                      $ <span>{event.lastAmount}</span>
                    </p>
                  </div>
                  <button className="bg-[#3A7BD5] text-white px-[24px] sm:px-[32px] py-[10px] sm:py-[14px] rounded-[10px]">
                    Get Ticket
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-[30px] sm:mt-[42px] gap-[8px] sm:gap-[10px]">
          <p className="text-[#3A7BD5] text-[12px] sm:text-[14px]">SEE MORE EVENTS</p>
          <img src={arrowblue} alt="" className="w-[16px] sm:w-auto" />
        </div>
      </section>
    </>
  );
};

export default Section4EDDown;
