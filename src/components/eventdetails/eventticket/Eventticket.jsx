import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("your-publishable-key-here");
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import {Share2} from "lucide-react"
const img1 ="https://res.cloudinary.com/dzyvwxh7n/image/upload/v1731611793/Ellipse23_mlj9er.png"

const EventTicket = ({eventDetails}) => {
  // const { eventID } = useParams(); // Extract eventID from the URL
  const [regularQuantity, setRegularQuantity] = useState(0);
  // const [event, setEvent] = useState(null);
  const [vipQuantity, setVipQuantity] = useState(0);
  const [ticketMessage, setTicketMessage] = useState("");

  const [selectedTicket, setSelectedTicket] = useState(null);





// remove selected ticket,reset quantities,hide totals section automatically


const handleCloseTicketSelection = () => {
  setSelectedTicket(null);
  setRegularQuantity(0);
  setVipQuantity(0);
};

const navigate = useNavigate();

console.log("fromticket:", eventDetails)


  // useEffect(() => {
  //   // Fetch event details using the eventId
  //   const fetchEventDetails = async () => {
  //     try {
        
  //       // const response = await fetch(`https://alphaeventappdevmode.onrender.com/api/eventDetails/${eventID}`);
  // 
  //       console.log("details:",response)
  //       if (response.ok) {
  //         const data = await response.json();
  //         console.log('Fetched event details:', data)
  //         setEvent(data);
  //       } else {
  //         console.error('Failed to fetch event details:', response.statusText);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching event details:', error);
  //     }
  //   };    
  //   if (eventID) {
  //     fetchEventDetails();
  //   }
  // }, [eventID]);


  function changeQuantity(type, delta) {
    if (type === 'general') {
      setRegularQuantity((prev) => Math.max(0, prev + delta));
    } else if (type === 'vip') {
      setVipQuantity((prev) => Math.max(0, prev + delta));
    }
  }
const { eventID } = eventDetails;


// FIND SELECTED TICKET

// async function purchaseTickets() {
//   try {

//     const stripe = await stripePromise;

//     // FIND SELECTED TICKET
//    const ticketTypeToMatch =
//   selectedTicket === "general"
//     ? "regular"
//     : "vip";

// const selectedTicketData =
//   eventDetails.tickets.find(
//     (ticket) =>
//       ticket.ticketType.toLowerCase() ===
//       ticketTypeToMatch.toLowerCase()
//   );


//     if (!selectedTicketData) {
//       setTicketMessage("Ticket type not found");
//       return;
//     }

//     // QUANTITY
//     const quantity =
//       selectedTicket === "general"
//         ? regularQuantity
//         : vipQuantity;

//     // TOTAL COST
//     const totalCost =
//       quantity * selectedTicketData.ticketPrice;

//     // STOP EMPTY PURCHASE
//     if (quantity <= 0) {
//       setTicketMessage("Please select ticket quantity");
//       return;
//     }

//     // CREATE STRIPE PAYMENT
//     if (totalCost > 0) {

//       const response = await fetch(
//         `https://alphaeventappdevmode.onrender.com/create-payment-intent`,
//         {
//           method: "POST",

//           headers: {
//             "Content-Type": "application/json",
//           },

//           body: JSON.stringify({
//             eventID,
//             ticketType: selectedTicket,
//             quantity,
//             totalCost,
//           }),
//         }
//       );

//       const { clientSecret } =
//         await response.json();

//       // STRIPE PAYMENT
//       const result =
//         await stripe.confirmCardPayment(
//           clientSecret,
//           {
//             payment_method: {
//               card: elements.getElement(CardElement),
//             },
//           }
//         );

//       if (result.error) {
//         setTicketMessage(
//           "Payment failed. Please try again."
//         );
//         return;
//       }

//       // SUCCESS
//       completeTicketPurchase();

//     } else {

//       completeTicketPurchase();

//     }

//   } catch (error) {

//     console.error(
//       "Error purchasing tickets:",
//       error
//     );

//     setTicketMessage(
//       "There was an error processing your request."
//     );
//   }
// }

// async function completeTicketPurchase() {

//   try {

//     const quantity =
//       selectedTicket === "general"
//         ? regularQuantity
//         : vipQuantity;

//     const response = await fetch(
//       `https://alphaeventappdevmode.onrender.com/tickzCrt/${eventID}`,
//       {
//         method: "POST",

//         headers: {
//           "Content-Type": "application/json",
//         },

//         body: JSON.stringify({
//           ticketType: selectedTicket,
//           quantity,
//         }),
//       }
//     );

//     const result = await response.json();

//     if (response.ok) {

//       setTicketMessage(
//         `Tickets purchased successfully! Ticket ID: ${result.newTicket.ticketID}`
//       );




      // NAVIGATE AFTER SUCCESS


      function purchaseTickets() {

  // STOP IF NO TICKET SELECTED
  if (!selectedTicket) {
    setTicketMessage("Please select a ticket type");
    return;
  }

  // STOP IF QUANTITY IS 0
  const quantity =
    selectedTicket === "general"
      ? regularQuantity
      : vipQuantity;

  if (quantity <= 0) {
    setTicketMessage("Please select ticket quantity");
    return;
  }

  // NAVIGATE BASED ON TICKET TYPE
  if (selectedTicket === "general") {
    navigate(`/orderSummartGeneralAdmission/${eventID}`);
  }

  if (selectedTicket === "vip") {
    navigate(`/orderSummartVIPAdmission/${eventID}`);
  }
}

//       if (selectedTicket === "general") {
//         navigate(`/orderSummartGeneralAdmission/${eventID}`);
//       }

//       if (selectedTicket === "vip") {
//         navigate(`/orderSummartVIPAdmission/${eventID}`);
//       }

//     } else {

//       setTicketMessage(
//         result.msg || "Error purchasing tickets."
//       );
//     }

//   } catch (error) {

//     console.log(error);

//     setTicketMessage(
//       "Error completing purchase"
//     );
//   }
// }









  return (



<div className="    w-full max-w-[610px]">
  <div className="place-items-end pt-2">
      <button className="h-[48px] px-[24px] rounded-full border border-[#1E40AF] flex items-center gap-[10px] text-[16px] text-[#123499]">
    
    <span>Share Event</span>

    <Share2 size={18} />
  </button>
  </div>

<div className="shadow-lg p-[40px] rounded-[24px]">
 <div className="flex  items-center gap-[12px] mb-[24px]">
  {/* SHOW ARROW ONLY WHEN TICKET IS SELECTED */}
  {selectedTicket && (
    <button
      onClick={handleCloseTicketSelection}
      className="text-[#1E40AF] text-[24px]"
    >
      ←
    </button>
  )}

  <h2 className="text-[14px] text-[#666] uppercase">
    Select Tickets
  </h2>
</div>



  {/* GENERAL */}


  
  <div
    onClick={() => setSelectedTicket("general")}
    className={`rounded-[16px] px-[20px] py-[12px] cursor-pointer border  transition-all duration-300
    ${
      selectedTicket === "general"
        ? "border-[#1E40AF] border-2"
        : "border-[#93C5FD]"
    }`}
  >
    <div className="flex  justify-between items-start">
      <div>
        <h2 className="font-['Roboto'] font-semibold text-[18px] leading-[26px] tracking-[0%] text-[#333333]">
          General Admission
        </h2>

        <p className="font-['Roboto'] font-medium text-[14px] leading-[20px] tracking-[0.5%] text-[#757575] mt-[10px]">
          Entry to all stages · Welcome drink · General standing area
        </p>
      </div>

      <div className="text-right">
        <h2 className="text-[#1E40AF] font-bold text-[20px]">
          ₦15,000
        </h2>

        <p className="text-[10px] text-[#123499]">
          /ticket
        </p>
      </div>
    </div>
  </div>

  {/* VIP */}
  <div
    onClick={() => setSelectedTicket("vip")}
    className={`rounded-[16px] px-[20px] py-[12px]  cursor-pointer border mt-[16px] transition-all duration-300
    ${
      selectedTicket === "vip"
        ? "border-[#1E40AF] border-2"
        : "border-[#93C5FD]"
    }`}
  >
    <div className="flex justify-between items-start">
      <div>
        <div className="flex items-center gap-[10px]">
  <h2 className="font-['Roboto'] font-semibold text-[18px] leading-[26px] tracking-[0%] text-[#333333]">
            VIP
          </h2>

          <span className="border bg-[#FBB20733] text-[#333333] border-[#FBB20733] px-[10px] rounded-full text-[12px]">
            VIP
          </span>
        </div>

      <p className="font-['Roboto'] font-medium text-[14px] leading-[20px] tracking-[0.5%] text-[#757575] mt-[10px]">
          Priority entry · VIP lounge · Open bar · Meet & Greet access
        </p>
      </div>

      <div className="text-right">
        <h2 className="text-[#F59E0B] font-bold text-[20px]">
          ₦35,000
        </h2>

        <p className="text-[10px] font-Roboto text-[#FBB207]">
          /ticket
        </p>
      </div>
    </div>
  </div>

  {/* SHOW ONLY AFTER SELECT */}
  {selectedTicket && (
    <div className="mt-[32px]">

      <div className="flex justify-between items-center">

        {/* QUANTITY */}
        <div>
          <div className="w-[126px] h-[48px] border border-[#1E40AF] rounded-[12px] flex items-center justify-between px-[20px]">

            <button
              onClick={() =>
                changeQuantity(
                  selectedTicket,
                  -1
                )
              }
            >
              -
            </button>

            <span className="font-bold">
              {selectedTicket === "general"
                ? regularQuantity
                : vipQuantity}
            </span>

            <button
              onClick={() =>
                changeQuantity(
                  selectedTicket,
                  1
                )
              }
            >
              +
            </button>
          </div>

          <p className="text-[12px] text-[#666] mt-[10px]">
            Service fee (5%)
          </p>
        </div>

        {/* TOTAL */}
        <div className="text-right">
          <p className="text-[12px] text-[#666] uppercase">
            Total
          </p>

          <h2 className="text-[24px] font-bold text-[#1E40AF]">
            ₦
            {selectedTicket === "general"
              ? regularQuantity * 15000
              : vipQuantity * 35000}
          </h2>

          <p className="text-[12px] text-[#666]">
            Includes e-ticket + QR code
          </p>
        </div>
      </div>

      {/* BUTTON */}

      
      <button
        onClick={purchaseTickets}
        className="w-full h-[44px] bg-[#848182] rounded-[14px] font-['Roboto'] font-normal text-[16px] leading-[100%] tracking-[0%] text-center text-[#FFFFFF]"
      >
         Get Ticket
      </button>




      
    </div>



  )}
  </div>
</div>






















  );
};



export default EventTicket