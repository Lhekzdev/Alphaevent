import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import alventlogo from "../../../assets/alventlogo.svg";

export default function OrderSummartVIPAdmission() {

const navigate = useNavigate();
const { eventID } = useParams();

const { state } = useLocation();

const tickets = state?.tickets || [];

const vipTicket = tickets.find(
  (t) => t.ticketType?.toLowerCase() === "vip"
);

if (!vipTicket) {
  return (
    <div className="p-10 text-center text-red-500">
      No VIP ticket found.
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


// Get the current VIP quantity:

const currentQty = quantity[vipTicket._id] || 1;
const ticketPrice = Number(vipTicket.ticketPrice || 0);

const subTotal = currentQty * ticketPrice;

const serviceFee = subTotal * 0.05;

const total = subTotal + serviceFee;



  // ✅ update quantity per ticket
  const changeQty = (id, delta) => {
    setQuantity((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }));
  };

  return (
    <div className="min-h-screen bg-[#F3F5FA] flex items-center justify-center px-4">

      <div className="w-full max-w-[840px] bg-[#F3F5FA] p-8 rounded-md">

        {/* HEADER */}
        <div className="flex gap-[10px] mb-[60px]">
          <button onClick={() => navigate("/exploreEvents")}>
            <ChevronLeft className="text-[#1E40AF]" size={20} />
          </button>

          <img
            className="w-[189px] h-[32px]"
            src={alventlogo}
            alt="logo"
          />
        </div>

        {/* TITLE */}
        <div className="mb-8">
          <h2 className="text-[18px] font-bold">
            Order Summary (VIP)
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
          <div className="flex justify-between border-b pb-4 items-center">
            <span>Quantity</span>

            <div className="flex items-center border rounded">
                 <button
                    onClick={() => changeQty(vipTicket._id, -1)}
                    className="px-3 py-1"
                  >
                -
              </button>

              <span className="px-4">        {currentQty}</span>

             <button
                    onClick={() => changeQty(vipTicket._id, 1)}
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
         {vipTicket.ticketType}
            </span>
          </div>
          {/* PRICE */}
          <div className="flex justify-between border-b pb-4">
            <span>Ticket Price</span>
            <span className="text-[#848182]">
       ₦{(vipTicket.ticketPrice || 0).toLocaleString()} per ticket
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
          <div className="flex justify-between pt-2">
            <span className="font-bold text-[18px]">
              Total To Pay
            </span>

            <span className="text-[#123499] font-bold text-2xl">
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
    ...vipTicket,
    quantity: currentQty,
    total,
  },
  quantity: currentQty,
  total,
  type: state?.type,
      previousRoute: location.pathname,
}
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