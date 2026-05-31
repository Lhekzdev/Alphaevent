import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import alventlogo from "../../../assets/alventlogo.svg";

export default function OrderSummartGeneralAdmission() {
  const navigate = useNavigate();
  const { eventID } = useParams();
  const { state } = useLocation();
  const location = useLocation();

  const tickets = state?.tickets || [];

  const regularTicket = tickets.find(
    (t) => t.ticketType?.toLowerCase() === "regular"
  );

  if (!regularTicket) {
    return (
      <div className="p-10 text-center text-red-500">
        No Regular ticket found.
      </div>
    );
  }

  const [quantity, setQuantity] = useState(() => {
    const init = {};

    tickets.forEach((t) => {
      init[t._id] = t.quantity || 1;
    });

    return init;
  });

  const currentQty = quantity[regularTicket._id] || 1;

  const ticketPrice = Number(regularTicket.ticketPrice || 0);

  const subTotal = currentQty * ticketPrice;

  const serviceFee = subTotal * 0.05;

  const total = subTotal + serviceFee;

  const changeQty = (id, delta) => {
    setQuantity((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }));
  };

  return (
    <div className="min-h-screen rounded-[12px] bg-[#F3F5FA] flex items-center justify-center px-4">
      <div className="w-full max-w-[840px] bg-[#F3F5FA] rounded-md shadow-sm p-8">

        {/* HEADER */}
        <div
          onClick={() => navigate("/exploreEvents")}
          className="flex gap-[10px] mb-[60px] cursor-pointer"
        >
          <button className="text-[#1E40AF]">
            <ChevronLeft size={20} />
          </button>

          <img
            className="w-[189px] h-[32px]"
            src={alventlogo}
            alt="logo"
          />
        </div>

        {/* TITLE */}
        <div className="flex flex-col pb-4 gap-y-[24px]">
          <h2 className="font-bold text-[18px] text-[#000000]">
            Order Summary (General)
          </h2>

          <p className="text-sm text-[#848182]">
            {state?.eventTitle || "Event"}
          </p>
        </div>

        {/* DETAILS */}
        <div className="space-y-5">

          {/* EVENT */}
          <div className="flex justify-between border-b pb-4">
            <span>Event</span>

            <span className="text-[#848182]">
              {state?.eventTitle}
            </span>
          </div>

          {/* QUANTITY */}
          <div className="flex justify-between items-center border-b pb-4">
            <span>Quantity</span>

            <div className="flex items-center border rounded overflow-hidden">
              <button
                onClick={() =>
                  changeQty(regularTicket._id, -1)
                }
                className="px-3 py-1"
              >
                -
              </button>

              <span className="px-4">
                {currentQty}
              </span>

              <button
                onClick={() =>
                  changeQty(regularTicket._id, 1)
                }
                className="px-3 py-1"
              >
                +
              </button>
            </div>
          </div>

          {/* TICKET TYPE */}
          <div className="flex justify-between border-b pb-4">
            <span>Ticket Type</span>

            <span className="text-[#848182]">
              {regularTicket.ticketType}
            </span>
          </div>

          {/* PRICE */}
          <div className="flex justify-between border-b pb-4">
            <span>Ticket Price</span>

            <span className="text-[#848182]">
              ₦{ticketPrice.toLocaleString()} per ticket
            </span>
          </div>

          {/* SERVICE FEE */}
          <div className="flex justify-between border-b pb-4">
            <span>Service Fee (5%)</span>

            <span className="text-orange-500">
              ₦{serviceFee.toLocaleString()}
            </span>
          </div>

          {/* TOTAL */}
          <div className="flex justify-between items-center pt-2">
            <span className="font-bold text-[18px]">
              Total To Pay
            </span>

            <span className="text-2xl font-bold text-[#123499]">
              ₦{total.toLocaleString()}
            </span>
          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={() =>
            navigate(`/checkoutpage/${eventID}`, {
              state: {
                   ...state,
                ticket: {
                  ...regularTicket,
                  quantity: currentQty,
                  total,
                },
                quantity: currentQty,
                total,
                type: state?.type,
                    previousRoute: location.pathname,
              },
            })
          }
          className="w-full mt-10 bg-[#1E40AF] text-white py-4 rounded-md flex items-center justify-center gap-2"
        >
          Continue
          <ChevronRight size={18} />
        </button>

      </div>
    </div>
  );
}