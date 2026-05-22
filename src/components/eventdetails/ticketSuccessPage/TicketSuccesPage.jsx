// app/ticket-success/page.tsx
// or pages/ticket-success.tsx if using Pages Router
import youareinbox from "../../../assets/assets/youareinbox.svg";
import qrlockimg from "../../../assets/assets/qrlockimg.svg";

import {
  CalendarDays,
  Share2,
  Gift,
  Copy,
  X,
  Lock,
  ThumbsUp
} from "lucide-react";
import TicketCode from "../TicketCode";
import { useParams,useNavigate } from "react-router-dom";





export default function TicketSuccessPage() {


  const navigate = useNavigate();

  const { eventID } = useParams();

console.log(eventID);
  return (
    <div className="min-h-screen bg-[#f3f3f5] flex items-center justify-center px-4 py-10">
      <div className="relative w-full max-w-md">
        {/* Close Button */}
        <button onClick={() => navigate("/exploreEvents")} className="absolute right-0 top-0 text-[#233ea5] hover:opacity-80">
          <X size={24} />
        </button>

        {/* Success Icon */}
        <div className="flex flex-col items-center mt-6">
          <div className="h-14 w-14 rounded-full border border-green-500 flex items-center justify-center">
            <ThumbsUp
              size={20}
              className="rotate-45 text-green-600"
            />
          </div>

          <h1 className="mt-4 text-3xl font-bold text-green-600">
            You&apos;re In!
          </h1>

          <p className="mt-2 text-center text-xs text-gray-500 max-w-[230px] leading-relaxed">
            Transaction complete, your digital ticket is being
            delivered to your registered email.
          </p>
        </div>

        {/* Ticket Card */}
        <div className="mt-8 rounded-3xl bg-white max-w-[708px] h-auto opacity-100 shadow-sm overflow-hidden">
          {/* Event Info */}
          <div className="p-6 flex gap-4">
            <div className="flex w-[52px] h-[52px] rounded-[15px] p-[10px] bg-[#12349914] items-center gap-[10px] opacity-100 justify-center">
              <Gift className="text-[#233ea5]"  size={22} />
            </div>

            <div className="">
              <h2 className=" text-gray-900 font-lato text-[24px] leading-[32px] font-bold tracking-normal text-lg">
                Renewed Conference
              </h2>

              <p className=" text-[#848182] font-roboto text-[14px] leading-[20px] font-normal tracking-[0.5%] mt-1">
                Sat, 5 Apr 2025 • 8 PM
              </p>

              <p className=" text-[#848182] font-roboto text-[14px] leading-[20px] font-normal tracking-[0.5%] mt-1">
                City Conference Hall, Abuja
              </p>

<p className=" text-[#848182] font-roboto text-[14px] leading-[20px] font-normal tracking-[0.5%] mt-1">
                1x General Admission
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-dashed border-gray-200" />

          {/* Ticket Code */}
          <div className="p-5">
            <div className="flex items-center gap-4">
              {/* QR Placeholder */}
              <div className="h-14 w-14 rounded-lg bg-[#eef2ff] flex items-center justify-center">
               
                 <div className="w-[60x] h-[60px]"> <img className="  " src={youareinbox} alt="" srcset="" /></div>
                
                
              </div>

              <div className="flex-1 ">
                <p className="font-roboto text-[14px] text-[#848182] leading-[20px] font-light tracking-[0.5%]">
                  Ticket Code
                </p>

                <div className="flex items-center gap-2 ">
               <TicketCode/>
                </div>

                <p className="font-roboto text-[12px] leading-[20px] font-normal tracking-[0.5%] text-[#848182] mt-1">
                  City Conference Hall, Abuja
                </p>
              </div>

              
            </div>

            {/* Notice */}
            <div className="mt-5 rounded-xl border border-yellow-300 bg-yellow-50 px-4 py-3 flex gap-3">
              {/* <Lock
                size={16}
                className="text-yellow-500 mt-0.5"
              /> */}
              <img src={qrlockimg} alt="" srcset="" />

              <p className="font-roboto text-[12px] leading-[20px] font-normal tracking-[0.5%] text-[#FBB207] ">
                Show this QR code at the entrance. Doors open at
                7 PM, show starts 8 PM. Please arrive early,
                queues may be long.
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex  gap-2">
          <button className="flex-1 w-[394px] py-1 border border-[#3b4bb6] text-[#123499]  rounded-lg text-sm flex items-center justify-center font-roboto text-[18px] leading-[26px] font-semibold tracking-normal text-center gap-2 hover:bg-white">
            <CalendarDays size={16} />
            ADD TO CALENDAR
          </button>

          <button className="flex-1 border py-1 border-[#3b4bb6] text-[#233ea5] font-medium  rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-white">
            <Share2 size={16} />
            SHARE
          </button>
        </div>

        <button className="mt-3 w-full bg-[#008000] hover:bg-green-700 text-white font-semibold py-2 rounded-lg text-sm transition">
          DOWNLOAD TICKETS
        </button>

        {/* Footer */}
        <p className="font-roboto text-[14px] leading-[20px] font-medium tracking-[0.5%] text-center text-[#848182] mt-6">
          Didn&apos;t get the email?{" "}
          <button className="text-[#123499] font-medium hover:underline">
            Resend ticket
          </button>
        </p>
      </div>
    </div>
  );
}