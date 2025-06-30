import React from "react";
import UpcomingEvent from "./UpcomingEvent"
import SalesChart from "./SalesChart"

const Section2a = () => {
  return (
    <>
      <section className="flex flex-wrap gap-5 font-lato px-4 py-3">
        <SalesChart />
        {/* Sales Performance */}
        {/* <div className=" bg-white w-[498px] h-[392px] rounded-[12px] px-[28px] py-[28px]  shadow-sm">
          <p className="text-[20px] text-[#000000]">Sales Performance</p>
          <div>
            <img
              src={
                "https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747834771/BarLineChart_xdotxg.png"
              }
              alt="Sales Chart"
            />
          </div>
        </div> */}
        <UpcomingEvent />
      </section>
    </>
  );
};

export default Section2a;
