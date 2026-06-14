import React, { useEffect, useState} from "react";
import { useEventForm } from "../../context/context";
import { toast } from "react-toastify";
import { useNavigate} from "react-router-dom";

const MyEventFullDetail = ({ onBack, eventID }) => {
    const navigate = useNavigate();
  const { userID } = useEventForm();
const [eventDetails, setEventDetails] = useState(null);
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleDelete = async () => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this event?"
  );

  if (!confirmed) return;

  try {
    const response = await fetch(
      `https://alphaeventappdevmode.onrender.com/api/deleteEvent/${userID}/${eventData.eventID}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();

    if (response.ok) {
      toast.success("Event deleted successfully");

      setTimeout(() => {
        onBack();
      }, 1000);
    } else {
      toast.error(data.msg);
    }
  } catch (error) {
    console.error(error);
    toast.error("Failed to delete event");
  }
};

 useEffect(() => {
  const fetchEventDetails = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://alphaeventappdevmode.onrender.com/api/orgMYeventdetails/${userID}/${eventID}`
      );

      const data = await response.json();

      if (response.ok) {
        setEventData(data.data);
      } else {
        toast.error(data.msg);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch event details");
    } finally {
      setLoading(false);
    }
  };

  if (userID && eventID) {
    fetchEventDetails();
  }
}, [userID, eventID]);
if (loading) {
  return (
    <div className="flex justify-center items-center h-[300px]">
      <div className="w-10 h-10 border-4 border-[#123499] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

if (!eventData) {
  return (
    <div className="text-center py-10">
      No event details found
    </div>
  );
}


  const percentage =
    eventData.ticketQtyCount > 0
      ? (eventData.ticketsSold / eventData.ticketQtyCount) * 100
      : 0;

  return (
    <section className="p-4 w-full">

      <button
        onClick={onBack}
        className="text-blue-500 mb-4"
      >
        ← Back to events
      </button>

      <div className="cardOne bg-[#FFFFFF] rounded-[13px] px-[20px] py-[24px]">

        {/* HERO IMAGE */}
        <div className="hero">
          <img
            src={eventData.eventImgURL}
            alt={eventData.eventTitle}
            className="w-full h-[350px] object-cover rounded-lg"
          />
        </div>

        {/* TITLE */}
        <div className="flex justify-between items-center py-[18px]">
          <p className="text-[24px] font-extrabold text-[#333333]">
            {eventData.eventTitle}
          </p>

          <div className="flex gap-[20px]">
          <img
  src={"https://res.cloudinary.com/dqtyrjpeh/image/upload/v1749561768/lucide_edit_aivdmp.png"}
  alt="edit"
  className="cursor-pointer"
  // onClick={() =>
  //   navigate(`/EditEvent/${eventData.eventID}`)
  // }
/>
          <img
  src={"https://res.cloudinary.com/dqtyrjpeh/image/upload/v1749561768/weui_delete-outlined_rrda4p.png"}
  alt="delete"
  className="cursor-pointer"
  onClick={handleDelete}
/>
          </div>
        </div>

        {/* EVENT INFO */}
        <div className="text-[#333333] text-[14px] font-normal">

          {/* DATE */}
          <div className="flex gap-[10px] items-center mb-[12px]">
            <img
              src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1749561769/Calendar_aclkly.png"
              className="w-[12px] h-[12px]"
              alt=""
            />
            <p>{eventData.eventDate}</p>
          </div>

          {/* TIME */}
          <div className="flex gap-[10px] items-center mb-[12px]">
            <img
              src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_time_rm5459.svg"
              className="w-[12px] h-[12px]"
              alt=""
            />
            <p>{eventData.eventTime}</p>
          </div>

          {/* LOCATION */}
          <div className="flex gap-[10px] items-center mb-[12px]">
            <img
              src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_location_ayfnzy.svg"
              className="w-[12px] h-[12px]"
              alt=""
            />
            <p>{eventData.venueInformation}</p>
          </div>

          {/* TICKET STATS */}
          <div className="flex gap-[10px] items-center mb-[5px]">
            <img
              src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1749561768/Vector_49_dtmdd8.png"
              className="w-[12px] h-[12px]"
              alt=""
            />

            <div className="flex text-[#333333]">
              <p className="font-semibold">
                {eventData.ticketsSold}
              </p>

              <span>/</span>

              <p>{eventData.ticketQtyCount}</p>

              <p className="ml-[2px]">
                Registered
              </p>
            </div>
          </div>

          {/* PROGRESS BAR */}
          <div className="w-[150px] h-[8px] bg-gray-300 rounded-full overflow-hidden ml-[20px]">
            <div
              className="h-full rounded-full"
              style={{
                width: `${percentage}%`,
                background:
                  "linear-gradient(to right, #2D6CCF, #2DACCF)",
              }}
            />
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-[32px] border-t border-t-[#ABABAB] py-[20px]">

          <p className="text-[20px] font-bold text-[#333333] mb-[15px]">
            Description
          </p>

          <p className="text-[12px] font-normal text-[#ABABAB] text-justify">
            {eventData.eventDescription}
          </p>

        </div>
      </div>
    </section>
  );
};

export default MyEventFullDetail;