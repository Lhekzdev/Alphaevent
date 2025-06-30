import React from 'react';
import { useNavigate } from "react-router-dom";
import MyEventDetails from './MyEventDetails';

const MyEventFullDetail = ({onBack }) => {
  const ticketSold = 75;
  const ticketMaximum = 250;
  const percentage = (ticketSold / ticketMaximum) * 100; 
  const navigate = useNavigate();

     return (
        <>
          <section className="p-4 w-full h-[48px] mt-1 mb-1">
          <button onClick={onBack} className="text-blue-500 mb-4">
        ← Back to events
      </button>
              {/* Card One */}
              <div className="cardOne bg-[#FFFFFF] w-[1020px] h-[px] rounded-[13px]  px-[20px] py-[24px]">
                {/* First Box */}
                <div className="hero">
                  <img src={"https://res.cloudinary.com/dqtyrjpeh/image/upload/v1749561772/Image_13_ril8on.png"} alt="" />
                </div>
              {/* Second Box */}
                <div className='w-[1008px] flex gap-[775px] items-center py-[18px]'>
                  <p className='text-[24px] font-extrabold text-[#333333]'>Fashion Fest</p>
                  <div className='flex gap-[20px]'>
                    <img src={"https://res.cloudinary.com/dqtyrjpeh/image/upload/v1749561768/lucide_edit_aivdmp.png"} alt="" />
                    <img src={"https://res.cloudinary.com/dqtyrjpeh/image/upload/v1749561768/weui_delete-outlined_rrda4p.png"} alt="" />
                  </div>
                </div>
                  {/* Third Box */}
                  <div className="text-[#333333] text-[14px] font-normal">
                    <div className='flex gap-[10px] items-center mb-[12px]'>
                      <img src={"https://res.cloudinary.com/dqtyrjpeh/image/upload/v1749561769/Calendar_aclkly.png"} className='w-[12px] h-[12px]' alt="" />
                      <p>
                      <span>April 12, 2025</span> - <span>April 14, 2025</span>
                    </p>
                    </div>
                    <div className='flex gap-[10px] items-center mb-[12px]'>
                      <img src={"https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_time_rm5459.svg"} className='w-[12px] h-[12px]' alt="" />
                      <p className="">
                      <span>9:00 AM WAT</span> - <span>12:00 PM WAT</span>
                    </p>
                    </div>
                    <div className='flex gap-[10px] items-center mb-[12px]'>
                      <img src={"https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747836657/dashboard_location_ayfnzy.svg"} className='w-[12px] h-[12px]' alt="" />
                      <p className="">
                      City Conference Hall, Abuja
                    </p>
                    </div>


                    <div className='flex gap-[10px] items-center mb-[5px]'>
                      <img src={"https://res.cloudinary.com/dqtyrjpeh/image/upload/v1749561768/Vector_49_dtmdd8.png"} className='w-[12px] h-[12px]' alt="" />
                      <div className="flex  text-[#333333]">
                      <p className="ticketSold font-semibold ">{ticketSold}</p>
                      <span>/</span>
                      <p className="ticketMaximum ">{ticketMaximum}</p>
                      <p className="ticketMaximum ml-[2px]">Registered</p>
                    </div>
                  </div>

                   
                    <div className="w-[100px] h-[8px] bg-gray-300 rounded-full overflow-hidden ml-[20px]">
                      <div
                        className="h-full transition-all duration-300 rounded-full"
                        style={{
                          width: `${percentage}%`,
                          background: "linear-gradient(to right, #2D6CCF, #2DACCF)",
                        }}
                      ></div>
                    </div>
                  </div>
              

              {/* Fouth Box */}
              <div className='mt-[32px] border-t border-t-[#ABABAB] py-[20px]'>
                <div className='mb-[15px]'>
                  <p className='text-[20px] font-bold text-[#333333]'>
                  Description
                  </p>
                </div>
                <div>
                  <p className='text-[12px] font-normal text-[#ABABAB] text-justify'>
                  Lorem ipsum dolor sit amet consectetur. Eget nunc tortor enim rutrum adipiscing orci. Eget faucibus eu id felis consectetur sed nullam. Tincidunt sollicitudin est et sit mattis vestibulum aenean nec. Nisl fermentum in egestas nunc eu tincidunt non. Amet lectus consectetur massa pretium. Vitae in tincidunt donec dolor sed in scelerisque. Arcu ut enim feugiat velit. Et dictum aliquam felis mattis lectus a. Pharetra dis luctus enim diam euismod eu nunc urna vel. Diam sollicitudin massa nunc ut eu. Dignissim massa pellentesque nec lacinia ultrices odio. Amet est quisque sed erat ac mattis velit praesent. Aliquet imperdiet non risus arcu diam gravida nec vulputate purus. <br /> <br />
                  Odio amet vitae purus eget turpis risus euismod. Habitant imperdiet rhoncus faucibus egestas urna imperdiet id. Morbi integer sed gravida eu erat eget risus nam tristique. In egestas fermentum iaculis tempor. Nisl augue amet in sed massa mauris. Lobortis volutpat purus facilisis in mollis quisque mattis. Est quam commodo semper laoreet enim ac. Malesuada ut consectetur et massa. Aliquam turpis duis turpis ac. Quis volutpat fringilla lectus risus sit nec interdum cursus lorem. Elit cursus porttitor quis fames vel congue est. Convallis tincidunt at vitae id in ac. Non varius at faucibus leo sem dui. Integer arcu fames in metus.
                  </p>
                </div>
              </div>
                </div>
    </section>

    </>
  );
};
export default MyEventFullDetail;