import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const WithdrawalHistory = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-black flex items-center justify-center w-full h-screen">
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        className="bg-white rounded-[12px] shadow-sm w-[950px] h-[355px]"
      >
        <div className="flex gap-[740px] border-b-[1px] border-b-[#ABABAB] px-[32px] py-[18px]">
          <p className="text-[20px] text-[#000000]">Withdrawal History</p>
        </div>

        <div className="overflow-x-auto px-[32px] py-[20px]">
          <table className="min-w-full text-left">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Notes</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50 text-[14px] text-[#ABABAB]">
                <td className="py-2 px-4 border-b">Event</td>
                <td className="py-2 px-4 border-b">February 25, 2024</td>
                <td className="py-2 px-4 border-b text-[#2A8212] font-bold">Successful</td>
              </tr>
              <tr className="hover:bg-gray-50 text-[14px] text-[#ABABAB]">
                <td className="py-2 px-4 border-b">Dance</td>
                <td className="py-2 px-4 border-b">February 12, 2024</td>
                <td className="py-2 px-4 border-b text-[#FFB35C] font-bold">Pending</td>
              </tr>
              <tr className="hover:bg-gray-50 text-[14px] text-[#ABABAB]">
                <td className="py-2 px-4 border-b">Decoration</td>
                <td className="py-2 px-4 border-b">June 25, 2023</td>
                <td className="py-2 px-4 border-b text-[#ff3e3e] font-bold">Failed</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="ml-[12px]">
          <button
            onClick={() => navigate("/Finance")}
            className="w-[154px] h-[48px] border border-1 border-[#2D6CCF] text-[#2D6CCF] text-[16px] rounded-[10px] font-bold"
          >
            Back to Finance
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default WithdrawalHistory;
