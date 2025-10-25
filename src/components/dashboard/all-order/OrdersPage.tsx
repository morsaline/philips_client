"use client";

import React, { useState } from "react";
import {
  Table,
  Dropdown,
  Input,
  DatePicker,
  Button,
  Menu,
  MenuProps,
  Modal,
} from "antd";
import { BsThreeDotsVertical } from "react-icons/bs";
import AppPagination from "@/components/shared/pagination/AppPagination";
import type { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";
import Link from "next/link";
import { DownloadIcon } from "lucide-react";

const { RangePicker } = DatePicker;

// Interface for Order data
interface Order {
  key: string;
  orderId: string;
  productName: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  totalAmount: string;
  status: string;
}

const AllOrdersPage: React.FC = () => {
  // Example order data
  const allData: Order[] = Array.from({ length: 20 }).map((_, i) => ({
    key: i.toString(),
    orderId: `${Math.floor(Math.random() * 1000000)}`,
    productName: `Product ${i + 1}`,
    customerName: "Shakil Ahmed",
    email: "customer@gmail.com",
    phone: "19209132821389",
    address: "Dhaka, Bangladesh",
    totalAmount: `$${(Math.random() * 1000).toFixed(2)}`,
    status: i % 2 === 0 ? "Delivered" : "Pending",
  }));

  const [filteredData, setFilteredData] = useState<Order[]>(allData);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 7;
  const [searchText, setSearchText] = useState("");
  const [dateRange, setDateRange] = useState<
    [dayjs.Dayjs | null, dayjs.Dayjs | null]
  >([dayjs("2025-10-14"), dayjs("2025-10-14")]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Handle Search Functionality
  const handleSearch = (value: string) => {
    setSearchText(value);
    const query = value.trim().toLowerCase();
    if (!query) {
      setFilteredData(allData);
      return;
    }

    const filtered = allData.filter(
      (order) =>
        order.productName.toLowerCase().includes(query) ||
        order.customerName.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  // Handle Date Picker Change
  const handleDateRangeChange = (
    dates: [dayjs.Dayjs | null, dayjs.Dayjs | null] | null,
    _dateStrings?: [string, string]
  ) => {
    setDateRange(dates ?? [null, null]);
    // Optionally: Filter data by selected date range if relevant
  };

  // Handle View Profile action
  const handleViewProfile = (record: Order) => {
    setSelectedOrder(record);
    setIsModalVisible(true);
  };

  // Handle Remove action
  const handleRemoveOrder = (key: string) => {
    const updated = filteredData.filter((item) => item.key !== key);
    setFilteredData(updated);
  };

  // Pagination logic
  const start = (currentPage - 1) * pageSize;
  const paginatedData = filteredData.slice(start, start + pageSize);

  const columns: ColumnsType<Order> = [
    { title: "Order ID", dataIndex: "orderId", key: "orderId" },
    { title: "Product Name", dataIndex: "productName", key: "productName" },
    { title: "Customer Name", dataIndex: "customerName", key: "customerName" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    { title: "Address", dataIndex: "address", key: "address" },
    { title: "Total Amount", dataIndex: "totalAmount", key: "totalAmount" },
    { title: "Status", dataIndex: "status", key: "status" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Dropdown
          menu={{
            items: [
              {
                key: "view",
                label: (
                  <span
                    className="text-gray-700 hover:text-black"
                    onClick={() => handleViewProfile(record)}
                  >
                    View Profile
                  </span>
                ),
              },
              {
                key: "remove",
                label: (
                  <span
                    className="bg-[#ffebeb] text-[#d9383a] px-3 py-1 rounded-md block hover:bg-[#ffdede]"
                    onClick={() => handleRemoveOrder(record.key)}
                  >
                    Remove
                  </span>
                ),
              },
            ],
          }}
          trigger={["click"]}
        >
          <Button icon={<BsThreeDotsVertical />} />
        </Dropdown>
      ),
    },
  ];

  return (
    <div className="bg-white border border-[#e5e7eb] rounded-lg shadow-sm p-4 mt-4">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <h1 className="text-lg font-semibold text-gray-800">All Orders</h1>
      </div>

      {/* Filters Section */}
      <div className="flex flex-wrap gap-2 justify-between items-center my-5">
        <div className="flex gap-3">
          <RangePicker
            className="rounded-md border-gray-300"
            value={dateRange}
            onChange={handleDateRangeChange}
          />
        </div>

        <div className="flex gap-4">
          <Input.Search
            placeholder="Search Orders"
            allowClear
            value={searchText}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-44 sm:w-56 rounded-md"
          />
          <Button type="primary" className="w-40">
            Expord Data <DownloadIcon />
          </Button>
        </div>
      </div>

      {/* Table Section */}
      <Table
        columns={columns}
        dataSource={paginatedData}
        pagination={false}
        bordered
        rowClassName="hover:bg-[#fafafa]"
        className="custom-table"
      />

      {/* Pagination */}
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

      {/* Modal for Viewing Order Details */}
      <Modal
        title="Order Details"
        open={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
        width={600}
        centered
      >
        {selectedOrder && (
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="mb-2">
                <strong>Order ID:</strong> {selectedOrder.orderId}
              </div>
              <div className="mb-2">
                <strong>Product Name:</strong> {selectedOrder.productName}
              </div>
              <div className="mb-2">
                <strong>Customer Name:</strong> {selectedOrder.customerName}
              </div>
              <div className="mb-2">
                <strong>Email:</strong> {selectedOrder.email}
              </div>
              <div className="mb-2">
                <strong>Phone:</strong> {selectedOrder.phone}
              </div>
              <div className="mb-2">
                <strong>Address:</strong> {selectedOrder.address}
              </div>
              <div className="mb-2">
                <strong>Total Amount:</strong> {selectedOrder.totalAmount}
              </div>
              <div className="mb-2">
                <strong>Status:</strong> {selectedOrder.status}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AllOrdersPage;
