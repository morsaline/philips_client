// pages/index.js
import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import "antd/dist/reset.css"; // Import Ant Design's default CSS
export default function OrderHistory() {
  interface Order {
    productName: string;
    productSource: string;
    price: number;
    order: number;
    orderDate: string;
    totalPrice: number;
    transactionId: string;
  }

  const ordersData: Order[] = [
    {
      productName: "Love Board",
      productSource: "Shopify",
      price: 236,
      order: 1,
      orderDate: "12/1/2025",
      totalPrice: 622,
      transactionId: "TXN-230914-001",
    },
    {
      productName: "Love Board",
      productSource: "Shopify",
      price: 236,
      order: 1,
      orderDate: "12/1/2025",
      totalPrice: 622,
      transactionId: "TXN-230914-001",
    },
    {
      productName: "Love Board",
      productSource: "Shopify",
      price: 236,
      order: 1,
      orderDate: "12/1/2025",
      totalPrice: 622,
      transactionId: "TXN-230914-001",
    },
    {
      productName: "Love Board",
      productSource: "Shopify",
      price: 236,
      order: 1,
      orderDate: "12/1/2025",
      totalPrice: 622,
      transactionId: "TXN-230914-001",
    },
    {
      productName: "Love Board",
      productSource: "Shopify",
      price: 236,
      order: 1,
      orderDate: "12/1/2025",
      totalPrice: 622,
      transactionId: "TXN-230914-001",
    },
  ];

  const columns: ColumnsType<Order> = [
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Product Source",
      dataIndex: "productSource",
      key: "productSource",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: number) => `$${price}`,
    },
    {
      title: "Order",
      dataIndex: "order",
      key: "order",
    },
    {
      title: "Order Date",
      dataIndex: "orderDate",
      key: "orderDate",
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (totalPrice: number) => `$${totalPrice}`,
    },
    {
      title: "Transaction Id",
      dataIndex: "transactionId",
      key: "transactionId",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Order History
      </h1>
      <Table
        columns={columns}
        dataSource={ordersData}
        rowKey={(record) => record.transactionId + record.orderDate} // ensure unique keys
        pagination={false}
        bordered
        className="custom-table"
      />
    </div>
  );
}
