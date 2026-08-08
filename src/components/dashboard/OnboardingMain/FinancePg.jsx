import React, { useEffect, useState } from "react";
import { useEventForm } from "../../context/context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
  
import WithdrawFund from "./WithdrawFund";




const FinancePg = () => {

  // filter 

  const [transactions, setTransactions] = useState([]);
const [filteredTransactions, setFilteredTransactions] = useState([]);
const [statusFilter, setStatusFilter] = useState("All");
const { userID } = useEventForm();

const navigate = useNavigate();
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
  <div className="w-full min-h-screen bg-[#f7f7f7] p-3 sm:p-4 md:p-5 lg:p-4 xl:p-8 overflow-x-hidden">

    {/* Balance & Actions */}
    <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-sm mb-6">
      
      <p className="text-sm sm:text-base text-gray-500 mb-2">
        Available Balance
      </p>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        
        {/* Balance */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-700 break-words">
          ₦{Number(withdrawableBalance).toLocaleString()}
        </h1>

        {/* Buttons */}
        <div className="flex flex-col xs:flex-row sm:flex-row gap-3 w-full sm:w-auto">
          
          <button
            onClick={() => setWithdrawStep(1)}
            className="
              w-full sm:w-auto
              px-5 py-2.5
              border border-blue-600
              text-blue-600
              rounded-md
              hover:bg-blue-50
              transition
            "
          >
            Withdraw
          </button>

          <button
            onClick={() => navigate("/topup")}
            className="
              w-full sm:w-auto
              px-5 py-2.5
              bg-blue-700
              text-white
              rounded-md
              hover:bg-blue-800
              transition
            "
          >
            Top-up
          </button>

        </div>
      </div>
    </div>


    {/* Withdrawal Modal */}
    {withdrawStep > 0 && (
      <div
        className="
          fixed
          inset-0
          z-50
          bg-black/50
          flex
          items-center
          justify-center
          p-4
          overflow-y-auto
        "
      >

        {/* STEP 1 */}
        {withdrawStep === 1 && (
          <div className="bg-white w-full max-w-md rounded-xl p-5 sm:p-6">

            <div className="flex justify-between items-center mb-6">
              <h2 className="font-semibold text-lg sm:text-xl">
                Withdraw Funds
              </h2>

              <button
                onClick={() => setWithdrawStep(0)}
                className="text-gray-500 hover:text-gray-900 text-xl"
              >
                ✕
              </button>
            </div>

            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="
                border
                rounded-md
                w-full
                p-3
                mb-4
                outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

            <input
              type="text"
              placeholder="Note (Optional)"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="
                border
                rounded-md
                w-full
                p-3
                outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

            <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 mt-5">

              <button
                onClick={() => setWithdrawStep(0)}
                className="
                  w-full sm:w-auto
                  border
                  px-6 py-2.5
                  rounded-md
                "
              >
                Cancel
              </button>

              <button
                onClick={() => setWithdrawStep(2)}
                disabled={!amount}
                className="
                  w-full sm:w-auto
                  bg-blue-700
                  text-white
                  px-6 py-2.5
                  rounded-md
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
              >
                Next
              </button>

            </div>
          </div>
        )}


        {/* STEP 2 */}
        {withdrawStep === 2 && (
          <div className="bg-white w-full max-w-md rounded-xl p-5 sm:p-8 text-center">

            <div className="flex justify-end">
              <button
                onClick={() => setWithdrawStep(0)}
                className="text-gray-500 hover:text-gray-900 text-xl"
              >
                ✕
              </button>
            </div>

            <h2 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8">
              Confirm Withdrawal
            </h2>

            <p className="mb-3 text-gray-600">
              You are withdrawing
            </p>

            <h1 className="text-2xl sm:text-3xl font-bold mb-6 break-words">
              ₦{Number(amount).toLocaleString()}
            </h1>

            <p className="text-gray-500 mb-8 break-words">
              Note: {note || "No note"}
            </p>

            <button
              onClick={handleWithdraw}
              disabled={loading}
              className="
                w-full
                bg-green-600
                text-white
                px-10 py-3
                rounded-md
                disabled:opacity-50
              "
            >
              {loading ? "Processing..." : "Confirm"}
            </button>

            <button
              onClick={() => setWithdrawStep(1)}
              className="
                w-full
                mt-4
                bg-gray-100
                px-8 py-2.5
                rounded-md
              "
            >
              Go Back
            </button>

          </div>
        )}


        {/* STEP 3 */}
        {withdrawStep === 3 && (
          <div className="bg-white w-full max-w-md rounded-xl p-5 sm:p-8 text-center">

            <div className="flex justify-end">
              <button
                onClick={() => setWithdrawStep(0)}
                className="text-gray-500 hover:text-gray-900 text-xl"
              >
                ✕
              </button>
            </div>

            <h2 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8">
              Withdrawal Placed Successfully
            </h2>

            <p className="text-gray-500 mb-8 leading-7">
              Your withdrawal request has been submitted.
              <br />
              You will be notified once it is processed.
            </p>

            <button
              onClick={() => setWithdrawStep(0)}
              className="
                w-full
                bg-green-700
                text-white
                px-8 py-3
                rounded-md
              "
            >
              Back to Finance
            </button>

          </div>
        )}

      </div>
    )}


    {/* Filters */}
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-5 md:p-6 mb-6">

      <div
        className="
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-4
        "
      >

        {/* Status */}
        <div className="flex items-center gap-2 text-sm sm:text-base">
          <span className="text-gray-600">
            Status:
          </span>

          <select
            value={statusFilter}
            onChange={(e) => handleFilter(e.target.value)}
            className="
              outline-none
              bg-transparent
              border
              rounded-md
              px-2 py-1.5
              cursor-pointer
            "
          >
            <option value="All">All</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>


        {/* Search */}
        <input
          type="text"
          placeholder="Search transactions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full
            sm:w-[280px]
            md:w-[320px]
            border
            rounded-md
            px-3 py-2.5
            outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />

      </div>
    </div>


    {/* Transaction History */}
    <div className="w-full">

      <h2 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6">
        Transaction History
      </h2>


      {/* Desktop Table Header */}
      <div
        className="
          hidden
          md:grid
          grid-cols-4
          gap-4
          bg-[#B9C7FF]
          rounded-md
          shadow
          px-4
          lg:px-6
          py-4
          font-medium
          text-gray-900
        "
      >
        <p>Date/Time</p>
        <p>Description</p>
        <p>Status</p>
        <p className="text-right">
          Amount
        </p>
      </div>


      {/* Transactions */}
      <div className="mt-4 sm:mt-5 space-y-4">

        {filteredTransactions.length === 0 ? (
          <div className="bg-white rounded-md shadow-sm p-8 text-center text-gray-500">
            No transactions found.
          </div>
        ) : (
          filteredTransactions.map((transaction) => (

            <div
              key={transaction.id}
              className="
                bg-white
                shadow-md
                rounded-md
                p-4
                sm:p-5
                md:px-6
                md:py-5
              "
            >

              {/* Desktop */}
              <div className="hidden md:grid grid-cols-4 gap-4 items-center">

                <p className="text-gray-800 break-words">
                  {transaction.date}
                </p>

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
                  ₦{Number(transaction.amount).toLocaleString()}
                </p>

              </div>


              {/* Mobile / Small Tablet */}
              <div className="md:hidden space-y-3">

                <div className="flex justify-between items-start gap-4">
                  <span className="text-sm text-gray-500">
                    Date/Time
                  </span>

                  <span className="text-sm text-gray-800 text-right">
                    {transaction.date}
                  </span>
                </div>

                <div className="flex justify-between items-center gap-4">
                  <span className="text-sm text-gray-500">
                    Description
                  </span>

                  <span className="text-sm text-gray-800 text-right">
                    {transaction.description}
                  </span>
                </div>

                <div className="flex justify-between items-center gap-4">
                  <span className="text-sm text-gray-500">
                    Status
                  </span>

                  <span
                    className={`font-medium ${getStatusColor(
                      transaction.status
                    )}`}
                  >
                    {transaction.status}
                  </span>
                </div>

                <div className="flex justify-between items-center gap-4 pt-2 border-t">
                  <span className="text-sm text-gray-500">
                    Amount
                  </span>

                  <span className="font-semibold text-gray-900">
                    ₦{Number(transaction.amount).toLocaleString()}
                  </span>
                </div>

              </div>

            </div>

          ))
        )}

      </div>
    </div>

  </div>
);
}
  export default FinancePg;