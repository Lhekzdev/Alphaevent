import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import { IoTicket } from "react-icons/io5";
  import { FaSackDollar, FaUserGroup, FaFaceSmile   } from "react-icons/fa6";

const Section1 = () => {
  const [data, setData] = useState({
    totalRevenue: 0,
    revenuePercentage: 0,
    ticketsSold: 0,
    ticketsPercentage: 0,
  });

  const userID = "68545da4e864b5840ad97523";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://alphaeventappdevmode.onrender.com/api/dashboard-monthly-performance/${userID}`
        
        );
        setData(response.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        toast.error("Failed to load dashboard data");
      }
    };

    if (userID) {
      fetchData();
    } else {
      toast.warn("User ID is missing");
    }
  }, [userID]);

  return (
    <>
      <ToastContainer />
      <section className="flex flex-wrap gap-5 font-lato px-4 py-3">
        {/* Card 1 - Total Revenue */}
        <button className="flex bg-[#F3F5FA] w-[240px] h-[114px] rounded-[12px] px-[16px] py-[20px] justify-between items-center shadow-sm">
          <div className="flex flex-col justify-center text-left gap-[4px] leading-none">
            <p className="text-[#ABABAB] text-[10px] font-medium">
              Total Revenue
            </p>
            <div className="mt-2">
              <p className="text-[24px] text-[#333333] font-semibold leading-none">
              ${(data.totalRevenue ?? 0).toLocaleString()}
              </p>
              <p className="text-[#2A8212] text-[12px] font-medium leading-none mt-2">
                ↑{data.revenuePercentage ?? 0}% vs Last week
              </p>
            </div>
          </div>
        

          
<div className="bg-[#DFEFFF] w-[40px] h-[40px] rounded-[20px] flex items-center justify-center">
  <FaSackDollar
 className="text-[22px] text-[#123499]"
            onError={(e) =>
              (e.currentTarget.src = "https://placehold.co/40x40?text=Icon")
            }
/>
</div>
          {/* <img
            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747617145/Icon_10_hqhopm.png"
            alt="icon"
            className="w-[40px] h-[40px]"
            onError={(e) =>
              (e.currentTarget.src = "https://placehold.co/40x40?text=Icon")
            }
          /> */}
        </button>

{/* import { FaSackDollar } from "react-icons/fa6";
<FaSackDollar /> */}
       
        {/* Card 2 - Tickets Sold */}
        <button className="flex bg-[#F3F5FA] w-[240px] h-[114px] rounded-[12px] px-[16px] py-[20px] justify-between items-center shadow-sm">
          <div className="flex flex-col justify-center text-left gap-[4px] leading-none">
            <p className="text-[#ABABAB] text-[10px] font-medium">
              Tickets Sold
            </p>
            <div className="mt-2">
              <p className="text-[24px] text-[#333333] font-semibold leading-none">
                {data.ticketsSold ?? 0}
              </p>
              <p className="text-[#2A8212] text-[12px] font-medium leading-none mt-2">
                ↑{data.ticketsPercentage ?? 0}% vs Last week
              </p>
            </div>
          </div>

          <div className="bg-[#DFEFFF] w-[40px] h-[40px] rounded-[20px] flex items-center justify-center">
  <IoTicket
 className="text-[22px] text-[#123499]"
            onError={(e) =>
              (e.currentTarget.src = "https://placehold.co/40x40?text=Icon")
            }
/>
</div>
          {/* <img
            src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747786883/dashboardsold_lir4nv.svg"
            alt="icon"
            className="w-[40px] h-[40px]"
            onError={(e) =>
              (e.currentTarget.src = "https://placehold.co/40x40?text=Icon")
            }
          /> */}
        </button>

       {/* Card 3 - Engagement Rate from API */}
<button className="flex bg-[#F3F5FA] w-[240px] h-[114px] rounded-[12px] px-[16px] py-[20px] justify-between items-center shadow-sm">
  <div className="flex flex-col justify-center text-left gap-[4px] leading-none">
    <p className="text-[#ABABAB] text-[10px] font-medium">Engagement Rate</p>
    <div className="mt-2">
      <p className="text-[24px] text-[#333333] font-semibold leading-none">
        {data.engagementRate ?? 0}%
      </p>
      <p className={`text-[12px] font-medium leading-none mt-2 ${data.engagementChange >= 0 ? 'text-[#2A8212]' : 'text-[#821212]'}`}>
        {data.engagementChange >= 0 ? '↑' : '↓'}
        {Math.abs(data.engagementChange ?? 0)}% vs Last week
      </p>
    </div>
  </div>
  
  <div className="bg-[#DFEFFF] w-[40px] h-[40px] rounded-[20px] flex items-center justify-center">
  <FaUserGroup 
 className="text-[22px] text-[#123499]"
            onError={(e) =>
              (e.currentTarget.src = "https://placehold.co/40x40?text=Icon")
            }
/>
</div>
{/* <IoTicketOutline />
  <img
    src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747786949/dashboard_engage_uuclzt.svg"
    alt="icon"
    className="w-[40px] h-[40px]"
    onError={(e) =>
      (e.currentTarget.src = "https://placehold.co/40x40?text=Icon")
    }
  /> */}
</button>


        {/* Card 4 - Satisfaction from API */}
<button className="flex bg-[#F3F5FA] w-[240px] h-[114px] rounded-[12px] px-[16px] py-[20px] justify-between items-center shadow-sm">
  <div className="flex flex-col justify-center text-left gap-[4px] leading-none">
    <p className="text-[#ABABAB] text-[10px] font-medium">Satisfaction</p>
    <div className="mt-2">
      <p className="text-[24px] text-[#333333] font-semibold leading-none">
        {data.satisfaction ?? 0}/5
      </p>
      <p className={`text-[12px] font-medium leading-none mt-2 ${data.satisfactionChange >= 0 ? 'text-[#2A8212]' : 'text-[#821212]'}`}>
        {data.satisfactionChange >= 0 ? '↑' : '↓'}
        {Math.abs(data.satisfactionChange ?? 0)}% vs Last week
      </p>
    </div>
  </div>

  <div className="bg-[#DFEFFF] w-[40px] h-[40px] rounded-[20px] flex items-center justify-center">
  <FaFaceSmile 
 className="text-[15px] text-[#123499]"
            onError={(e) =>
              (e.currentTarget.src = "https://placehold.co/40x40?text=Icon")
            }
/>
</div>
  {/* <img
    src="https://res.cloudinary.com/dqtyrjpeh/image/upload/v1747787005/dashboard_satis_pkqkat.svg"
    alt="icon"
    className="w-[40px] h-[40px]"
    onError={(e) =>
      (e.currentTarget.src = "https://placehold.co/40x40?text=Icon")
    }
  /> */}
</button>

      </section>
    </>
  );
};

export default Section1;
