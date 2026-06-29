import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
  import { useEventForm } from "../../context/context";


const WithdrawalHistory = () => {
  const { userID } = useEventForm();
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);
const [loadingTransactions, setLoadingTransactions] = useState(true);
useEffect(() => {
  const fetchWithdrawals = async () => {
    try {
      const token = localStorage.getItem("authToken");
         
console.log("token:", localStorage.getItem("authToken"));

const BASE_URL ="https://alphaeventappdevmode.onrender.com/api/withdrawal-history/:userId"

// new history
useEffect(() => {
  const fetchWithdrawals = async () => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/withdrawal-history/${user._id}`,
        {
          params: {
            page: 1,
            limit: 10,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setWithdrawals(data.withdrawals);
    } catch (error) {
      console.error(error);
    }
  };

  if (user?._id) {
    fetchWithdrawals();
  }
}, [userID]);

const transactions = data.withdrawals.map(item => ({
  id: item._id,
  date: item.createdAt,
  description: "Withdrawal",
  status: item.status,
  amount: item.amount
}));



console.log("userID:", userID);
console.log("token:", token);
console.log(
  `https://alphaeventappdevmode.onrender.com/api/withdrawal-history/${userID}`
);

      const res = await fetch(

        `https://alphaeventappdevmode.onrender.com/api/withdrawal-history/${userID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      console.log("Withdrawal History:", data);

      // if (res.ok) {
      //   setTransactions(data.withdrawals || []);
      // }
      if (res.ok) {
  console.log("Withdrawal API Response:", data);
  setTransactions(data.withdrawals || []);
}
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingTransactions(false);
    }
  };

  if (userID) {
    fetchWithdrawals();
  }
}, [userID]);


  return (
    // <section className="bg-black flex items-center justify-center w-full h-screen">
    //   <motion.div
    //     initial={{ x: "100%", opacity: 0 }}
    //     animate={{ x: 0, opacity: 1 }}
    //     transition={{ type: "spring", stiffness: 80, damping: 15 }}
    //     className="bg-white rounded-[12px] shadow-sm w-[950px] h-[355px]"
    //   >
    //     <div className="flex gap-[740px] border-b-[1px] border-b-[#ABABAB] px-[32px] py-[18px]">
    //       <p className="text-[20px] text-[#000000]">Withdrawal History</p>
    //     </div>

    //     <div className="overflow-x-auto px-[32px] py-[20px]">
    //       <table className="min-w-full text-left">
    //         <thead>
    //           <tr>
    //             <th className="py-2 px-4 border-b">Notes</th>
    //             <th className="py-2 px-4 border-b">Date</th>
    //             <th className="py-2 px-4 border-b">Status</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           <tr className="hover:bg-gray-50 text-[14px] text-[#ABABAB]">
    //             <td className="py-2 px-4 border-b">Event</td>
    //             <td className="py-2 px-4 border-b">February 25, 2024</td>
    //             <td className="py-2 px-4 border-b text-[#2A8212] font-bold">Successful</td>
    //           </tr>
    //           <tr className="hover:bg-gray-50 text-[14px] text-[#ABABAB]">
    //             <td className="py-2 px-4 border-b">Dance</td>
    //             <td className="py-2 px-4 border-b">February 12, 2024</td>
    //             <td className="py-2 px-4 border-b text-[#FFB35C] font-bold">Pending</td>
    //           </tr>
    //           <tr className="hover:bg-gray-50 text-[14px] text-[#ABABAB]">
    //             <td className="py-2 px-4 border-b">Decoration</td>
    //             <td className="py-2 px-4 border-b">June 25, 2023</td>
    //             <td className="py-2 px-4 border-b text-[#ff3e3e] font-bold">Failed</td>
    //           </tr>
    //         </tbody>
    //       </table>
    //     </div>

    //     <div className="ml-[12px]">
    //       <button
    //         onClick={() => navigate("/Finance")}
    //         className="w-[154px] h-[48px] border border-1 border-[#2D6CCF] text-[#2D6CCF] text-[16px] rounded-[10px] font-bold"
    //       >
    //         Back to Finance
    //       </button>
    //     </div>
    //   </motion.div>
    // </section>

    <div className="overflow-x-auto">
  <table className="w-full border-separate border-spacing-y-4">
    <thead>
      <tr className="bg-indigo-100 shadow">
        <th className="px-6 py-4 text-left text-sm font-medium">
          Date/Time
        </th>
        <th className="px-6 py-4 text-left text-sm font-medium">
          Description
        </th>
        <th className="px-6 py-4 text-left text-sm font-medium">
          Status
        </th>
        <th className="px-6 py-4 text-right text-sm font-medium">
          Amount
        </th>
      </tr>
    </thead>

    <tbody>
      {transactions.map((item) => (
        <tr
          key={item.id}
          className="bg-white shadow-md"
        >
          <td className="px-6 py-4">
            {new Date(item.date).toLocaleString()}
          </td>

          <td className="px-6 py-4">
            {item.description}
          </td>

          <td className="px-6 py-4">
            <span
              className={`font-medium ${
                item.status.toLowerCase() === "completed"
                  ? "text-green-500"
                  : item.status.toLowerCase() === "pending"
                  ? "text-amber-500"
                  : "text-red-500"
              }`}
            >
              {item.status}
            </span>
          </td>

          <td className="px-6 py-4 text-right font-semibold">
            ₦{Number(item.amount).toLocaleString()}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
};

export default WithdrawalHistory;
