import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

  import { useEventForm } from "../../context/context";

import React,{useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SalesChart = () => {
  const { userID } = useEventForm();
  const [salesData, setSalesData] = useState([]);
   const token = localStorage.getItem("authToken");
  const BASE_URL ="https://alphaeventappdevmode.onrender.com/api"

useEffect(() => {
  const fetchSales = async () => {
    try {
      const token = localStorage.getItem("authToken");

      const { data } = await axios.get(
        `${BASE_URL}/dashboard-monthly-performance/${userID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSalesData(data.Performance);
      console.log("API Response:", data);
console.log("Performance:", data.Performance);

    } catch (err) {
      console.log(err);
    }
  };

  if (userID) {
    fetchSales();
  }
}, [userID]);

useEffect(() => {
  console.log("Sales Data:", salesData);
}, [salesData]);

  
  // const ticks = Array.isArray(chartData)
  //   ? chartData.filter((d) => d.date).map((d) => d.position)
  //   : [];

  return (
   <div className="bg-white rounded-xl lg:w-[500px] shadow p-6">

    <h2 className="text-2xl font-bold">
        Sales Performance
    </h2>

    <ResponsiveContainer width="100%" height={320}>
        <AreaChart data={salesData}>

            <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3"/>

            <XAxis dataKey="day_date"/>

            <YAxis/>

            <Tooltip/>

            <Area
                type="monotone"
                dataKey="day_totalsales"
                stroke="#2563EB"
                strokeWidth={3}
                fill="url(#colorSales)"
                dot={{
                    r:4,
                    fill:"#fff",
                    stroke:"#2563EB",
                    strokeWidth:2
                }}
            />

        </AreaChart>
    </ResponsiveContainer>

</div>
  );
};

export default SalesChart;
