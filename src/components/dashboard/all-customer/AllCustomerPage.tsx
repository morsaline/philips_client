"use client";

import React, { useState } from "react";
import { Table, Dropdown, Input, DatePicker } from "antd";
import type { ColumnsType } from "antd/es/table";

import dayjs from "dayjs";
import AppPagination from "@/components/shared/pagination/AppPagination";
import { BsThreeDotsVertical } from "react-icons/bs";

const { RangePicker } = DatePicker;

interface Customer {
  key: string;
  orderId: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  amount: string;
  totalOrder: number;
}

const AllCustomerPage: React.FC = () => {
  // ===== Dummy Data =====
  const allData: Customer[] = Array.from({ length: 20 }).map((_, i) => ({
    key: i.toString(),
    orderId: "855212",
    customerName: "Shakil Ahmed",
    email: "customer@gmail.com",
    phone: i % 2 === 0 ? "0178754303" : "1929082389",
    address: "Dhaka, Bangladesh",
    amount: "$2,154",
    totalOrder: 15,
  }));

  // ===== States =====
  const [filteredData, setFilteredData] = useState<Customer[]>(allData);
  const [searchText, setSearchText] = useState("");
  const [dateRange, setDateRange] = useState<
    [dayjs.Dayjs | null, dayjs.Dayjs | null]
  >([dayjs("2025-10-14"), dayjs("2025-10-14")]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 7;

  // ===== Search Filter Function =====
  const handleSearch = (value: string) => {
    setSearchText(value);
    const query = value.trim().toLowerCase();

    if (!query) {
      setFilteredData(allData);
      return;
    }

    const filtered = allData.filter(
      (item) =>
        item.orderId.toLowerCase().includes(query) ||
        item.customerName.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query) ||
        item.phone.toLowerCase().includes(query) ||
        item.address.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
    setCurrentPage(1); // reset to first page
  };

  // ===== Paginate =====
  const start = (currentPage - 1) * pageSize;
  const paginatedData = filteredData.slice(start, start + pageSize);

  // ===== Columns =====
  const columns: ColumnsType<Customer> = [
    { title: "Order ID", dataIndex: "orderId", key: "orderId" },
    { title: "Customer name", dataIndex: "customerName", key: "customerName" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    { title: "Address", dataIndex: "address", key: "address" },
    {
      title: "Total Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount: string) => <span className="font-medium">{amount}</span>,
    },
    {
      title: "Total Order",
      dataIndex: "totalOrder",
      key: "totalOrder",
      render: (total: number) => <span>{total}</span>,
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
        >
          <button className="text-gray-500 hover:text-black">
            <BsThreeDotsVertical />
          </button>
        </Dropdown>
      ),
    },
  ];

  return (
    <div className="bg-white border border-[#e5e7eb] rounded-lg shadow-sm p-4 mt-4">
      {/* ===== Header ===== */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <h1 className="text-lg font-semibold text-gray-800">All Customer</h1>
      </div>
      <div className="flex flex-wrap gap-2 justify-between items-center my-5">
        <RangePicker
          className="rounded-md border-gray-300"
          value={dateRange}
          onChange={(dates) => setDateRange(dates ?? [null, null])}
        />

        <Input.Search
          placeholder="Search..."
          allowClear
          value={searchText}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-44 sm:w-56 rounded-md"
        />
      </div>

      {/* ===== Table ===== */}
      <Table
        columns={columns}
        dataSource={paginatedData}
        pagination={false}
        bordered
        rowClassName="hover:bg-[#fafafa]"
        className="custom-table"
      />

      {/* ===== Summary + Pagination ===== */}
      <div className="flex justify-between items-center pt-3 px-2 text-[13px] text-gray-600">
        <div>
          Showing {start + 1} to{" "}
          {Math.min(start + pageSize, filteredData.length)} of{" "}
          {filteredData.length}
        </div>
        <AppPagination
          page={currentPage}
          total={filteredData.length}
          limit={pageSize}
          onChange={(page: number) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default AllCustomerPage;
