"use client";

import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import productImg from "@/assets/icons/product-icon.png"; // replace with your real icon

interface OrderData {
  key: string;
  productName: string;
  productSource: string;
  price: string;
  order: string;
  oDate: string;
  totalPrice: string;
  transactionId: string;
}

const ProfileDetails: React.FC = () => {
  // ===== Dummy Data =====
  const data: OrderData[] = Array.from({ length: 5 }).map((_, i) => ({
    key: i.toString(),
    productName: "Love Board",
    productSource: "Shopify",
    price: "$236",
    order: "1",
    oDate: "$62,362",
    totalPrice: "$622",
    transactionId: `TXN-23094-${i + 1}`,
  }));

  // ===== Columns =====
  const columns: ColumnsType<OrderData> = [
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
      render: (text) => (
        <div className="flex items-center gap-2">
          <Image
            src={productImg}
            alt="Product Icon"
            width={24}
            height={24}
            className="object-contain"
          />
          <span className="text-[#1e1e1e] text-[15px] font-medium">{text}</span>
        </div>
      ),
    },
    {
      title: "Product Source",
      dataIndex: "productSource",
      key: "productSource",
      render: (text) => (
        <span className="text-gray-600 text-[14px]">{text}</span>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text) => (
        <span className="text-gray-700 font-medium">{text}</span>
      ),
    },
    {
      title: "Order",
      dataIndex: "order",
      key: "order",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "ODate",
      dataIndex: "oDate",
      key: "oDate",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (text) => <span className="text-gray-700">{text}</span>,
    },
    {
      title: "Transaction Id",
      dataIndex: "transactionId",
      key: "transactionId",
      render: (text) => (
        <span className="text-gray-600 text-[14px]">{text}</span>
      ),
    },
  ];

  return (
    <div className="bg-white p-5 rounded-md border border-[#e5e7eb] max-w-5xl mx-auto mt-6 shadow-sm">
      {/* ===== Profile Section ===== */}
      <div className="flex items-center gap-6 pb-5 border-b border-gray-200">
        {/* Profile Image */}
        <div className="w-[110px] h-[110px] rounded-md overflow-hidden flex-shrink-0">
          <Image
            src="https://i.pravatar.cc/300"
            alt="Profile"
            width={110}
            height={110}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Info */}
        <div>
          <h2 className="text-[20px] font-semibold text-[#1e1e1e]">
            Joohn Emily Carter
          </h2>
          <p className="text-gray-500 text-[14px] mt-[2px]">Id: 4455 4</p>

          <div className="flex flex-col gap-2 mt-3 text-[14px] text-gray-700">
            <div className="flex items-center gap-2">
              <Phone size={15} className="text-[#1e1e1e]" />
              <span className="font-medium">Contact</span>
              <span className="text-gray-500 ml-1">+84 0373467950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={15} className="text-[#1e1e1e]" />
              <span className="font-medium">Email</span>
              <span className="text-gray-500 ml-1">giangbanganh@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={15} className="text-[#1e1e1e]" />
              <span className="font-medium">Address</span>
              <span className="text-gray-500 ml-1">Dhaka Bangladesh</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Order Table ===== */}
      <div className="mt-5">
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered
          className="custom-table"
        />
      </div>
    </div>
  );
};

export default ProfileDetails;
