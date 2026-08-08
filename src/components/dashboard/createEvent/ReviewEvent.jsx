import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useEventForm } from "../../context/context";
import axios from "axios";
import { toast } from "react-toastify";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

const ReviewEvent = () => {
  const { formData, setFormData, handleSubmit } = useEventForm();
  const navigate = useNavigate();

  const [coords, setCoords] = useState(null);

  const myKey = import.meta.env.VITE_KEY;

  // Validate ticket prices
  useEffect(() => {
    let changed = false;

    const tickets = formData.tickets.map((tk) => {
      if (tk.PriceType === "paid" && !tk.ticketPrice) {
        toast.warning(
          "⚠ Paid tickets require a price — this ticket has been switched to Free.",
          {
            className: "custom-toast",
            icon: "⚠️",
          }
        );

        changed = true;

        return {
          ...tk,
          PriceType: "free",
        };
      }

      return tk;
    });

    if (changed) {
      setFormData((f) => ({
        ...f,
        tickets,
      }));
    }
  }, []);

  // Get event location coordinates
  const handleLocate = async () => {
    try {
      const query = `${formData.eventCity}, ${formData.eventState}, ${formData.eventCountry}`;

      const response = await axios.get(
        "https://api.opencagedata.com/geocode/v1/json",
        {
          params: {
            q: query,
            key: myKey,
          },
        }
      );

      if (response.data.results?.length > 0) {
        const { lat, lng } = response.data.results[0].geometry;
        setCoords([lat, lng]);
      }
    } catch (error) {
      console.error("Unable to locate event:", error);
    }
  };

  useEffect(() => {
    if (
      formData.eventCountry ||
      formData.eventState ||
      formData.eventCity
    ) {
      handleLocate();
    }
  }, [
    formData.eventCountry,
    formData.eventState,
    formData.eventCity,
  ]);

  // Ticket summary
  const eventTypeOne = () => {
    return formData.tickets
      .filter((tk) =>
        ["Vip", "Regular", "Early Bird"].includes(tk.ticketType)
      )
      .map((ticket, i) => {
        const isPaidValid =
          ticket.PriceType?.toLowerCase() === "paid" &&
          Number(ticket.ticketPrice) > 0;

        const maxTickets =
          ticket.ticketType === "Vip" ? 200 : 100;

        return (
          <div
            key={i}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 w-full py-2"
          >
            <div>
              <h6 className="font-bold text-[16px]">
                {ticket.ticketType}
              </h6>

              <h6 className="text-[10px] text-[#ABABAB]">
                {isPaidValid
                  ? `₦ ${ticket.ticketPrice}`
                  : "Free Ticket"}
              </h6>

              <h6 className="text-[10px] text-[#ABABAB]">
                Max: {maxTickets} ticket(s)
              </h6>
            </div>

            <div
              className={`w-[60px] h-[28px] flex items-center justify-center text-center text-white rounded-[68px] ${
                isPaidValid
                  ? "bg-[#FF0000]"
                  : "bg-[#008000]"
              }`}
            >
              {isPaidValid ? "Paid" : "Free"}
            </div>
          </div>
        );
      });
  };

  return (
    <section className="w-full max-w-[929px] mx-auto bg-[#F8F9FC] font-Lato px-4 py-8 sm:px-6 md:px-10 flex flex-col gap-y-6">

      {/* Header */}
      <div className="font-bold text-[20px]">
        <h4>PREVIEW EVENTS</h4>
      </div>

      {/* Event Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8 pb-5 border-b border-[#ABABAB]">

        <img
          className="rounded-full w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] object-cover"
          src={formData.eventImgURL}
          alt="event"
        />

        <div className="flex flex-col gap-2 min-w-0">
          <h2 className="text-2xl sm:text-3xl font-bold break-words">
            {formData.eventTitle}
          </h2>

          <p className="text-sm sm:text-base text-[#ABABAB]">
            {formData.eventCategory}
          </p>
        </div>
      </div>

      {/* Event Date, Time and Quantity */}
      <div className="flex flex-col gap-y-4 w-full">

        {/* Date */}
        <div className="flex items-start gap-2 flex-wrap">
          <img
            className="w-[14px] h-[14px] mt-1"
            src="/calender.svg"
            alt="Calendar"
          />

          <span>
            {formData.startDate
              ? new Date(formData.startDate).toLocaleDateString()
              : "N/A"}
          </span>

          <span>-</span>

          <span>
            {formData.endDate
              ? new Date(formData.endDate).toLocaleDateString()
              : "N/A"}
          </span>
        </div>

        {/* Time */}
        <div className="flex items-start gap-2 flex-wrap">
          <img
            className="w-[14px] h-[14px] mt-1"
            src="/clock.svg"
            alt="Clock"
          />

          <span className="break-words">
            {formData.startTime} {formData.startClock}{" "}
            {formData.startTimezone}
            {" - "}
            {formData.endTime} {formData.endClock}{" "}
            {formData.endTimezone}
          </span>
        </div>

        {/* Quantity */}
        <div className="flex items-start gap-2">
          <img
            className="w-[14px] h-[14px] mt-1"
            src="/quantity.svg"
            alt="Quantity"
          />

          <div className="flex flex-wrap gap-2">
            {formData.tickets.map((ticket, index) => (
              <span key={index}>
                {ticket.quantity}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="w-full flex flex-col gap-y-4 pb-6 border-b border-[#ABABAB]">

        <h3 className="text-xl sm:text-2xl font-bold">
          Description
        </h3>

        <p className="text-sm sm:text-base break-words text-[#ABABAB] leading-6">
          {formData.eventDesc}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-col gap-y-4">

        <h5 className="font-medium">
          Tags
        </h5>

        <div className="flex flex-wrap gap-3">
          {formData.eventTags?.map((tag, index) => (
            <span
              key={index}
              className="text-sm sm:text-base font-bold px-3 py-2 bg-[#F1F1F1] rounded-[10px] shadow text-[#333333]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Location */}
      <div className="flex flex-col sm:flex-row gap-3 w-full">

        <img
          className="w-[14px] h-[14px] mt-1"
          src="/location.svg"
          alt="Location"
        />

        <div className="w-full min-w-0">

          {/* Location details */}
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2 bg-slate-300 px-4 py-2 text-sm">
            <span>
              <strong>Country:</strong>{" "}
              {formData.eventCountry}
            </span>

            <span>
              <strong>State:</strong>{" "}
              {formData.eventState}
            </span>

            <span>
              <strong>City:</strong>{" "}
              {formData.eventCity}
            </span>
          </div>

          {/* Map */}
          {coords && (
            <div className="w-full mt-2 overflow-hidden rounded-lg">
              <MapContainer
                center={coords}
                zoom={13}
                style={{
                  height: "clamp(250px, 45vw, 400px)",
                  width: "100%",
                }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={coords}>
                  <Popup>
                    {`${formData.eventCity}, ${formData.eventState}, ${formData.eventCountry}`}
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          )}
        </div>
      </div>

      {/* Tickets Summary */}
      <div className="w-full bg-white px-4 sm:px-5 py-4 rounded-[10px] flex flex-col gap-y-5">

        <h4 className="font-bold text-lg sm:text-xl">
          Tickets Summary
        </h4>

        <div className="w-full">
          {eventTypeOne()}
        </div>
      </div>

      {/* Buttons */}
      <div className="w-full flex flex-col-reverse sm:flex-row sm:justify-end gap-3">

        <button
          type="button"
          onClick={() => navigate("/createEvent")}
          className="w-full sm:w-[188px] min-h-[48px] flex rounded-[8px] justify-center items-center gap-3 text-base sm:text-lg text-[#2D6CCF] border border-[#2D6CCF]"
        >
          <span>Edit Event</span>

          <img
            src="/editevent.svg"
            alt="edit event"
            className="w-5 h-5"
          />
        </button>

        <button
          type="submit"
          onClick={async (e) => {
            const result = await handleSubmit(e);

            if (result !== false) {
              navigate("/createEvent");
            }
          }}
          className="w-full sm:w-[163px] min-h-[48px] bg-[#2D6CCF] text-white font-bold text-base sm:text-lg rounded-[8px]"
        >
          Create Event
        </button>
      </div>

    </section>
  );
};

export default ReviewEvent;
