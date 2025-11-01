"use client";
import React, { useState } from "react";
import { Tabs } from "antd";
import ShopifyForm from "./ShopifyForm";
import ManualForm from "./ManualForm";
import CustomForm from "./CustomForm";

const ProductFormTabs = () => {
  const [activeKey, setActiveKey] = useState("shopify");

  const items = [
    {
      key: "shopify",
      label: "Shopify Product",
      children: <ShopifyForm />,
    },
    {
      key: "manual",
      label: "Manual Product",
      children: <ManualForm />,
    },
    {
      key: "custom",
      label: "Custom Product",
      children: <CustomForm />,
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Add New Product
      </h2>

      <Tabs
        defaultActiveKey="shopify"
        activeKey={activeKey}
        onChange={(key) => setActiveKey(key)}
        items={items}
        type="card"
        className="custom-tabs"
      />
    </div>
  );
};

export default ProductFormTabs;
