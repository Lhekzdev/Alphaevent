import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
    import { useEventForm } from "../../context/context";
import WithdrawFund from "./WithdrawFund";
const FinancePg = () => {
  // create state
  // const [balance, setBalance] = useState(0);
  // const [transactions, setTransactions] = useState([]);
  // const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
const [showWithdrawModal, setShowWithdrawModal] = useState(false);

const [modalStep, setModalStep] = useState("form"); 
// "form" | "confirm" | "success"


const [transactions, setTransactions] = useState([]);
const [balance, setBalance] = useState(null);
const [loading, setLoading] = useState(true);

const [withdrawAmount, setWithdrawAmount] = useState("");
const [bankName, setBankName] = useState("");
const [accountNumber, setAccountNumber] = useState("");

const { userID } = useEventForm();
const token = localStorage.getItem("token");

// fetchWithdrawals
//  useEffect(() => {
//   const fetchWithdrawals = async () => {
//     try {
//       const res = await fetch(
//         `https://alphaeventappdevmode.onrender.com/api/withdrawal-history/${userID}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const data = await res.json();

//       if (res.ok) {
//         setTransactions(data.data);
//       } else {
//         console.log(data.msg);
//       }
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (userID) fetchWithdrawals();
// }, [userID]);


// handleWithdraw 

const handleWithdraw = async () => {
  try {
    const res = await fetch(
      `https://alphaeventappdevmode.onrender.com/api/request-withdrawal/${userID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          amount: withdrawAmount,
          bankName,
          accountNumber,
        }),
      }
    );

    const data = await res.json();

    if (res.ok) {
      toast.success("Withdrawal request sent");

      setShowWithdrawModal(false);

      // refresh history
      fetchWithdrawals();
    } else {
      toast.error(data.msg);
    }
  } catch (err) {
    toast.error("Network error");
  }
};

  // const [balance, setBalance] = useState(null);
  const [loadingDots, setLoadingDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);

    return () => clearInterval(interval);
  }, []);



  return (
    <section className="p-4 overflow-y-auto h-full bg-[#F8F9FC]">
      {/* Heading */}
      <div>
        <p className="text-[#123499] text-[24px] font-bold mb-[20px]">Available Balance</p>
      </div>

      <div>
        <p className="text-[#2F3B4C] text-[34px] font-bold mb-[20px] ml-[16px]">
          ₦<span>{balance !== null ? balance.toLocaleString() : `Loading${loadingDots}`}</span>
        </p>

      </div>

      <div className="text-[16px] font-bold flex items-center gap-[18px]">
        <button type="button"
    onClick={() => setShowWithdrawModal(true)}
          className="border border-1 border-[#123499] w-[110px] h-[16px] text-[#123499] rounded-[8px] py-[24px] px-[18px] flex items-center justify-center"
        >
          Withdraw
        </button>

        <button type="button"
          onClick={() => navigate("/WithdrawalHistory")}
          className="border border-1 border-[#123499] bg-[#123499] w-[140px] h-[16px] text-[#FFFFFF] rounded-[8px] py-[24px] px-[18px] flex items-center justify-center"
        >
          View History
        </button>
      </div>
{showWithdrawModal && (
  <WithdrawFund
    withdrawAmount={withdrawAmount}
    setWithdrawAmount={setWithdrawAmount}
    bankName={bankName}
    setBankName={setBankName}
    accountNumber={accountNumber}
    setAccountNumber={setAccountNumber}
    onSubmit={handleWithdraw}
    onClose={() => setShowWithdrawModal(false)}
  />
)}
    </section>
  );
};

export default FinancePg;
