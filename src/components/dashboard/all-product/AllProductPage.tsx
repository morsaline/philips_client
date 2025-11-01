"use client";

import React, { useState, useEffect } from "react";
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
import type { ColumnsType } from "antd/es/table";
import AppPagination from "@/components/shared/pagination/AppPagination";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

const { RangePicker } = DatePicker;

interface Product {
  key: string;
  productName: string;
  productSource: string;
  price: string;
  order: number;
  totalSales: string;
  image: string;
  description: string;
}

const AllProductPage: React.FC = () => {
  const allData: Product[] = Array.from({ length: 20 }).map((_, i) => ({
    key: i.toString(),
    productName: `Love Board ${i + 1}`,
    productSource: i % 2 === 0 ? "Shopify Integration" : "Manual Entry",
    price: `$${(Math.random() * 100 + 100).toFixed(0)}`,
    order: Math.floor(Math.random() * 30) + 1,
    totalSales: `$${(Math.random() * 1000).toFixed(2)}`,
    image: "/images/sample-product.jpg",
    description:
      "A digital agency is a company that leverages digital channels to grow their clients’ brands online.",
  }));

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [filteredData, setFilteredData] = useState<Product[]>(allData);
  const [selected, setSelected] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");
  const [dateRange, setDateRange] = useState<
    [dayjs.Dayjs | null, dayjs.Dayjs | null]
  >([dayjs("2025-10-14"), dayjs("2025-10-14")]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 7;

  // Filtering
  useEffect(() => {
    let filtered = allData;

    if (searchText.trim()) {
      const q = searchText.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.productName.toLowerCase().includes(q) ||
          item.productSource.toLowerCase().includes(q)
      );
    }

    if (selected === "Shopify") {
      filtered = filtered.filter((d) => d.productSource.includes("Shopify"));
    } else if (selected === "Manual") {
      filtered = filtered.filter((d) => d.productSource.includes("Manual"));
    }

    setFilteredData(filtered);
    setCurrentPage(1);
  }, [searchText, selected]);

  const handleViewDetails = (record: Product) => {
    setSelectedProduct(record);
    setIsModalVisible(true);
  };

  const handleEditDetails = (record: Product) => {
    console.log("Editing:", record);
  };

  const handleSetAsHomePage = (record: Product) => {
    console.log("Set as home page:", record);
  };

  const handleRemove = (key: string) => {
    setFilteredData((prev) => prev.filter((item) => item.key !== key));
  };

  const handleSelect: MenuProps["onClick"] = ({ key }) => {
    setSelected(key);
  };

  const items: MenuProps["items"] = ["Shopify", "Manual"].map((option) => ({
    key: option,
    label: (
      <span
        className={`block text-center px-3 py-1 rounded-md ${
          selected === option
            ? "bg-[#eadcdc] text-black font-medium"
            : "hover:bg-gray-100"
        }`}
      >
        {option}
      </span>
    ),
  }));

  const start = (currentPage - 1) * pageSize;
  const paginatedData = filteredData.slice(start, start + pageSize);

  // Shared Action Menu
  const actionItems = (record: Product): MenuProps["items"] => [
    {
      key: "view",
      label: (
        <span onClick={() => handleViewDetails(record)}>View Details</span>
      ),
    },
    {
      key: "edit",
      label: (
        <span onClick={() => handleEditDetails(record)}>Edit Details</span>
      ),
    },
    {
      key: "set-home",
      label: (
        <span onClick={() => handleSetAsHomePage(record)}>
          Set as Home Page
        </span>
      ),
    },
    {
      key: "remove",
      label: (
        <span
          className="bg-[#ffebeb] text-[#d9383a] px-3 py-1 rounded-md block hover:bg-[#ffdede]"
          onClick={() => handleRemove(record.key)}
        >
          Remove
        </span>
      ),
    },
  ];

  // Manual Table Columns
  const shopifyColumns: ColumnsType<Product> = [
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
      render: (text) => (
        <span className="font-medium text-gray-800">{text}</span>
      ),
    },
    {
      title: "Product Source",
      dataIndex: "productSource",
      key: "productSource",
    },
    { title: "Price", dataIndex: "price", key: "price" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Dropdown menu={{ items: actionItems(record) }} trigger={["click"]}>
          <Button icon={<BsThreeDotsVertical />} />
        </Dropdown>
      ),
    },
  ];

  // Shopify Table Columns (with image)
  const manualColumns: ColumnsType<Product> = [
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <Image
            src={record.image}
            alt={record.productName}
            width={40}
            height={40}
            className="rounded border object-cover"
          />
          <span className="font-medium text-gray-800">
            {record.productName}
          </span>
        </div>
      ),
    },
    {
      title: "Product Source",
      dataIndex: "productSource",
      key: "productSource",
    },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Order", dataIndex: "order", key: "order" },
    { title: "Total Sales", dataIndex: "totalSales", key: "totalSales" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Dropdown menu={{ items: actionItems(record) }} trigger={["click"]}>
          <Button icon={<BsThreeDotsVertical />} />
        </Dropdown>
      ),
    },
  ];

  return (
    <div className="bg-white border border-[#e5e7eb] rounded-lg shadow-sm p-4 mt-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <h1 className="text-lg font-semibold text-gray-800">All Products</h1>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 justify-between items-center my-5">
        <div className="flex gap-3">
          <RangePicker
            className="rounded-md border-gray-300"
            value={dateRange}
            onChange={(dates) => setDateRange(dates ?? [null, null])}
          />
          <Dropdown menu={{ items, onClick: handleSelect }} trigger={["click"]}>
            <Button className="border border-gray-300 px-4 py-[6px] rounded-md text-sm bg-white flex items-center gap-2">
              Product Source
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Button>
          </Dropdown>
        </div>

        <div className="flex gap-4">
          <Input.Search
            placeholder="Search Product"
            allowClear
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-44 sm:w-56 rounded-md"
          />
          <Link href={"/dashboard/add-product"}>
            <Button type="primary" className="w-40">
              Add Product +
            </Button>
          </Link>
        </div>
      </div>

      {/* Conditional Table */}
      <Table
        columns={selected === "Shopify" ? shopifyColumns : manualColumns}
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

      {/* Modal */}
      <Modal
        title="Product Details"
        open={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
        width={600}
        centered
      >
        {selectedProduct && (
          <div className="flex flex-col sm:flex-row gap-4">
            <Image
              src={selectedProduct.image || "/default-image.jpg"}
              alt={selectedProduct.productName}
              width={192}
              height={192}
              className="rounded-md border object-cover"
            />
            <div className="flex-1 space-y-2">
              <div>
                <strong>📦 Product Name:</strong> {selectedProduct.productName}
              </div>
              <div>
                <strong>🔗 Source:</strong> {selectedProduct.productSource}
              </div>
              <div>
                <strong>💲 Price:</strong> {selectedProduct.price}
              </div>
              <div>
                <strong>📈 Total Sales:</strong> {selectedProduct.totalSales}
              </div>
              <div className="text-sm text-gray-700 pt-2">
                <strong>📝 Description:</strong> <br />
                {selectedProduct.description}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AllProductPage;
