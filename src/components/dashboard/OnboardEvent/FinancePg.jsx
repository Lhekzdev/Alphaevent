import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const FinancePg = () => {
  const navigate = useNavigate();
  const userID = "YOUR_USER_ID_HERE"; // Replace with actual user ID (dynamically if available)

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get(`https://alphaeventappdevmode.onrender.com/api/orgBankDetails/${userID}`);

        setBalance(response.data.balance); // Adjust based on actual API response structure
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    fetchBalance();
  }, [userID]);

  const [balance, setBalance] = useState(null);
  const [loadingDots, setLoadingDots] = useState("");
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
  
    return () => clearInterval(interval);
  }, []);
  


  return (
    <section className="p-4 overflow-y-auto max-h-screen">
      {/* Heading */}
      <div>
        <p className="text-[#3A7BD5] text-[24px] font-bold mb-[20px]">Available Balance</p>
      </div>

      <div>
      <p className="text-[#2F3B4C] text-[34px] font-bold mb-[20px] ml-[16px]">
  ₦<span>{balance !== null ? balance.toLocaleString() : `Loading${loadingDots}`}</span>
</p>

      </div>

      <div className="text-[16px] font-bold flex items-center gap-[18px]">
        <button
          onClick={() => navigate("/WithdrawFund")}
          className="border border-1 border-[#2D6CCF] w-[110px] h-[16px] text-[#2D6CCF] rounded-[8px] py-[24px] px-[18px] flex items-center justify-center"
        >
          Withdraw
        </button>

        <button
          onClick={() => navigate("/WithdrawalHistory")}
          className="border border-1 border-[#2D6CCF] bg-[#2D6CCF] w-[140px] h-[16px] text-[#FFFFFF] rounded-[8px] py-[24px] px-[18px] flex items-center justify-center"
        >
          View History
        </button>
      </div>
    </section>
  );
};

export default FinancePg;
