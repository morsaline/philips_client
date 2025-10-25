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
} from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import AppPagination from "@/components/shared/pagination/AppPagination";
import type { ColumnsType } from "antd/es/table";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Modal } from "antd";
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
    productName: `Product ${i + 1}`,
    productSource: i % 2 === 0 ? "Shopify" : "Manual Entry",
    price: `$${(Math.random() * 100).toFixed(2)}`,
    order: Math.floor(Math.random() * 30) + 1,
    totalSales: `$${(Math.random() * 1000).toFixed(2)}`,
    image: "/images/sample-product.jpg", // replace with real image path
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

  // View Details
  const handleViewDetails = (record: Product) => {
    setSelectedProduct(record);
    setIsModalVisible(true);
  };

  // Edit Details
  const handleEditDetails = (record: Product) => {
    console.log("Editing:", record);
    // Optionally: redirect or open a form modal
  };

  // Set as Home Page
  const handleSetAsHomePage = (record: Product) => {
    console.log("Set as home page:", record);
    // Optionally: update a flag in your state
  };

  // Remove
  const handleRemove = (key: string) => {
    const updated = filteredData.filter((item) => item.key !== key);
    setFilteredData(updated);
  };

  const handleSearch = (value: string) => {
    setSearchText(value);
    const query = value.trim().toLowerCase();
    if (!query) {
      setFilteredData(allData);
      return;
    }

    const filtered = allData.filter(
      (item) =>
        item.productName.toLowerCase().includes(query) ||
        item.productSource.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const start = (currentPage - 1) * pageSize;
  const paginatedData = filteredData.slice(start, start + pageSize);

  const columns: ColumnsType<Product> = [
    { title: "Product Name", dataIndex: "productName", key: "productName" },
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
        <Dropdown
          menu={{
            items: [
              {
                key: "view",
                label: (
                  <span
                    className="text-gray-700 hover:text-black"
                    onClick={() => handleViewDetails(record)}
                  >
                    View Details
                  </span>
                ),
              },
              {
                key: "edit",
                label: (
                  <span
                    className="text-gray-700 hover:text-black"
                    onClick={() => handleEditDetails(record)}
                  >
                    Edit Details
                  </span>
                ),
              },
              {
                key: "set-home",
                label: (
                  <span
                    className="text-gray-700 hover:text-black"
                    onClick={() => handleSetAsHomePage(record)}
                  >
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
            ],
          }}
          trigger={["click"]}
        >
          <Button icon={<BsThreeDotsVertical />} />
        </Dropdown>
      ),
    },
  ];

  const handleSelect: MenuProps["onClick"] = ({ key }) => {
    setSelected(key);
    console.log("Selected source:", key); // You can filter data here
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
  const handleAddProduct = () => {
    // Implement the logic to show the "Add Product" modal or redirect to add product page
    alert("Add Product Button Clicked");
  };

  return (
    <div className="bg-white border border-[#e5e7eb] rounded-lg shadow-sm p-4 mt-4">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <h1 className="text-lg font-semibold text-gray-800">All Products</h1>
      </div>

      {/* Filters Section */}
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
          {" "}
          <Input.Search
            placeholder="Search Product"
            allowClear
            value={searchText}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-44 sm:w-56 rounded-md"
          />
          <Link href={"/dashboard/add-product"}>
            {" "}
            <Button type="primary" className="w-40">
              Add Product +
            </Button>
          </Link>
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
              src={selectedProduct.image || "/default-image.jpg"} // fallback if no image
              alt={selectedProduct.productName}
              width={192} // 48 * 4 (for 48px width * 4 because Tailwind’s sm:w-48 is 12rem = 192px)
              height={192} // keep square aspect ratio
              className="rounded-md border object-cover"
            />
            <div className="flex-1">
              <div className="mb-2">
                <strong>📦 Product Name:</strong> {selectedProduct.productName}
              </div>
              <div className="mb-2">
                <strong>🔗 Source:</strong> {selectedProduct.productSource}
              </div>
              <div className="mb-2">
                <strong>💲 Price:</strong> {selectedProduct.price}
              </div>
              <div className="mb-2">
                <strong>📈 Total Sales:</strong> {selectedProduct.totalSales}
              </div>
              <div className="mt-4 text-sm text-gray-700">
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
