"use client";

import Image from "next/image";
import React from "react";

const stats = [
  {
    value: "36,894",
    label: "Total Orders",
    change: "+16.24%",
    icon: "/icons/orders.png",
    link: "See details",
  },
  {
    value: "34,152",
    label: "Total Customers",
    change: "+16.24%",
    icon: "/icons/customers.png",
    link: "See details",
  },
  {
    value: "$724,152",
    label: "Total Review",
    change: "+16.24%",
    icon: "/icons/revenue.png",
    link: "Withdraw",
  },
  {
    value: "894",
    label: "Total Products",
    change: "16.24%",
    icon: "/icons/products.png",
    link: "See details",
  },
  {
    value: "94",
    label: "Shopify Products",
    change: "16.24%",
    icon: "/icons/shopify.png",
    link: "See details",
  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-4 py-6 px-4 bg-[#f7f8fa]">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="relative bg-white border border-[#f0f0f0] rounded-lg shadow-sm overflow-hidden"
        >
          {/* Red Top Border */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#e93b3d]" />

          <div className="p-4 flex justify-between items-start">
            {/* Left Content */}
            <div>
              <h2 className="text-[22px] font-semibold text-[#1e1e1e] leading-snug">
                {stat.value}
              </h2>
              <p className="text-[14px] text-gray-500 mt-1">{stat.label}</p>
              <a
                href="#"
                className="text-[13px] text-[#5577ee] hover:underline mt-2 inline-block"
              >
                {stat.link}
              </a>
            </div>

            {/* Right Content */}
            <div className="text-right flex flex-col items-end">
              <span className="text-[13px] font-semibold text-[#1e1e1e]">
                {stat.change}
              </span>
              <div className="mt-3 w-[38px] h-[38px] rounded-md bg-[#f7f8fa] flex items-center justify-center">
                <Image
                  src={stat.icon}
                  alt={stat.label}
                  width={22}
                  height={22}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
