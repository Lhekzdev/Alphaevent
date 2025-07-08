import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SalesChart = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  const userID = '68545da4e864b5840ad97523'; 

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const response = await axios.get(
          `https://alphaeventappdevmode.onrender.com/api/dashboard-monthly-performance/${userID}`
          
        );

        // Handle array extraction based on your backend's response structure
        const salesArray = response.data?.data || []; // Adjust if shape differs
        setChartData(salesArray);
      } catch (error) {
        console.error("Error fetching sales data:", error);
        toast.error("Failed to load sales performance data.");
      } finally {
        setLoading(false);
      }
    };

    fetchSalesData();
  }, [userID]);

  // Safely create X-axis ticks only if chartData is an array
  const ticks = Array.isArray(chartData)
    ? chartData.filter((d) => d.date).map((d) => d.position)
    : [];

  return (
    <div className="w-[462px] h-[392px] p-4 bg-white rounded-[12px]">
      <ToastContainer />
      <h2 className="text-[20px] font-bold mb-[20px] mt-[20px]">Sales Performance</h2>

      {loading ? (
        <p>Loading chart...</p>
      ) : (
        <AreaChart
          width={450}
          height={255}
          data={chartData}
          margin={{ top: 30, right: 20, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="50%" stopColor="rgba(58, 123, 213, 0.9)" />
              <stop offset="100%" stopColor="rgba(58, 123, 213, 0.1)" />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="position"
            type="number"
            domain={["auto", "auto"]}
            ticks={ticks}
            tickFormatter={(value) => {
              const match = chartData.find((d) => d.position === value);
              return match ? match.date : "";
            }}
          />
          <YAxis domain={[0, 100]} tickCount={6} />
          <CartesianGrid strokeDasharray="3 3" />

          <Area
            type="monotone"
            dataKey="sales"
            stroke="#3A7BD5"
            fill="url(#colorSales)"
            activeDot={{ r: 5, stroke: "#fff", strokeWidth: 2 }}
            dot={({ cx, cy, payload }) =>
              payload.date ? (
                <circle
                  key={payload.position}
                  cx={cx}
                  cy={cy}
                  r={4}
                  fill="#fff"
                  stroke="#A5C5F5"
                  strokeWidth={2}
                />
              ) : null
            }
          />
        </AreaChart>
      )}
    </div>
  );
};

export default SalesChart;
