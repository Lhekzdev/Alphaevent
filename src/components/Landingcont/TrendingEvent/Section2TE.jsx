import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heartWhite from '../../../assets/heartWhite.svg';
import calenderWhite from '../../../assets/calenderWhite.svg';
import locationWhite from '../../../assets/locationWhite.svg';
import arrowblue from '../../../assets/arrowblue.svg'; 
import { IoMdArrowRoundForward } from "react-icons/io";

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
    return <p className="text-center mt-10 text-[#E7470D]">Error: {error}</p>;
  }

  return (
    <section className="mt-[24px] px-[30px]">
      <div className="grid grid-cols-3 gap-[20px] sm:gap-[30px] lg:gap-[40px] overflow-hidden">
        {events.slice(0, 3).map(event => (
          <Link  key={event.eventID}  to={`/eventsdetailshome/${event.eventID}`}>
          {/* // <Link key={event.id} to={`/eventsdetailshome/${event.id}`}> */}
            <div className=" rounded-lg overflow-hidden flex flex-col sm:flex-row max-w-[522px] mx-auto">
              {/* Left */}
              <div className="relative w-[145px] flex-shrink-0">
                <button className="absolute top-[20px] left-[10px] bg-white px-[10px] sm:px-[12px] py-[6px] rounded-[10px] text-[#123499] text-[12px] sm:text-[14px] z-10">
                 Category
                </button>
                <img
                  src={event.eventImgURL}
                  alt="event"
                  loading="lazy"
                  className="w-[145px] h-[150px] sm:h-full object-cover"
                />
              </div>

              {/* Right */}
              <div className="bg-[#F3F5FA] text-[#333333] w-[377px] px-[12px] pt-[20px]">
                <div className=" sm:px-[20px] pt-[12px] sm:pt-[17px]">
                  <div className="flex items-center">
                    <p className="text-[18px] sm:text-[24px] font-bold ">
                      {event.eventTitle}
                      {/* Event Name */}
                    </p>
                    {/* <img src={heartWhite} alt="favorite" className="w-[16px]" /> */}
                  </div>
                  <div className="mt-[15px]">
                    <p className=" text-[14px] font-light mt-[10px] ">
                    Organized by{" "}
                    <span className=" font-bold text-[12px] sm:text-[14px]">
                      {event.organizerName}
                    </span>
                  </p>
                  </div>
                  <div className="mt-[15px]">
                        <p className="text-[12px] mt-[10px] sm:text-[14px]  font-light">
               {event.eventDate}
                    </p>
                  </div>
                  <div className="mt-[15px]">
                    <p>       {event.venueInformation}</p>
                  </div>
                  <div className="mt-[15px]">

                    <p>
                       <p>
                          ₦<span>{event.ticketpriceMIN}</span>
                        </p>
                        {/* <p>-</p> */}
                        {/* <p>
                        ₦<span>{event.ticketpriceMAX
                          }</span>
                        </p> */}
                    </p>
                  </div>
                  <div className="mt-[10px] flex flex-col gap-[8px] sm:gap-[10px]">
                    {/* <div className="flex gap-[5px]">
                      <img src={calenderWhite} alt="date" />
                      <p className="text-[12px] mt-[10px] sm:text-[14px]  font-light">
                        {event.eventDate}
                      </p>
                    </div> */}
                    {/* <div className="flex gap-[5px]">
                      <img src={locationWhite} alt="location" />
                      <p className="text-[12px] sm:text-[14px] font-light mt-[10px]">
                        {event.venueInformation}
                      </p>
                    </div> */}
                  </div>
                </div>
                <div className="px-[12px] sm:px-[20px] pb-[12px] sm:pb-[17px] mt-[10px] sm:mt-[12px] flex justify-between items-center">
                  {/* <p className=" text-[14px] font-light mt-[10px] pl-[5px]">
                    Organized by{" "}
                    <span className=" font-bold text-[12px] sm:text-[14px]">
                      {event.organizerName}
                    </span>
                  </p> */}
                  </div>
                <div className="px-[12px] sm:px-[20px] pb-[12px] sm:pb-[17px] mt-[10px] sm:mt-[12px] flex justify-between items-center">
                 
                  <div className="flex items-center gap-[90px]">
                <div className="flex gap-[5px] ">
                        {/* <p>
                          ₦<span>{event.ticketpriceMIN}</span>
                        </p>
                        <p>-</p>
                        <p>
                        ₦<span>{event.ticketpriceMAX
                          }</span>
                        </p> */}
                      </div>

                    {/* <button className="bg-[#3A7BD5]  border-2 border-[#FFF0F0] px-[16px] sm:px-[22px] py-[4px] sm:py-[6px] rounded-[10px]">
                      Get Ticket
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-end mt-[30px] sm:mt-[42px] gap-[8px] sm:gap-[10px] mb-[20px]">
        <Link to="/ExploreEvents" className="text-[#123499] text-[12px] sm:text-[14px]">
          SEE MORE EVENTS
        </Link>
        <IoMdArrowRoundForward className="text-[#123499] mt-[3px] font-semibold"/>
        {/* <img src={arrowblue} alt="arrow" className="w-[12px] sm:w-auto" /> */}
      </div>
    </section>
  );
};

export default Section3;