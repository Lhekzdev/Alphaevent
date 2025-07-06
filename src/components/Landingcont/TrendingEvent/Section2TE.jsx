import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heartWhite from '../../../assets/heartWhite.svg';
import calenderWhite from '../../../assets/calenderWhite.svg';
import locationWhite from '../../../assets/locationWhite.svg';
import arrowblue from '../../../assets/arrowblue.svg';

const Section3 = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTrending() {
      try {
        const res = await fetch("https://alphaeventappdevmode.onrender.com/api/trndeventAllGet", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }

        const json = await res.json();
        setEvents(json.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTrending();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading trending events...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">Error: {error}</p>;
  }

  return (
    <section className="mt-[24px] px-[30px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] sm:gap-[30px] lg:gap-[40px] overflow-hidden">
        {events.map(event => (
          <Link key={event.id} to={`/eventsdetailshome/${event.id}`}>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col sm:flex-row max-w-[522px] mx-auto">
              {/* Left */}
              <div className="relative w-[145px] flex-shrink-0">
                <button className="absolute top-[20px] left-[10px] bg-[#3A7BD5] px-[10px] sm:px-[12px] py-[6px] rounded-[10px] text-white text-[12px] sm:text-[14px] z-10">
                  Event Type
                </button>
                <img
                  src={event.eventImgURL}
                  alt="event"
                  loading="lazy"
                  className="w-[145px] h-[150px] sm:h-full object-cover"
                />
              </div>

              {/* Right */}
              <div className="bg-[#3A7BD5] w-[377px]">
                <div className="px-[12px] sm:px-[20px] pt-[12px] sm:pt-[17px]">
                  <div className="flex justify-between">
                    <p className="text-[18px] sm:text-[24px] font-bold text-[#FFF0F0]">
                      {event.eventTitle}
                    </p>
                    <img src={heartWhite} alt="favorite" className="w-[16px]" />
                  </div>
                  <div className="mt-[10px] flex flex-col gap-[8px] sm:gap-[10px]">
                    <div className="flex gap-[5px]">
                      <img src={calenderWhite} alt="date" />
                      <p className="text-[12px] mt-[10px] sm:text-[14px] text-[#FFF0F0] font-light">
                        {event.eventDate}
                      </p>
                    </div>
                    <div className="flex gap-[5px]">
                      <img src={locationWhite} alt="location" />
                      <p className="text-[12px] sm:text-[14px] text-[#FFF0F0] font-light mt-[10px]">
                        {event.venueInformation}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-[12px] sm:px-[20px] pb-[12px] sm:pb-[17px] mt-[10px] sm:mt-[12px] flex justify-between items-center">
                  <p className="text-[#FFF0F0] text-[14px] font-light mt-[10px] pl-[5px]">
                    Organized by{" "}
                    <span className="text-white font-bold text-[12px] sm:text-[14px]">
                      {event.organizerName}
                    </span>
                  </p>
                  </div>
                <div className="px-[12px] sm:px-[20px] pb-[12px] sm:pb-[17px] mt-[10px] sm:mt-[12px] flex justify-between items-center">
                 
                  <div className="flex items-center gap-[90px]">
                <div className="flex gap-[5px] text-[#FFF0F0]">
                        <p>
                          ₦<span>{event.ticketpriceMIN}</span>
                        </p>
                        <p>-</p>
                        <p>
                        ₦<span>{event.ticketpriceMAX
                          }</span>
                        </p>
                      </div>

                    <button className="bg-[#3A7BD5] text-white border-2 border-[#FFF0F0] px-[16px] sm:px-[22px] py-[4px] sm:py-[6px] rounded-[10px]">
                      Get Ticket
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-end mt-[30px] sm:mt-[42px] gap-[8px] sm:gap-[10px]">
        <Link to="/ExploreEvents" className="text-[#3A7BD5] text-[12px] sm:text-[14px]">
          SEE MORE EVENTS
        </Link>
        <img src={arrowblue} alt="arrow" className="w-[12px] sm:w-auto" />
      </div>
    </section>
  );
};

export default Section3;
