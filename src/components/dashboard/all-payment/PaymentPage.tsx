"use client";

import React, { useState } from "react";
import { Table, Dropdown, Input, DatePicker, Button, Modal } from "antd";
import { BsThreeDotsVertical } from "react-icons/bs";
import type { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";
import AppPagination from "@/components/shared/pagination/AppPagination";
import { DownloadOutlined } from "@ant-design/icons";
import { DownloadIcon } from "lucide-react";

const { RangePicker } = DatePicker;

interface Payment {
  key: string;
  orderId: string;
  customerName: string;
  paymentDate: string;
  email: string;
  phone: string;
  transactionId: string;
  totalAmount: string;
}

const PaymentPage: React.FC = () => {
  const allData: Payment[] = Array.from({ length: 20 }).map((_, i) => ({
    key: i.toString(),
    orderId: "855212",
    customerName: "Shakil Ahmed",
    paymentDate: "02/11/22",
    email: "customer@gmail.com",
    phone: "19209132821389",
    transactionId: "TXN-230914-001",
    totalAmount: i % 3 === 0 ? "$10.154" : "$43555555",
  }));

  const [filteredData, setFilteredData] = useState<Payment[]>(allData);
  const [searchText, setSearchText] = useState("");
  const [dateRange, setDateRange] = useState<
    [dayjs.Dayjs | null, dayjs.Dayjs | null]
  >([dayjs("2025-10-14"), dayjs("2025-10-14")]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);
  const pageSize = 7;

  // Handle search
  const handleSearch = (value: string) => {
    setSearchText(value);
    const query = value.toLowerCase();
    const filtered = allData.filter(
      (item) =>
        item.customerName.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query) ||
        item.transactionId.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const handleDateRangeChange = (
    dates: any,
    dateStrings?: [string, string]
  ) => {
    // dates can be null or a tuple; normalize to the state shape
    const normalized: [dayjs.Dayjs | null, dayjs.Dayjs | null] = dates ?? [
      null,
      null,
    ];
    setDateRange(normalized);
    // Filter by date if needed
  };

  const handleViewProfile = (record: Payment) => {
    setSelectedPayment(record);
    setIsModalVisible(true);
  };

  const start = (currentPage - 1) * pageSize;
  const paginatedData = filteredData.slice(start, start + pageSize);

  const columns: ColumnsType<Payment> = [
    { title: "Order ID", dataIndex: "orderId", key: "orderId" },
    { title: "Customer Name", dataIndex: "customerName", key: "customerName" },
    { title: "Payment Date", dataIndex: "paymentDate", key: "paymentDate" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    {
      title: "Transaction ID",
      dataIndex: "transactionId",
      key: "transactionId",
    },
    { title: "Total Amount", dataIndex: "totalAmount", key: "totalAmount" },
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
                  <span onClick={() => handleViewProfile(record)}>
                    View Profile
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
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <h1 className="text-lg font-semibold text-gray-800">All Payments</h1>
      </div>

      {/* Filters */}
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
            placeholder="Search..."
            allowClear
            value={searchText}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-44 sm:w-56 rounded-md"
          />

          <Button type="primary" danger>
            Export Data <DownloadIcon />
          </Button>
        </div>
      </div>

      {/* Table */}
      <Table
        columns={columns}
        dataSource={paginatedData}
        pagination={false}
        bordered
        rowClassName="hover:bg-[#fafafa]"
        className="custom-table overflow-x-auto"
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

      {/* Modal */}
      <Modal
        title="Payment Details"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        centered
        width={500}
      >
        {selectedPayment && (
          <div className="text-sm">
            <p>
              <strong>Order ID:</strong> {selectedPayment.orderId}
            </p>
            <p>
              <strong>Customer Name:</strong> {selectedPayment.customerName}
            </p>
            <p>
              <strong>Payment Date:</strong> {selectedPayment.paymentDate}
            </p>
            <p>
              <strong>Email:</strong> {selectedPayment.email}
            </p>
            <p>
              <strong>Phone:</strong> {selectedPayment.phone}
            </p>
            <p>
              <strong>Transaction ID:</strong> {selectedPayment.transactionId}
            </p>
            <p>
              <strong>Total Amount:</strong> {selectedPayment.totalAmount}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default PaymentPage;
