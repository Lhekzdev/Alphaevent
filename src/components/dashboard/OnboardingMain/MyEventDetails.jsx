import React, { useEffect, useState } from "react";
import locatnicon from "../../../assets/locatnicon.svg";
import timeicon from "../../../assets/timeicon.svg";
import amountBlue from "../../../assets/amountBlue.svg";
import arrowblue from "../../../assets/arrowblue.svg"; 
 import { LuTag } from "react-icons/lu";
    import { IoIosArrowRoundForward } from "react-icons/io";
    import { useEventForm } from "../../context/context";

const MyEventDetails = ({ onCardClick }) => {
  const { userID } = useEventForm();

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyEvents = async () => {
      try {
        const response = await fetch(
          `https://alphaeventappdevmode.onrender.com/api/orgMYevents/${userID}`
        );

        const data = await response.json();

        if (response.ok) {
          setEvents(data.data);
        } else {
          console.log(data.msg);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (userID) {
      fetchMyEvents();
    }
  }, [userID]);

  return (
    <section className="p-4 overflow-y-auto max-h-screen">
      {/* Heading */}
      <div>
        <p className="text-[#333333] text-[24px] font-bold mb-[20px]">
          My Event
        </p>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="flex justify-center py-10">
          <div className="w-10 h-10 border-4 border-[#123499] border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : events.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          No events created yet.
        </div>
      ) : (
        <div className="parentCards grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
          {events.map((event) => (
            <div
              key={event.eventID}
              onClick={() => onCardClick(event)}
              className="cardOne cursor-pointer bg-[#FFFFFF] hover:border-yellow-600 border border-transparent
              w-full max-w-[500px] h-auto rounded-[13px] flex items-center flex-col md:flex-row gap-[20px]
              px-[20px] py-[24px] shadow-sm transition"
            >
              {/* Left Side */}
              <div className="left flex-1">
                <div className="text-[#333333] text-[12px] font-normal mb-1">
                  <p>{event.eventDate}</p>
                </div>

                <div className="text-[#333333] text-[20px] font-bold mb-2">
                  <p>{event.eventTitle}</p>
                </div>

                <div className="flex gap-[8px] items-center mb-2">
                  <img
                    src={locatnicon}
                    alt="Location"
                    className="w-[8px] h-[10px]"
                  />
                  <p className="text-[#ABABAB] text-[12px] font-normal">
                    {event.venueInformation}
                  </p>
                </div>

                <div className="flex gap-[8px] items-center mb-2">
                  <img
                    src={timeicon}
                    alt="Time"
                    className="w-[8px] h-[10px]"
                  />
                  <p className="text-[#ABABAB] text-[12px] font-normal">
                    {event.eventTime}
                  </p>
                </div>

                <div className="flex gap-[4px] items-center w-fit px-[12px] py-[8px] bg-[#2D6CCF1A] rounded-[30px] mb-2">
                  <LuTag className="text-[12px] text-[#123499]" />

                  <p className="text-[12px] text-[#123499] font-bold">
                    {event.ticketprice === "Free"
                      ? "Free"
                      : `₦${Number(event.ticketprice).toLocaleString()}`}
                  </p>
                </div>
              </div>

              {/* Right Side */}
              <div className="right flex-shrink-0">
                <img
                  src={event.imageURL}
                  alt={event.eventTitle}
                  className="w-full md:w-[240px] h-[136px] object-cover rounded"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View All Events Button */}
      <div className="w-full flex items-center justify-end mt-[28px]">
        <div className="flex items-center justify-center text-[#123499] text-[16px] font-normal gap-[10px] cursor-pointer hover:underline">
          <p>View all events</p>
          <IoIosArrowRoundForward />
        </div>
      </div>
    </section>
  );
};

export default MyEventDetails;