
import React, { useState, } from "react";
import { useNavigate, useParams} from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import alventlogo from "../../../assets/alventlogo.svg"

export default function OrderSummartVIPAdmission() {
 const [quantity, setQuantity] = useState(1);

  const ticketPrice = 35000;
  const serviceFee = 1750;

  const total = quantity * (ticketPrice + serviceFee);
const navigate = useNavigate();
  const { eventID } = useParams();

    return(
 <div className="min-h-screen rounded-[12px] bg-[#F3F5FA] flex items-center justify-center px-4">
      <div className="w-full max-w-[840px] h-auto bg-[#F3F5FA] rounded-md shadow-sm p-8">
        
        {/* Header */}
        <button onClick={()=>navigate("/exploreEvents")} className="flex  gap-[10px] mb-[60px]">
          <button className="text-[#1E40AF]">
            <ChevronLeft className="w-[40px] [40px]" size={20} />
          </button>

         
           
          <img className="w-[189px] h-[32px] " src={alventlogo} alt="" srcset="" />
        
        </button>

        {/* Title */}
        <div className="flex flex-col pb-4 gap-y-[24px]">
          <h2 className="font-bold text-lg text-[18px] text-[#000000] leading-8">
            Order Summary
          </h2>

          <p className="text-sm font-Roboto font-normal text-[#848182] ">
            Renewed Conference · Sat 5 Apr
          </p>
        </div>


<div >
        {/* Table */}
        <div className="space-y-5">
          
          {/* Event */}
          <div className="flex justify-between border-b pb-4 text-sm">
            <span className="font-roboto text-[18px] font-[400] leading-[28px] text-center text-[#000000]">Event</span>
            <span className="text-[#848182]">Renewed Conference</span>
          </div>

          {/* Quantity */}
          <div className="flex justify-between items-center border-b pb-4 text-sm">
            <span className="font-roboto text-[18px] font-[400] leading-[28px] text-center text-[#000000]">Quantity</span>

            <div className="flex items-center border rounded overflow-hidden">
              <button
                onClick={() =>
                  setQuantity((prev) => Math.max(1, prev - 1))
                }
                className="px-3 py-1 bg-gray-50 text-[#123499] hover:bg-gray-100"
              >
                -
              </button>

              <span className="px-4">{quantity}</span>

              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="px-3 py-1 bg-gray-50 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Ticket Type */}
          <div className="flex justify-between border-b pb-4 text-sm">
            <span className="font-roboto text-[18px] font-[400] leading-[28px] text-center text-[#000000]">Ticket Type</span>
            <span className="text-[#848182]">VIP Admission</span>
          </div>

          {/* Ticket Price */}
          <div className="flex justify-between border-b pb-4 text-sm">
            <span className="font-roboto text-[18px] font-[400] leading-[28px] text-center text-[#000000]">Ticket Price</span>
            <span className="text-[#848182]">
              ₦{ticketPrice.toLocaleString()}
            </span>
          </div>

          {/* Service Fee */}
          <div className="flex justify-between border-b pb-4 text-sm">
            <span className="font-roboto text-[18px] font-[400] leading-[28px] text-center text-[#000000]">Service Fee (5%)</span>

            <span className="text-orange-500 font-medium">
              ₦{serviceFee.toLocaleString()}
            </span>
          </div>

          {/* Total */}
          <div className="flex justify-between items-center pt-2">
            <span className="font-bold text-[#000000] font- uppercase text-[18px] leading-7">
              Total To Pay
            </span>

            <span className="text-2xl font-bold font- text-[#123499]">
              ₦{total.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Button */}
        <button onClick={()=>navigate(`/checkoutpage/${eventID}`)} className="w-full mt-10 bg-[#1E40AF] hover:bg-[#18389b] text-white py-4 rounded-md flex items-center justify-center gap-2 font-medium transition">
          Continue
          <ChevronRight size={18} />
        </button>
      </div>
      </div>
</div>
    )
}

