import React, { useEffect, useState } from "react";
import heartRed from "../../../assets/heartRed.svg";
import calender from "../../../assets/calender.svg";
import location from "../../../assets/location.svg";
import arrowblue from "../../../assets/arrowblue.svg";
import { Link } from "react-router-dom"; 
 import { IoMdArrowRoundForward } from "react-icons/io";

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
    <section className="mt-[24px] px-[10px] md:px-[80px] bg-[#F3F5FA]">
      <div className="w-full place-content-center  grid lg:grid-cols-4 md:grid-cols-2 gap-6 bg-[#F3F5FA]">
        {events.slice(0, 4).map((event) => (
      
              <Link  key={event.eventID}  to={`/eventsdetailshome/${event.eventID}`}>
           {/* <Link key={event.id} to={`/Eventsdetailshome/${event.id}`}> */}
            <div className=" overflow-hidden">
              <div className="relative">
                <button className="absolute top-[20px] left-[26px] bg-[#F3F5FA] font-bold px-[8px] py-[6px] sm:py-[10px] rounded-[10px] text-[#123499] text-[9px] sm:text-[12px] z-10">
         {event.eventCategory}
                </button>
                <div className="w-full flex flex-col">
                  <img
                    //  src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1770048441/featured_image_cyo3vz.png"
                     src={event.eventImgURL}
                    loading="lazy"
                    alt="event background"
                    className="w-[413px] h-[260px]  object-cover"
                  />
                </div>
              </div>
              <div className="px-[12px] sm:px-[20px] bg-[#F3F5FA]">
                <div className="flex justify-between pt-[10px] sm:mt-[17px] ">
                  <p className="text-[18px] sm:text-[24px] font-bold text-[#333333]">
                    {event.eventTitle}
                  
                  </p>
                  {/* <img src={heartRed} alt="heart icon" /> */}
                </div>
                <div>
                   <p className="text-left text-[#757575] font-light text-[10px] sm:text-[12px]">
                  Organized by <span className="text-[#333333]">{event.organizerName}</span>
                </p>
                </div>
                <div className="flex flex-col  gap-[10px] mt-[8px] sm:mt-[16px]">
                  <div className="flex gap-[5px]">
                    {/* <img src={calender} alt="calendar icon" /> */}
                    <p className="text-[12px] sm:text-[14px] text-[#333333] font-semibold">
                      {event.eventDate}
                      {/* DD-MM-YYYY • 00:00 GMT+1 */}
                    </p>
                  </div>
                  <div className="flex gap-[5px]">
                    {/* <img src={location} alt="location icon" /> */}
                    <p className="text-[12px] sm:text-[14px] text-[#757575] font-semibold">
                     {/* Location */}
                      {event.venueInformation}
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-[12px] sm:px-[20px] mt-[10px] sm:mt-[12px]">
                {/* <p className="text-left text-[#757575] font-light text-[12px] sm:text-[14px]">
                  Organized by <span className="text-[#333333]">{event.organizerName}</span>
                </p> */}

                
                <div className="flex justify-between items-center mt-[8px] sm:mt-[8.5px] mb-[20px] sm:mb-[25px]">
                 <div className="flex gap-[5px]  font-bold text-[#123499]">
                  <p>
                       
                         <span>{event.ticketpriceMIN}</span>
                        </p>
                        {/* <p>-</p>
                        <p>
                        ₦<span>{event.ticketpriceMAX}</span>
                        </p> */}
                  </div>
                  {/* <button className="bg-[#3A7BD5] text-white px-[24px] sm:px-[32px] py-[10px] sm:py-[14px] rounded-[10px]">
                    Get Ticket
                  </button> */}
                </div>
              </div>
                </div>






          </Link>
        ))}
      </div>

      <div className="flex justify-end mt-[30px] sm:mt-[42px] gap-[8px] sm:gap-[10px]">
        <p className="text-[#123499] text-[12px] sm:text-[14px]">
          <Link to="/ExploreEvents">SEE MORE EVENTS</Link>
        </p> 
       
<IoMdArrowRoundForward className="text-[#123499] mt-[3px] font-semibold"/>
        
      </div>
    </section>
  );
};

export default Section3;