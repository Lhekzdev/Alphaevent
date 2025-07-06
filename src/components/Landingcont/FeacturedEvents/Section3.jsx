import React, { useEffect, useState } from "react";
import heartRed from "../../../assets/heartRed.svg";
import calender from "../../../assets/calender.svg";
import location from "../../../assets/location.svg";
import arrowblue from "../../../assets/arrowblue.svg";
import { Link } from "react-router-dom";

const Section3 = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://alphaeventappdevmode.onrender.com/api/allFeaturedEvents', {
          method: 'GET', // 👈 Explicit GET method
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) throw new Error('Failed to fetch events');
        const data = await response.json();
        console.log("Fetched Data:", data);
        setEvents(data.data);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };
  
    fetchEvents();
  }, []);
  

  if (loading) return <p className="text-center mt-10">Loading events...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <section className="mt-[24px] px-[30px] md:px-[80px]">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Link key={event.id} to={`/Eventsdetailshome/${event.id}`}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="relative">
                <button className="absolute top-[26px] left-[26px] bg-[#3A7BD5] px-[10px] py-[6px] sm:py-[10px] rounded-[10px] text-[#FFFFFF] text-[12px] sm:text-[14px] z-10">
                  Event Type
                </button>
                <div className="w-full flex flex-col">
                  <img
                    src={event.eventImgURL}
                    loading="lazy"
                    alt="event background"
                    className="w-[413px] h-[260px]  object-cover"
                  />
                </div>
              </div>
              <div className="px-[12px] sm:px-[20px]">
                <div className="flex justify-between mt-[10px] sm:mt-[17px]">
                  <p className="text-[18px] sm:text-[24px] font-bold text-[#333333]">
                    {event.eventTitle}
                  </p>
                  <img src={heartRed} alt="heart icon" />
                </div>
                <div className="flex flex-col sm:flex-row gap-[10px] mt-[8px] sm:mt-[16px]">
                  <div className="flex gap-[5px]">
                    <img src={calender} alt="calendar icon" />
                    <p className="text-[12px] sm:text-[14px] text-[#757575] font-light">
                      {event.eventDate}
                    </p>
                  </div>
                  <div className="flex gap-[5px]">
                    <img src={location} alt="location icon" />
                    <p className="text-[12px] sm:text-[14px] text-[#757575] font-light">
                      {event.venueInformation}
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-[12px] sm:px-[20px] mt-[10px] sm:mt-[12px]">
                <p className="text-left text-[#757575] font-light text-[12px] sm:text-[14px]">
                  Organized by <span className="text-[#333333]">{event.organizerName}</span>
                </p>

                
                <div className="flex justify-between items-center mt-[8px] sm:mt-[8.5px] mb-[20px] sm:mb-[25px]">
                 <div className="flex gap-[5px] text-[#FF6B6B]">
                  <p>
                          ₦<span>{event.ticketpriceMIN}</span>
                        </p>
                        <p>-</p>
                        <p>
                        ₦<span>{event.ticketpriceMAX}</span>
                        </p>
                  </div>
                  <button className="bg-[#3A7BD5] text-white px-[24px] sm:px-[32px] py-[10px] sm:py-[14px] rounded-[10px]">
                    Get Ticket
                  </button>
                </div>
              </div>
                </div>






          </Link>
        ))}
      </div>

      <div className="flex justify-end mt-[30px] sm:mt-[42px] gap-[8px] sm:gap-[10px]">
        <p className="text-[#3A7BD5] text-[12px] sm:text-[14px]">
          <Link to="/ExploreEvents">SEE MORE EVENTS</Link>
        </p>
        <img src={arrowblue} alt="arrow" className="w-[16px] sm:w-auto" />
      </div>
    </section>
  );
};

export default Section3;
