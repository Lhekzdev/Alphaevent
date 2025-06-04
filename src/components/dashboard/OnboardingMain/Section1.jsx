import React from 'react';

const Section1 = () => {
  return (
    <section className="flex flex-wrap gap-5 font-lato px-4 py-3">
      {/* Card 1 */}
      <button className="flex bg-white w-[240px] h-[114px] rounded-[12px] px-[16px] py-[20px] justify-between items-center shadow-sm">
  <div className="flex flex-col justify-center text-left gap-[4px] leading-none">
    <p className="text-[#ABABAB] text-[10px] font-medium">Total Revenue</p>
    <div className="mt-2">
    <p className="text-[24px] text-[#333333] font-semibold leading-none"><span>$</span>2,617,000</p>
    <p className="text-[#2A8212] text-[12px] font-medium leading-none mt-2">↑ 12.5<span>%</span> vs Last week</p>
    </div>
  </div>
  <div>
    <img
      src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747617145/Icon_10_hqhopm.png"
      alt="icon"
      className="w-[40px] h-[40px]"
    />
  </div>
</button>


      {/* Card 2 */}
      <button className="flex bg-white w-[240px] h-[114px] rounded-[12px] px-[16px] py-[20px] justify-between items-center shadow-sm">
      <div className="flex flex-col justify-center text-left gap-[4px] leading-none">
      <p className="text-[#ABABAB] text-[10px] font-medium">Tickets Sold</p>
          <div className="mt-2">
          <p className="text-[24px] text-[#333333] font-semibold leading-none">1455</p>
          <p className="text-[#2A8212] text-[12px] font-medium leading-none">↑ 8% vs Last week</p>
          </div>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747786883/dashboardsold_lir4nv.svg"
            alt="icon"
            className="w-[40px] h-[40px]"
          />
        </div>
      </button>

      {/* Card 3 */}
      <button className="flex bg-white w-[240px] h-[114px] rounded-[12px] px-[16px] py-[20px] justify-between items-center shadow-sm">
      <div className="flex flex-col justify-center text-left gap-[4px] leading-none">
        <p className="text-[#ABABAB] text-[10px] font-medium">Engagement Rate</p>
          <div className="mt-2">
          <p className="text-[24px] text-[#333333] font-semibold leading-none">40<span>%</span></p>
            <p className="text-[#2A8212] text-[12px] font-medium leading-none"> 0.5% vs Last week</p>
          </div>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747786949/dashboard_engage_uuclzt.svg"
            alt="icon"
            className="w-[40px] h-[40px]"
          />
        </div>
      </button>

      {/* Card 4 */}
      <button className="flex bg-white w-[240px] h-[114px] rounded-[12px] px-[16px] py-[20px] justify-between items-center shadow-sm">
      <div className="flex flex-col justify-center text-left gap-[4px] leading-none">
        <p className="text-[#ABABAB] text-[10px] font-medium">Satisfaction</p>
          <div className="mt-2">
        <div className='flex'>  
        <p className="text-[24px] flex text-[#333333] font-semibold leading-none">4.5<span>/</span><p>5</p></p></div>
        <p className="text-[#2A8212] text-[12px] font-medium leading-none">↑ 2.5% vs Last week</p>
          </div>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747787005/dashboard_satis_pkqkat.svg"
            alt="icon"
            className="w-[40px] h-[40px]"
          />
        </div>
      </button>
    </section>
  );
};

export default Section1;
