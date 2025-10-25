"use client";
import React, { useState } from "react";
import { Form, Input, Button, Upload, message, Spin } from "antd";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ProductForm = () => {
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState<any[]>([]);
  const [productType, setProductType] = useState("shopify");

  // ✅ Zod Validation Schema
  const schema = z.object({
    productName: z.string().min(1, "Product name is required"),
    description: z.string().min(1, "Description is required"),
    price: z.preprocess(
      (val) => Number(val),
      z.number().positive("Price must be > 0")
    ),
    images: z.array(z.any()).min(1, "At least one image is required"),
    shopifyLink:
      productType === "shopify"
        ? z.string().min(1, "Shopify link is required")
        : z.string().optional(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // ✅ Submit Handler
  const onFinish = async (values: any) => {
    if (fileList.length === 0) {
      message.error("Please upload at least one image");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("productName", values.productName);
      formData.append("description", values.description);
      formData.append("price", values.price);
      fileList.forEach((file) => formData.append("images", file.originFileObj));

      if (productType === "shopify") {
        formData.append("shopifyLink", values.shopifyLink);
      }

      message.success("Product added successfully ✅");
      console.log("Submitted data:", values);
    } catch (error) {
      message.error("Failed to add product ❌");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Handle image selection
  const handleFileChange = ({ fileList }: any) => {
    setFileList(fileList.slice(0, 5)); // Limit to 5 images
  };

  // ✅ Remove image from preview
  const handleRemoveImage = (uid: string) => {
    setFileList((prev) => prev.filter((file) => file.uid !== uid));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Add New Product
      </h2>

      <Spin spinning={loading}>
        <Form onFinish={handleSubmit(onFinish)} layout="vertical">
          {/* ===== Product Type Toggle ===== */}
          <div className="flex space-x-2 mb-6">
            {["shopify", "manual"].map((type) => (
              <button
                key={type}
                type="button"
                className={`px-3 py-1.5 rounded border text-sm ${
                  productType === type
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-white text-gray-800 border-gray-300"
                }`}
                onClick={() => setProductType(type)}
              >
                {type === "shopify" ? "Shopify Product" : "Manual Product"}
              </button>
            ))}
          </div>

          {/* ===== Shopify Link ===== */}
          {productType === "shopify" && (
            <Form.Item
              label="Shopify Link"
              validateStatus={errors.shopifyLink ? "error" : ""}
              help={errors.shopifyLink?.message?.toString()}
            >
              <Input
                {...register("shopifyLink")}
                placeholder="Enter Shopify product link"
              />
            </Form.Item>
          )}

          {/* ===== Product Name ===== */}
          <Form.Item
            label="Product Name"
            validateStatus={errors.productName ? "error" : ""}
            help={errors.productName?.message?.toString()}
          >
            <Input
              {...register("productName")}
              placeholder="Enter product name"
            />
          </Form.Item>

          {/* ===== Description ===== */}
          <Form.Item
            label="Description"
            validateStatus={errors.description ? "error" : ""}
            help={errors.description?.message?.toString()}
          >
            <Input.TextArea
              rows={3}
              {...register("description")}
              placeholder="Enter product description"
            />
          </Form.Item>

          {/* ===== Price ===== */}
          <Form.Item
            label="Price"
            validateStatus={errors.price ? "error" : ""}
            help={errors.price?.message?.toString()}
          >
            <Input
              type="number"
              {...register("price")}
              placeholder="Enter price"
            />
          </Form.Item>

          {/* ===== Image Preview (Top Section) ===== */}
          {fileList.length > 0 && (
            <div className="mb-4">
              <h3 className="text-sm font-semibold mb-2 text-gray-700">
                Image Preview:
              </h3>
              <div className="flex flex-wrap gap-3">
                {fileList.map((file) => (
                  <div
                    key={file.uid}
                    className="relative w-24 h-24 rounded-lg overflow-hidden border border-gray-300"
                  >
                    <img
                      src={URL.createObjectURL(file.originFileObj)}
                      alt="preview"
                      className="object-cover w-full h-full"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(file.uid)}
                      className="absolute top-1 right-1 bg-white/70 hover:bg-red-500 hover:text-white text-red-600 rounded-full p-1 shadow"
                    >
                      <DeleteOutlined className="text-xs" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===== File Upload (Below Preview) ===== */}
          <Form.Item label="Upload Product Images">
            <Upload
              listType="picture-card"
              beforeUpload={() => false}
              fileList={fileList}
              onChange={handleFileChange}
              multiple
              showUploadList={false}
            >
              <div className="flex flex-col items-center justify-center text-gray-600">
                <UploadOutlined className="text-lg" />
                <span className="text-xs mt-1">Browse Files</span>
              </div>
            </Upload>
            {errors.images && (
              <p className="text-red-500 text-sm mt-1">
                {errors.images.message?.toString()}
              </p>
            )}
          </Form.Item>

          {/* ===== Buttons ===== */}
          <div className="flex justify-end space-x-2">
            <Button type="default" htmlType="button">
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Publish Product
            </Button>
          </div>
        </Form>
      </Spin>
    </div>
  );
};

export default ProductForm;
