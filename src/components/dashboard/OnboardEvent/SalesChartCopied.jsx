import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { position: 0, date: "", sales: 0 },
  { position: 2.8, date: "Feb 6", sales: 20 },
  { position: 5.9, date: "Feb 7", sales: 0 },
  { position: 9.2, date: "Feb 8", sales: 62 },
  { position: 12.2, date: "Feb 9", sales: 60 },
  { position: 15.4, date: "Feb 10", sales: 37 },
  { position: 15.9, date: "", sales: 27 },
];

const ticks = data.filter(d => d.date).map(d => d.position);

const SalesChart = () => {
  return (
    <div className="w-[462px] h-[392px] p-4 bg-white">
      <h2 className="text-[20px] font-bold mb-[20px] mt-[20px]">Sales Performance</h2>
      <AreaChart
        width={450}
        height={255}
        data={data}
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
            const match = data.find((d) => d.position === value);
            return match ? match.date : "";
          }}
        />
        <YAxis domain={[0, 100]} tickCount={6} />
        <CartesianGrid strokeDasharray="3 3" />
        {/* <Tooltip
          formatter={(value, name) => [`${value}`, name === "sales" ? "Sales" : name]}
          labelFormatter={(label) => {
            const match = data.find((d) => d.position === label);
            return match ? match.date : label;
          }}
        /> */}

        <Area
          type="monotone"
          dataKey="sales"
          stroke="#3A7BD5"
          fill="url(#colorSales)"
          activeDot={{ r: 5, stroke: "#fff", strokeWidth: 2 }}
          dot={({ cx, cy, payload }) =>
            payload.date ? (
              <circle
                cx={cx}
                cy={cy}
                r={4}
                fill="#fff"
                stroke="#A5C5F5" // lighter stroke
                strokeWidth={2}
              />
            ) : null
          }
        />
      </AreaChart>
    </div>
  );
};

export default SalesChart;
