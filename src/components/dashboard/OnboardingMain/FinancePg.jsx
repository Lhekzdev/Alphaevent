import React, { useEffect, useState } from "react";
  import { useEventForm } from "../../context/context";
  import { useNavigate } from 'react-router-dom';
import axios from "axios";
  
import WithdrawFund from "./WithdrawFund";




const FinancePg = () => {

  // filter 

  const [transactions, setTransactions] = useState([]);
const [filteredTransactions, setFilteredTransactions] = useState([]);
const [statusFilter, setStatusFilter] = useState("All");
const { userID } = useEventForm();

// for withdraw

const [withdrawableBalance, setwithdrawableBalance] = useState(0);
const [withdrawStep, setWithdrawStep] = useState(0);
// 0 = closed
// 1 = Enter amount
// 2 = Confirm
// 3 = Success

const [amount, setAmount] = useState("");
const [note, setNote] = useState("");
const [loading, setLoading] = useState(false);



   const token = localStorage.getItem("authToken");
  const BASE_URL ="https://alphaeventappdevmode.onrender.com/api"



  useEffect(() => {
  if (!userID || !token) {
    console.log("Waiting for userID/token", {
      userID,
      token,
    });
    return;
  }

  const fetchBalance = async () => {
    try {
      console.log(
        "Calling:",
        `${BASE_URL}/orGTotRev/${userID}`
      );

      const { data } = await axios.get(
        `${BASE_URL}/orGTotRev/${userID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Response:", data);

      setwithdrawableBalance(
        data.withdrawableBalance || 0
      );
    } catch (error) {
      console.log("Status:", error.response?.status);
      console.log("Response:", error.response?.data);
    }
  };

  fetchBalance();
}, [userID, token]);


const handleWithdraw = async () => {
  try {
    setLoading(true);

    const response = await axios.post(
      `${BASE_URL}/request-withdrawal/${userID}`,
      {
        amount: Number(amount),
         reason: note,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response.data);

    // Refresh balance
    setwithdrawableBalance(prev => prev - Number(amount));

    setWithdrawStep(3);

    setAmount("");
    setNote("");

  } catch (error) {
    console.log(error.response?.data);
  } finally {
    setLoading(false);
  }
};



 useEffect(() => {
  const fetchWithdrawals = async () => {
    try {
      console.log("userID:", userID);
      console.log("token:", token);

      console.log(
        "Withdrawal URL:",
        `${BASE_URL}/withdrawal-history/${userID}`
      );

      const res = await axios.get(
        `${BASE_URL}/withdrawal-history/${userID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("API Response:", res.data);

      const formatted = res.data.withdrawals.map((item) => ({
        id: item._id,
        date: new Date(item.createdAt).toLocaleString(),
        description: "Withdrawal",
        status: item.status,
        amount: item.amount,
      }));

      setTransactions(formatted);
      setFilteredTransactions(formatted);
    } catch (err) {
      console.log("Status:", err.response?.status);
      console.log("Response:", err.response?.data);
      console.error(err);
    }
  };

  if (userID && token) {
    fetchWithdrawals();
  }
}, [userID, token]);


const handleFilter = (status) => {
  setStatusFilter(status);

  if (status === "All") {
    setFilteredTransactions(transactions);
    return;
  }

  const filtered = transactions.filter(
    (transaction) =>
      transaction.status?.toLowerCase() === status.toLowerCase()
  );

  setFilteredTransactions(filtered);
};



// filter serach
const [search, setSearch] = useState("");

useEffect(() => {
  let result = [...transactions];

  if (statusFilter !== "All") {
    result = result.filter(
      (item) =>
        item.status?.toLowerCase() ===
        statusFilter.toLowerCase()
    );
  }

  if (search) {
    result = result.filter((item) =>
      item.description
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }

  setFilteredTransactions(result);
}, [statusFilter, search, transactions]);



 return (
  
    <div className="bg-[#f7f7f7] min-h-screen p-6">
<div className="bg-white rounded-lg p-6 shadow-sm">
  <div className="flex items-start justify-between">
    <div>
      <p className="text-blue-600 text-sm font-medium mb-4">
        Available Balance
      </p>

      <h1 className="text-5xl font-bold text-slate-700">
        ₦{Number(withdrawableBalance).toLocaleString()}
      </h1>
    </div>

    <div className="flex gap-3">
      <button
       onClick={() => setWithdrawStep(1)}
        className="px-5 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition"
      >
        Withdraw
      </button>

      <button
        onClick={() => navigate("/topup")}
        className="px-5 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
      >
        Top-up
      </button>
    </div>


{/* withdrawal model */}
{withdrawStep > 0 && (
  <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

    {/* STEP 1 */}
    {withdrawStep === 1 && (
      <div className="bg-white w-full max-w-md rounded-xl p-6">

        <div className="flex justify-between items-center mb-6">
          <h2 className="font-semibold text-lg">
            Withdraw Funds
          </h2>

          <button onClick={() => setWithdrawStep(0)}>
            ✕
          </button>
        </div>

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border rounded-md w-full p-3 mb-4"
        />

        <input
          type="text"
          placeholder="Note (Optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="border rounded-md w-full p-3"
        />

        <div className="flex justify-end gap-3 mt-5">

          <button
            onClick={() => setWithdrawStep(0)}
            className="border px-6 py-2 rounded-md"
          >
            Cancel
          </button>

          <button
            onClick={() => setWithdrawStep(2)}
            disabled={!amount}
            className="bg-blue-700 text-white px-6 py-2 rounded-md"
          >
            Next
          </button>

        </div>

      </div>
    )}

    {/* STEP 2 */}

    {withdrawStep === 2 && (
      <div className="bg-white w-full max-w-md rounded-xl p-8 text-center">

        <div className="flex justify-end">
          <button onClick={() => setWithdrawStep(0)}>
            ✕
          </button>
        </div>

        <h2 className="text-xl font-semibold mb-8">
          Confirm Withdrawal
        </h2>

        <p className="mb-3">
          You are withdrawing
        </p>

        <h1 className="text-3xl font-bold mb-6">
          ₦{Number(amount).toLocaleString()}
        </h1>

        <p className="text-gray-500 mb-8">
          Note: {note || "No note"}
        </p>

        <button
          onClick={handleWithdraw}
          disabled={loading}
          className="bg-green-600 text-white px-10 py-3 rounded-md"
        >
          {loading ? "Processing..." : "Confirm"}
        </button>

        <button
          onClick={() => setWithdrawStep(1)}
          className="block mx-auto mt-5 bg-gray-100 px-8 py-2 rounded-md"
        >
          Go Back
        </button>

      </div>
    )}

    {/* STEP 3 */}

    {withdrawStep === 3 && (
      <div className="bg-white w-full max-w-md rounded-xl p-8 text-center">

        <div className="flex justify-end">
          <button onClick={() => setWithdrawStep(0)}>
            ✕
          </button>
        </div>

        <h2 className="text-xl font-semibold mb-8">
          Withdrawal Placed Successfully
        </h2>

        <p className="text-gray-500 mb-8">
          Your withdrawal request has been submitted.
          <br />
          You will be notified once it is processed.
        </p>

        <button
          onClick={() => {
            setWithdrawStep(0);
          }}
          className="bg-green-700 text-white px-8 py-3 rounded-md"
        >
          Back to Finance
        </button>

      </div>
    )}

  </div>
)}
      
  </div>

  <div className="border-b mt-8"></div>
</div>

      {/* Top Filters */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-600">Status:</span>
     <select
  value={statusFilter}
  onChange={(e) => handleFilter(e.target.value)}
  className="outline-none bg-transparent"
>
  <option value="All">All</option>
  <option value="Pending">Pending</option>
  <option value="Completed">Completed</option>
  <option value="Cancelled">Cancelled</option>
</select>
          </div>

          <button className="text-[#243BEB] border-b-2 border-[#243BEB] pb-2 font-medium">
            All
          </button>
        </div>

    <input
  type="text"
  placeholder="Search transactions..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="border rounded px-3 py-2"
/>
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-6">
        Transaction History
      </h2>

      {/* Header */}
      <div className="grid grid-cols-4 bg-[#B9C7FF] rounded-md shadow px-6 py-4 font-medium text-gray-900">
        <p>Date/Time</p>
        <p>Description</p>
        <p>Status</p>
        <p className="text-right">Amount</p>
      </div>

      {/* Transactions */}
      <div className="mt-5 space-y-4">
        {filteredTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className="grid grid-cols-4 bg-white shadow-md rounded-md px-6 py-6"
          >
            <p className="text-gray-800">{transaction.date}</p>

            <p className="text-gray-800">
              {transaction.description}
            </p>

            <p
              className={`font-medium ${getStatusColor(
                transaction.status
              )}`}
            >
              {transaction.status}
            </p>

            <p className="text-right font-semibold text-gray-900">
              ₦{transaction.amount.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
  export default FinancePg;