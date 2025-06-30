import React from "react";
import locatnicon from "../../../assets/locatnicon.svg";
import timeicon from "../../../assets/timeicon.svg";
import amountBlue from "../../../assets/amountBlue.svg";
import arrowblue from "../../../assets/arrowblue.svg";

const MyEventDetails = ({ onCardClick }) => {
  return (
    <section className="p-4 overflow-y-auto max-h-screen">
      {/* Heading */}
      <div>
        <p className="text-[#333333] text-[24px] font-bold mb-[20px]">
          My Event
        </p>
      </div>

      {/* Event Cards Grid */}
      <div className="parentCards grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            onClick={onCardClick}
            className="cardOne cursor-pointer bg-[#FFFFFF] hover:border-yellow-600
 w-full max-w-[500px] h-auto rounded-[13px] flex items-center flex-col md:flex-row gap-[20px] px-[20px] py-[24px] shadow-sm transition"
          >
            {/* Left Side */}
            <div className="left flex-1">
              <div className="text-[#333333] text-[12px] font-normal mb-1">
                <p>
                  <span>April 12, 2025</span> - <span>April 14, 2025</span>
                </p>
              </div>
              <div className="text-[#333333] text-[20px] font-bold mb-2">
                <p>Fashion Fest</p>
              </div>
              <div className="flex gap-[8px] items-center mb-2">
                <img
                  src={locatnicon}
                  alt="Location"
                  className="w-[8px] h-[10px]"
                />
                <p className="text-[#ABABAB] text-[12px] font-normal">
                  City Conference Hall, Abuja
                </p>
              </div>
              <div className="flex gap-[8px] items-center mb-2">
                <img src={timeicon} alt="Time" className="w-[8px] h-[10px]" />
                <p className="text-[#ABABAB] text-[12px] font-normal">
                  <span>9:00 AM WAT</span> - <span>12:00 PM WAT</span>
                </p>
              </div>
              <div className="flex gap-[4px] items-center w-fit px-[12px] py-[8px] bg-[#2D6CCF1A] rounded-[30px] mb-2">
                <img src={amountBlue} alt="Amount" />
                <p className="text-[12px] text-[#2D6CCF] font-bold">
                  ₦<span>2,500</span>
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="right flex-shrink-0">
              <img
                src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1749158930/Image_12_n2mpl0.png"
                alt="Event"
                className="w-full md:w-[240px] h-[136px] object-cover rounded"
              />
            </div>
          </div>
        ))}
      </div>

      {/* View All Events Button */}
      <div className="w-full flex items-center justify-end mt-[28px]">
        <div className="flex gap-[10px] cursor-pointer hover:underline">
          <p className="text-[#3A7BD5] text-[16px] font-normal">
            View all events
          </p>
          <img src={arrowblue} alt="Arrow" />
        </div>
      </div>
    </section>
  );
};

export default MyEventDetails;
