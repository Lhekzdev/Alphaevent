import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useEventForm } from "../../context/context";
import {
  Check,
  ChevronLeft,
  CreditCard,
  Gift,
  Lock,
} from "lucide-react";
import qrlockimg from "../../../assets/assets/qrlockimg.svg"

export default function ConfirmAndPay() {

  const { state } = useLocation();

  
  const tickets = state?.tickets || [];
  const venue = state?.venue || "";
const eventDate = state?.eventDate || "";
const email = state?.email; 
const total =
    state?.total ||
    state?.grandTotal ||
    0;

const payload = {
  tickets,
  email,
  totalPurchase: total,
};




const handlePay = async () => {
  try {
    const res = await fetch(
      `https://alphaeventappdevmode.onrender.com/buyTicket-initiate/${eventID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await res.json();

    console.log("Paystack response:", data);

    if (res.ok) {
      // save reference for later verification
      localStorage.setItem("paymentReference", data.reference);

      // redirect to Paystack checkout
      window.location.href = data.authorization_url;
    } else {
      console.error("Payment init failed:", data);
    }
  } catch (error) {
    console.error("Payment error:", error);
  }
};

  const { eventID } = useParams();
  const navigate = useNavigate();



 
const ticket = state?.ticket;


const userEmail = state?.email || "";
const userName = state?.fullName || "";


  console.log("ConfirmAndPay State:", state);



  const quantity =
    state?.quantity ||
    ticket?.quantity ||
    1;

 
  const eventTitle =
    state?.eventTitle ||
    "Event";

  const ticketType =
    state?.ticketType ||
    ticket?.ticketType ||
    "General Admission";





 const serviceFee = Number(state?.serviceFee || 0);
 const currentTicket = ticket || tickets?.[0] || {};
const ticketPrice = Number(currentTicket.ticketPrice || 0);

  return (
    <div className="min-h-screen bg-[#f5f5f7] py-10 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Progress Steps */}
        {/* Top Navigation */}
        <div className="items-center h-[72px] flex justify-between mb-16">


          {/* Steps */}
          <div className="flex w-full items-center justify-center gap-28 lg:gap-8">

            {/* Step 1 */}
            <div className=" flex items-center flex-col gap-y-[2px] ">
              <div className="w-8 h-8 rounded-full bg-[#DFF4E4] flex items-center justify-center">
                <Check size={16} className="text-green-600" />


              </div>



              <div className="text-center items-center">
                <p className="text-[18px] font-medium text-green-700 ">
                  Tickets
                </p></div>


            </div>


            <div className="lg:flex w-[176px] hidden rounded-[10px] h-[4px]  bg-green-600" />

            {/* Step 2 */}
            <div className="items-center flex flex-col gap-y-[2px] ">
              <div className="w-8 h-8 rounded-full bg-[#DFF4E4] flex items-center justify-center">
                2


              </div>



              <div className="text-center items-center">
                <p className="font-roboto text-[18px] leading-[26px] font-semibold tracking-normal text-[#008000]">
                  Details
                </p></div>


            </div>
            <div className="w-[176px] hidden lg:flex rounded-[10px] h-[4px]  bg-[#333333]" />




            {/* Step 3 */}

            <div className=" flex flex-col items-center gap-y-[2px] ">
              <div className="w-8 h-8 rounded-full bg-[#DFF4E4] flex items-center justify-center">
                3


              </div>



              <div className="text-center items-center">
                <p className="font-roboto text-[18px] leading-[26px] font-semibold tracking-normal text-[#333333] ">
                  Payment
                </p></div>


            </div>






          </div>

        </div>




        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-sm p-8">

          {/* Header */}
          <div className="flex h-[60px] items-center gap-4 mb-6">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 rounded-full border border-[#C8D2F0] flex items-center justify-center text-[#1D3FBF]"
            >
              <ChevronLeft size={18} />
            </button>

            <div>
              <h1 className="font-lato text-[24px] leading-[32px] font-bold tracking-normal">
                Confirm & Pay
              </h1>

              <p className="text-sm text-gray-400 mt-1">
                Review your order before payment
              </p>
            </div>
          </div>

          {/* Secure Checkout Notice */}
          <div className="flex items-center gap-3 bg-[#FFF8E8] border border-[#F4C76B] rounded-lg px-4 py-3 mb-5">
            <div><img src={qrlockimg} alt="" srcset="" /></div>

            <p className="font-roboto  ">
              <span className="font-semibold text-[#FBB207]">
                Secure Checkout.
              </span>{" "}
              <span className="text-[16px] leading-[24px] font-normal text-[#757575] tracking-normal "> Complete payment on Paystack and return here
                automatically.</span>
            </p>
          </div>

          {/* Edit */}
          <button className="font-roboto text-[18px] leading-[28px] font-normal tracking-normal text-center text-[#848182] mb-4">
            Edit order details
          </button>

          {/* Event Info */}
          <div className="flex items-center gap-4 pb-8 border-b">

            <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] flex items-center justify-center">
              <Gift size={22} className="text-[#1D3FBF]" />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {eventTitle}
              </h2>

              <p className="text-sm text-gray-400 mt-1">
                {venue} {venue && eventDate ? "·" : ""} {eventDate}
              </p>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-3 py-8">

            <div className="flex justify-between text-sm">
              <span className="font-roboto text-[18px] leading-[28px] font-normal tracking-normal text-center text-[#848182]">Ticket Type</span>

              <span className="font-medium text-gray-900">
                {ticketType}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="font-roboto text-[18px] leading-[28px] font-normal tracking-normal text-center text-[#848182]">Quantity</span>

              <span className="font-medium text-gray-900">
                {quantity} Ticket{quantity > 1 ? "s" : ""}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="font-roboto text-[18px] leading-[28px] font-normal tracking-normal text-center text-[#848182]">email</span>

              <span className="font-medium text-gray-900">
                {userEmail}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="font-roboto text-[18px] leading-[28px] font-normal tracking-normal text-center text-[#848182]">Name</span>

              <span className="font-medium text-gray-900">
                {userName}
              </span>
            </div>
          </div>

          {/* Pricing */}
          <div className="border-t pt-6 pl-5 space-y-4">

            <div className="flex justify-between text-sm">
              <span className="font-roboto text-[14px] leading-[20px] font-medium tracking-[0.5%] text-center text-[#848182]">
                Ticket Price
              </span>

              <span className="text-[#848182] font-roboto text-[14px] leading-[20px] font-medium tracking-[0.5%]">
              ₦{ticketPrice.toLocaleString()} 
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="font-roboto text-[14px] leading-[20px] font-medium tracking-[0.5%] text-center text-[#848182]">
                Service Fee (5%)
              </span>

              <span className="text-[#848182] font-roboto text-[14px] leading-[20px] font-medium tracking-[0.5%]">
                ₦{serviceFee.toLocaleString()} 
              </span>
            </div>

            <div className="flex justify-between items-center pt-4 border-t">
              <span className="uppercase font-roboto text-[18px] leading-[26px] font-semibold tracking-normal text-center">
                Total Charged
              </span>

              <span className="font-['Copperplate_Gothic_Bold'] text-[24px] leading-[26px] font-normal tracking-normal text-[#123499]">
                ₦{total.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Pay Button */}
          <button   onClick={handlePay} className="w-full mt-8 bg-[#123499] hover:bg-[#1736a6] text-white py-3 rounded-lg flex items-center justify-center gap-2 font-medium transition">
            Pay with Paystack
            <CreditCard size={18} />
          </button>

          {/* Footer Text */}
          <div className="text-center mt-6">
            <p className="font-roboto text-[14px] leading-[20px] font-medium tracking-[0.5%] text-center text-[#848182]">
              After payment, your QR-coded ticket is sent
              instantly to your email.
            </p>

            <p className="text-xs text-gray-400 mt-1 ">
              <span className="text-[#848182] font-roboto text-[14px] leading-[20px] font-medium tracking-[0.5%] text-center">Questions?{" "}</span>
              <button onClick={() => navigate("/support")} className="text-[#123499] font-roboto text-[14px] leading-[20px] font-medium tracking-[0.5%] text-center">
                support@alvent.ng
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}