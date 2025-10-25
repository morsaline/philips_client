"use client";

import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// ==== Sample Data Sets ====
const weekData = [
  { name: "Mon", income: 12, order: 18 },
  { name: "Tue", income: 25, order: 24 },
  { name: "Wed", income: 35, order: 30 },
  { name: "Thu", income: 28, order: 26 },
  { name: "Fri", income: 40, order: 35 },
  { name: "Sat", income: 55, order: 50 },
  { name: "Sun", income: 48, order: 42 },
];

const monthData = [
  { name: "Week 1", income: 200, order: 250 },
  { name: "Week 2", income: 300, order: 320 },
  { name: "Week 3", income: 260, order: 280 },
  { name: "Week 4", income: 340, order: 370 },
];

const yearData = [
  { name: "Jan", income: 800, order: 850 },
  { name: "Feb", income: 950, order: 920 },
  { name: "Mar", income: 1100, order: 1050 },
  { name: "Apr", income: 1000, order: 980 },
  { name: "May", income: 1200, order: 1150 },
  { name: "Jun", income: 1350, order: 1300 },
  { name: "Jul", income: 1250, order: 1180 },
  { name: "Aug", income: 1450, order: 1400 },
  { name: "Sep", income: 1300, order: 1280 },
  { name: "Oct", income: 1380, order: 1360 },
  { name: "Nov", income: 1420, order: 1390 },
  { name: "Dec", income: 1500, order: 1450 },
];

export default function SalesAnalytics() {
  const [activeTab, setActiveTab] = useState("Week");

  const getData = () => {
    switch (activeTab) {
      case "Month":
        return monthData;
      case "Year":
        return yearData;
      default:
        return weekData;
    }
  };

  return (
    <div className="bg-white border border-[#e5e7eb] rounded-lg shadow-sm p-4 w-full ">
      {/* ===== Header ===== */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[16px] font-semibold text-[#1e1e1e]">
          Sales Analytics
        </h2>

        <div className="flex items-center gap-2">
          {["Week", "Month", "Year"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-[4px] text-[13px] font-medium rounded-md border transition-all duration-200 ${
                activeTab === tab
                  ? "bg-[#f5f6f8] border-[#d1d5db] text-[#1e1e1e]"
                  : "bg-white border-[#e5e7eb] text-[#6b7280] hover:bg-[#f9fafb]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ===== Chart ===== */}
      <div className="w-full h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={getData()}
            margin={{ top: 10, right: 20, left: -10, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorOrder" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#cdd8f5" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#cdd8f5" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                borderColor: "#e5e7eb",
                fontSize: "13px",
              }}
            />
            <Area
              type="monotone"
              dataKey="order"
              stroke="#93a9e9"
              fill="url(#colorOrder)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* ===== Legend ===== */}
      <div className="flex items-center gap-4 mt-3 text-[13px] text-gray-500 pl-1">
        <div className="flex items-center gap-1">
          <span className="w-[8px] h-[8px] bg-[#e93b3d] rounded-full"></span>
          Income
        </div>
        <div className="flex items-center gap-1">
          <span className="w-[8px] h-[8px] bg-[#a3aab9] rounded-full"></span>
          Order
        </div>
      </div>
    </div>
  );
}
