"use client";

import React, { useState } from "react";
import { Table, Dropdown } from "antd";
import type { ColumnsType } from "antd/es/table";
import { EllipsisOutlined } from "@ant-design/icons";
import AppPagination from "@/components/shared/pagination/AppPagination";

interface Order {
  key: string;
  orderId: string;
  productName: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  amount: string;
  status: "Delivered" | "Pending";
}

const OrdersTable: React.FC = () => {
  const allData: Order[] = Array.from({ length: 20 }).map((_, i) => ({
    key: i.toString(),
    orderId: "855212",
    productName: "Love Board",
    customerName: "Shakil Ahmed",
    email: "customer@gmail.com",
    phone: "192909128321389",
    address: "Dhaka ,Bangladesh",
    amount: "$43555555",
    status: i % 2 === 0 ? "Delivered" : "Pending",
  }));

  // ===== Manual pagination state =====
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  const totalPages = Math.ceil(allData.length / pageSize);
  const start = (currentPage - 1) * pageSize;
  const data = allData.slice(start, start + pageSize);

  // ===== Columns =====
  const columns: ColumnsType<Order> = [
    { title: "Order ID", dataIndex: "orderId", key: "orderId" },
    { title: "Product Name", dataIndex: "productName", key: "productName" },
    { title: "Customer name", dataIndex: "customerName", key: "customerName" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    { title: "Address", dataIndex: "address", key: "address" },
    {
      title: "Total Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount: string) => (
        <span className="font-medium text-[#1e1e1e]">{amount}</span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: Order["status"]) => (
        <span
          className={`px-3 py-[3px] text-[13px] font-medium rounded-full ${
            status === "Delivered"
              ? "bg-[#ffebec] text-[#d9383a]"
              : "bg-[#e6f0fd] text-[#007bff]"
          }`}
        >
          {status}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Dropdown
          menu={{
            items: [
              {
                key: "1",
                label: (
                  <span className="text-gray-700 hover:text-black">
                    View Profile
                  </span>
                ),
              },
              {
                key: "2",
                label: (
                  <span className="bg-[#ffebeb] text-[#d9383a] px-3 py-1 rounded-md block hover:bg-[#ffdede]">
                    Remove
                  </span>
                ),
              },
            ],
          }}
          trigger={["click"]}
          overlayClassName="min-w-[120px]"
        >
          <button className="text-gray-500 hover:text-black">
            <EllipsisOutlined />
          </button>
        </Dropdown>
      ),
    },
  ];

  return (
    <div className="bg-white border border-[#e5e7eb] rounded-lg shadow-sm p-4 mt-5">
      <div>
        <h1 className="text-3xl">Recent Orders</h1>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered={true}
        rowClassName="hover:bg-[#fafafa]"
        className="custom-table"
      />

      {/* ===== Summary + Pagination (Manual) ===== */}
      <div className="flex justify-between items-center pt-3 px-2 text-[13px] text-gray-600">
        <div>
          Showing {start + 1} to {Math.min(start + pageSize, allData.length)} of{" "}
          {allData.length}
        </div>

        <AppPagination
          page={currentPage}
          total={allData.length}
          limit={pageSize}
          onChange={(page: number) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default OrdersTable;
