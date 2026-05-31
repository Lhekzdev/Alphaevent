import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import alventlogo from "../../../assets/alventlogo.svg"

export default function OrderSummaryMixedAdmission() {
  const { eventID } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
const location = useLocation();
  // 🎯 data passed from EventTicket page
  const tickets = state?.tickets || [];

  const [quantities, setQuantities] = useState(() => {
    const init = {};
    tickets.forEach((t) => {
      init[t._id] = t.quantity || 1;
    });
    return init;
  });

  if (!tickets.length) {
    return (
      <div className="p-10 text-center text-red-500">
        No ticket data found. Please go back and select tickets again.
      </div>
    );
  }

  // ✅ update quantity per ticket
  const changeQty = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }));
  };

  // ✅ compute totals
  const enrichedTickets = tickets.map((t) => {
    const qty = quantities[t._id] || 1;
    const total = qty * Number(t.ticketPrice);

    return {
      ...t,
      quantity: qty,
      total,
    };
  });

  const grandTotal = enrichedTickets.reduce(
    (sum, t) => sum + t.total,
    0
  );

  const serviceFee = grandTotal * 0.05;
  const finalTotal = grandTotal + serviceFee;

  return (
    <div className="min-h-screen bg-[#F3F5FA] flex items-center justify-center px-4">
      <div className="w-full max-w-[840px] bg-[#F3F5FA] rounded-md p-8">

        {/* HEADER */}
        <div
          onClick={() => navigate("/exploreEvents")}
          className="flex gap-[10px] mb-[40px] cursor-pointer"
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
        <div className="mb-8">
          <h2 className="font-bold text-[18px] text-[#000]">
            Mixed Order Summary
          </h2>
          <p className="text-sm text-[#848182]">
            {tickets.length} ticket types selected
          </p>
        </div>

        {/* TICKETS LIST */}
        <div className="space-y-6">
          {enrichedTickets.map((ticket) => (
            <div
              key={ticket._id}
              className="border-b pb-4"
            >
              <div className="flex justify-between items-center">
                
                {/* LEFT */}
                <div>
                  <h3 className="font-semibold text-[16px]">
                    {ticket.ticketType}
                  </h3>
                  <p className="text-[#848182] text-sm">
                    ₦{Number(ticket.ticketPrice).toLocaleString()} per ticket
                  </p>
                </div>

                {/* QTY CONTROLS */}
                <div className="flex items-center border rounded">
                  <button
                    onClick={() => changeQty(ticket._id, -1)}
                    className="px-3 py-1"
                  >
                    -
                  </button>

                  <span className="px-4">
                    {ticket.quantity}
                  </span>

                  <button
                    onClick={() => changeQty(ticket._id, 1)}
                    className="px-3 py-1"
                  >
                    +
                  </button>
                </div>

                {/* TOTAL */}
                <div className="text-right">
                  <p className="text-sm text-[#848182]">
                    Total
                  </p>
                  <p className="font-bold text-[#123499]">
                    ₦{ticket.total.toLocaleString()}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* SUMMARY */}
        <div className="mt-8 space-y-3 border-t pt-6">

          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₦{grandTotal.toLocaleString()}</span>
          </div>

          <div className="flex justify-between">
            <span>Service Fee (5%)</span>
            <span className="text-orange-500">
              ₦{serviceFee.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between text-lg font-bold">
            <span>Total To Pay</span>
            <span className="text-[#123499]">
              ₦{finalTotal.toLocaleString()}
            </span>
          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={() =>
            navigate(`/checkoutpage/${eventID}`, {
              state: {
                ...state,
                tickets: enrichedTickets,
                grandTotal: finalTotal,
                       previousRoute: location.pathname,
              },
            })
          }
          className="w-full mt-8 bg-[#1E40AF] text-white py-4 rounded-md"
        >
          Continue to Checkout
        </button>

      </div>
    </div>
  );
}