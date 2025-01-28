import React from 'react';
import ellipsis from '../../../assets/ellipsis.svg';
import arrowGreenUp from '../../../assets/arrowGreenUp.svg';
import arrowRedDown from '../../../assets/arrowRedDown.svg';
import data from '../../../../data/db.json'; // Import the data

const Section1 = () => {
  const { totalRevenue, ticketsSold, engagementRate } = data; // Destructure the data

  return (
    <section>
      <div className="parentContainer  flex flex-col lg:flex-row flex-wrap gap-[24px] pl-[30px] pr-[20px] pt-[48px] pb-[48px] ">
        {/* Total Revenue */}
        {totalRevenue.map((revenue) => (
          <div
            key={revenue.id}
            className="totalRevenue w-full mx-auto md:w-[68%] lg:w-[30%] bg-white px-[24px] py-[24px] rounded-[10px]"
          >
            <div className="up flex justify-between  mb-[55px]">
              <div>
                <p className="text-[#757575] text-[16px] font-bold">Total Revenue</p>
                <p className="text-[#757575] text-[14px] font-light">From Last Month</p>
              </div>
              <div>
                <img src={ellipsis} alt="options" />
              </div>
            </div>
            <div className="down">
              <div className="flex justify-between">
                <div className="text-[#333333] text-[40px] font-normal">
                  <p>
                    ₦<span>{revenue.amount}</span>
                  </p>
                </div>
                <div className="flex bg-[#E4FEDD] py-[6px] px-[8px] mt-[18px] rounded-[10px] gap-[2px] w-[68px] h-[30px]">
                  <img src={arrowGreenUp} alt="up" className="w-[14px] h-[14px] pt-[5px]" />
                  <p className="text-[#4AAA2F] text-[14px] font-light">
                    +<span>{revenue.percentage}</span>%
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Tickets Sold */}
        {ticketsSold.map((ticket) => (
          <div
            key={ticket.id}
            className="ticketsSold w-full mx-auto md:w-[68%] lg:w-[30%] bg-white px-[24px] py-[24px] rounded-[10px]"
          >
            <div className="up flex justify-between mb-[55px]">
              <div>
                <p className="text-[#757575] text-[16px] font-bold">Tickets Sold</p>
                <p className="text-[#757575] text-[14px] font-light">From Last Month</p>
              </div>
              <div>
                <img src={ellipsis} alt="options" />
              </div>
            </div>
            <div className="down">
              <div className="flex justify-between">
                <div className="text-[#333333] text-[40px] font-normal">
                  <p>{ticket.quantity}</p>
                </div>
                <div className="flex bg-[#FFE4E4] py-[6px] px-[8px] mt-[18px] rounded-[10px] gap-[2px] w-[68px] h-[30px]">
                  <img src={arrowRedDown} alt="up" className="w-[14px] h-[14px] pt-[5px]" />
                  <p className="text-[#D71919] text-[14px] font-light">
                    +<span>{ticket.percentage}</span>%
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Engagement Rate */}
        {engagementRate.map((engagement) => (
          <div
            key={engagement.id}
            className="engagementRate w-full mx-auto md:w-[68%] rounded-[10px] lg:w-[30%] bg-white px-[24px] py-[24px]"
          >
            <div className="up flex justify-between mb-[55px]">
              <div>
                <p className="text-[#757575] text-[16px] font-bold">Engagement Rate</p>
                <p className="text-[#757575] text-[14px] font-light">From Last Month</p>
              </div>
              <div>
                <img src={ellipsis} alt="options" />
              </div>
            </div>
            <div className="down">
              <div className="flex justify-between">
                <div className="text-[#333333] text-[40px] font-normal">
                  <p>{engagement.Rate}%</p>
                </div>
                <div className="flex bg-[#E4FEDD] py-[6px] px-[8px] mt-[18px] rounded-[10px] gap-[2px] w-[68px] h-[30px]">
                  <img src={arrowGreenUp} alt="up" className="w-[14px] h-[14px] pt-[5px]" />
                  <p className="text-[#4AAA2F] text-[14px] font-light">
                    +<span>{engagement.percentage}</span>%
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section1;
