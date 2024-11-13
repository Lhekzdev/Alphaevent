import React, { useState } from "react";
import heartRed from '../../assets/heartRed.svg';
import calender from '../../assets/calender.svg';
import location from '../../assets/location.svg';
import arrowblue from '../../assets/arrowblue.svg';
import data from '../../../data/db.json'; // Import the data

const Section3EE = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 9; // Number of events per page

  // Calculate total pages
  const totalPages = Math.ceil(data.allEvent.length / eventsPerPage);

  // Get current events based on pagination
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = data.allEvent.slice(indexOfFirstEvent, indexOfLastEvent);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <section className="mt-[24px]">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentEvents.map((event) => (
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
                    className="w-full h-[180px] sm:h-auto object-cover"
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
                      ₦ <span>{event.initialAmount}</span>
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

        {/* Pagination */}
        <div className="w-[329px] flex items-center justify-center gap-[10px] mt-[60px] mb-[50px] mx-auto">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`w-[44px] px-[10px] py-[10px] rounded-[5px] border-[2px] border-[#2F3B4C] ${
                currentPage === index + 1 ? "bg-[#3A7BD5] text-white" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default Section3EE;
