import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("your-publishable-key-here");
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import {Share2} from "lucide-react"
const img1 ="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1731611793/Ellipse23_mlj9er.png"



const EventTicket = ({eventDetails}) => {
  // const { eventID } = useParams(); // Extract eventID from the URL
   // const [event, setEvent] = useState(null);
  
const [quantities, setQuantities] = useState({});

  const [ticketMessage, setTicketMessage] = useState("");

  const [selectedTickets, setSelectedTickets] = useState({});

function toggleTicket(ticketId) {
  setSelectedTickets((prev) => ({
    ...prev,
    [ticketId]: !prev[ticketId],
  }));
}


const handleShareEvent = async () => {
    const shareUrl = `${window.location.origin}/eventsdetailshome/${eventDetails.eventID}`;


  const shareData = {
    title: eventDetails?.eventTitle,
    text: `Check out this event: ${eventDetails?.eventTitle}`,
    url: shareUrl,
  };


  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(shareData.url);
      alert("Event link copied to clipboard!");
    }
  } catch (error) {
    console.error("Share failed:", error);
  }
};


// remove selected ticket,reset quantities,hide totals section automatically

const handleCloseTicketSelection = () => {
  setSelectedTicket(null);

};


const navigate = useNavigate();

console.log("fromticket:", eventDetails)




 function changeQuantity(ticketId, delta) {
  setQuantities((prev) => ({
    ...prev,
    [ticketId]: Math.max(
      1,
      (prev[ticketId] || 1) + delta
    ),
  }));
}


const {   eventID } = eventDetails;

const ticketRoutes = {
  regular: "orderSummartGeneralAdmission",
  general: "orderSummartGeneralAdmission",
  vip: "orderSummartVIPAdmission",
};

const grandTotal =
  eventDetails.tickets?.reduce((sum, ticket) => {
    if (!selectedTickets[ticket._id]) return sum;

    return (
      sum +
      (quantities[ticket._id] || 1) *
      Number(ticket.ticketPrice)
    );
  }, 0) || 0;

const hasSelectedTickets =
  Object.values(selectedTickets).some(Boolean);


      // NAVIGATE AFTER SUCCESS
function purchaseTickets() {
  const selected = eventDetails.tickets.filter(
    (ticket) => selectedTickets[ticket._id]
  );

  if (selected.length === 0) {
    setTicketMessage("Please select at least one ticket");
    return;
  }

  const tickets = selected.map((ticket) => {
    const qty = quantities[ticket._id] || 1;

    return {
      _id: ticket._id,
      ticketType: ticket.ticketType,
      ticketPrice: Number(ticket.ticketPrice),
      quantity: qty,
      total: qty * Number(ticket.ticketPrice),
    };
  });

  const hasVIP = selected.some(
    (t) => t.ticketType.toLowerCase() === "vip"
  );

  const hasRegular = selected.some(
    (t) => t.ticketType.toLowerCase() === "regular"
  );

  let route = "";

if (hasVIP && hasRegular) {
  route = "orderSummaryMixedAdmission";
} else if (hasVIP) {
  
  route = "orderSummartVIPAdmission";
} else {
  route = "orderSummartGeneralAdmission";
}

// console.log("Route:", route);
// console.log("Tickets:", tickets);

navigate(`/${route}/${eventDetails.eventID}`, {
  state: {
    tickets,
    grandTotal,
    eventTitle: eventDetails.eventTitle,
    type: hasVIP && hasRegular
      ? "mixed"
      : hasVIP
      ? "vip"
      : "regular",
  },
});
}



  return (



<div className="    w-full max-w-[610px]">
  <div className="place-items-end pt-2">
      <button  onClick={handleShareEvent} className="h-[48px] px-[24px] rounded-full border border-[#1E40AF] flex items-center gap-[10px] text-[16px] text-[#123499]">
    
    <span>Share Event</span>

    <Share2 size={18} />
  </button>
  </div>

<div className="shadow-lg p-[40px] rounded-[24px]">
 <div className="flex  items-center gap-[12px] mb-[24px]">
  {/* SHOW ARROW ONLY WHEN TICKET IS SELECTED */}


{hasSelectedTickets && (
  <button
    onClick={() => setSelectedTickets({})}
    className="text-[#1E40AF] text-[24px]"
  >
    ←
  </button>
)}




  <h2 className="text-[14px] text-[#666] uppercase">
    Select Tickets
  </h2>
</div>



  
{eventDetails.tickets?.map((ticket) => (
  <div
    key={ticket._id}
onClick={() => toggleTicket(ticket._id)}
    className={`rounded-[16px] px-[20px] py-[12px] cursor-pointer border mt-[16px]
      ${
selectedTickets[ticket._id]
          ? "border-[#1E40AF] border-2"
          : "border-[#93C5FD]"
      }`}
  >
    {/* Ticket Header */}
    <div className="flex justify-between items-start">
      <div>
        <div className="flex items-center gap-[10px]">
          <h2 className="font-semibold text-[18px] leading-[26px] text-[#333333]">
            {ticket.ticketType}
          </h2>

          {ticket.ticketType?.toLowerCase() === "vip" && (
            <span className="border bg-[#FBB20733] text-[#333333] border-[#FBB20733] px-[10px] rounded-full text-[12px]">
              VIP
            </span>
          )}
        </div>

        <p className="font-medium text-[14px] leading-[20px] text-[#757575] mt-[10px]">
          Available: {ticket.quantity}
        </p>
      </div>

      <div className="text-right">
        <h2
          className={`font-bold text-[20px] ${
            ticket.ticketType?.toLowerCase() === "vip"
              ? "text-[#F59E0B]"
              : "text-[#1E40AF]"
          }`}
        >
          ₦{Number(ticket.ticketPrice).toLocaleString()}
        </h2>

        <p className="text-[10px] text-[#123499]">
          /ticket
        </p>
      </div>
    </div>

    {/* Expanded Section */}
    {selectedTickets[ticket._id] && (
      <div className="mt-[24px] border-t pt-[20px]">

        <div className="flex justify-between items-center">

          {/* Quantity */}
          <div>
            <div className="w-[126px] h-[48px] border border-[#1E40AF] rounded-[12px] flex items-center justify-between px-[20px]">

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  changeQuantity(ticket._id, -1);
                }}
              >
                -
              </button>

              <span className="font-bold">
                {quantities[ticket._id] || 1}
              </span>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  changeQuantity(ticket._id, 1);
                }}
              >
                +
              </button>

            </div>

            <p className="text-[12px] text-[#666] mt-[10px]">
              Service fee (5%)
            </p>
          </div>

          {/* Total */}
          <div className="text-right">
            <p className="text-[12px] text-[#666] uppercase">
              Total
            </p>

            <h2 className="text-[24px] font-bold text-[#1E40AF]">
              ₦
              {(
                (quantities[ticket._id] || 1) *
                Number(ticket.ticketPrice)
              ).toLocaleString()}
            </h2>

            <p className="text-[12px] text-[#666]">
              Includes e-ticket + QR code
            </p>
          </div>

        </div>

      </div>
    )}
  </div>
))}




    <div className="mt-6 border-t pt-4">
  <h3 className="font-bold text-lg">
    Total: ₦{grandTotal.toLocaleString()}
  </h3>
</div>

<button
  onClick={purchaseTickets}
  className="w-full h-[44px] bg-[#848182] rounded-[14px] font-normal text-[16px] text-center text-white mt-6"
>
  Get Ticket
</button>
{ticketMessage && (
  <p className="text-red-500 text-sm mt-2">
    {ticketMessage}
  </p>
)}

  </div>


</div>


  );
};



export default EventTicket