import React, { useState } from "react";
import EventWeek from "./EventWeek";
import EventPrecious from "./EventPrecious";

const Section1 = () => {
  const [activeTab, setActiveTab] = useState("thisWeek");

  return (
    <section className="flex flex-wrap gap-5 font-lato px-4 py-3 mb-[20px] ">
      <div className="bg-white w-[498px] h-[392px] rounded-[12px] px-[28px] py-[28px] shadow-sm">
        {/* up container */}
        <div className="flex gap-[112px] mb-[34px] border-b-[1px] border-b-[#ABABAB]">
          <p className="text-[20px] text-[#000000] mb-[8px]">Ticket Sold</p>
          <div className="flex gap-[8px]">
            {/* <button
              className={`w-[98px] h-[32px] rounded-[10px] px-[9px] py-[5px] text-[14px] ${
                activeTab === "thisWeek"
                  ? "bg-[#2D6CCF] text-white"
                  : "bg-white text-[#2D6CCF] border border-[#2D6CCF]"
              }`}
              onClick={() => setActiveTab("thisWeek")}
            >
              This Week
            </button> */}
            {/* <button
              className={`w-[125px] h-[32px] rounded-[10px] px-[9px] py-[5px] text-[14px] ${
                activeTab === "previousWeek"
                  ? "bg-[#2D6CCF] text-white"
                  : "bg-white text-[#2D6CCF] border border-[#2D6CCF]"
              }`}
              onClick={() => setActiveTab("previousWeek")}
            >
              Previous Week
            </button> */}
          </div>
        </div>

        {/* Conditional rendering */}
        {activeTab === "thisWeek" ? <EventWeek /> : <EventPrecious />}
      </div>
    </section>
  );
};

export default Section1;
