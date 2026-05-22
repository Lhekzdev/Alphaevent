// app/payment-failed/page.jsx
// OR
// pages/payment-failed.jsx
import { useNavigate } from "react-router-dom";

import { X } from "lucide-react";


export default function PaymentFailedPage() {
   const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#d9d9dd] flex items-center justify-center px-4">
      <div className="bg-[#efeff1] w-full max-w-[420px] rounded-md py-16 px-8 text-center shadow-sm">
        
        {/* Failed Icon */}
        <div className="w-16 h-16 mx-auto rounded-full border border-[#FF0000] flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border border-[#FF00004D] flex items-center justify-center">
            <X size={14} className="text-[#FF0000]" />
          </div>
        </div>

        {/* Heading */}
        <h1 className=" font-lato text-[32px] leading-[40px] font-bold tracking-normal text-[#FF0000] mt-6">
          Payment Failed
        </h1>

        {/* Subtitle */}
        <p className="font-roboto text-[12px] leading-[20px] text-[#757575] font-normal tracking-[0.5%] text-center mt-2">
          No charges were made to your card. Here are the details
        </p>

        {/* Error Box */}
        <div className="border border-red-300 rounded-md px-5 py-4 mt-8 text-center">
          <p className="text-[#FF0000] font-Roboto text-[12px] leading-6">
            Card declined insufficient funds or your bank
            blocked this transaction. Try a different card, use
            bank transfer.
          </p>
        </div>

        {/* Help text */}
        <p className="font-roboto text-[10px] leading-[20px] font-light tracking-[0.5%] text-center text-[#757575] mt-5">
          Need help? Email support@example.com or WhatsApp +234 800 000 000
        </p>

        {/* Button */}
        <button  onClick={()=>navigate("/")}className="mt-6 bg-[#123499] hover:bg-blue-900 transition text-white font-roboto text-[18px] leading-[26px] font-semibold tracking-normal text-center px-10 py-3  w-[234px] h-[48px] rounded-[10px] pt-[11px] pr-[50px] pb-[11px] pl-[50px] gap-[10px] opacity-100">
          BACK TO EVENT
        </button>
      </div>
    </div>
  );
}