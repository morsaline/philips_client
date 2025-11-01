"use client";
import React, { useState, useEffect } from "react";
import { Form, Input, Button, Upload, message, Spin } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { UploadCloud } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";

// ✅ Validation Schema (without Shopify link)
const schema = z.object({
  productName: z.string().min(1, "Product name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.preprocess(
    (val) => Number(val),
    z.number().positive("Price must be > 0")
  ),
  images: z.array(z.any()).min(1, "At least one image is required"),
});

export default function CustomForm() {
  const [fileList, setFileList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    setValue("images", fileList);
  }, [fileList, setValue]);

  // ✅ Handle Uploads
  const handleFileChange = ({ fileList }: any) =>
    setFileList(fileList.slice(0, 5));
  const removeImage = (uid: string) =>
    setFileList((prev) => prev.filter((f) => f.uid !== uid));

  // ✅ Form Submit
  const onFinish = async (values: any) => {
    if (fileList.length === 0)
      return message.error("Upload at least one image");

    setLoading(true);
    try {
      message.success("Custom Product Added ✅");
      console.log("Custom product:", values);
    } catch {
      message.error("Failed ❌");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Upload props for Dragger
  const uploadProps = {
    multiple: true,
    beforeUpload: () => false,
    fileList,
    onChange: handleFileChange,
    showUploadList: false,
  };

  return (
    <Spin spinning={loading}>
      <Form onFinish={handleSubmit(onFinish)} layout="vertical">
        {/* Product Name */}
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

        {/* Description */}
        <Form.Item
          label="Description"
          validateStatus={errors.description ? "error" : ""}
          help={errors.description?.message?.toString()}
        >
          <Input.TextArea
            {...register("description")}
            rows={3}
            placeholder="Enter description"
          />
        </Form.Item>

        {/* Price */}
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

        {/* ===== Image Preview Grid ===== */}
        {fileList.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6">
            {fileList.map((file) => {
              const previewUrl = URL.createObjectURL(file.originFileObj);

              return (
                <div
                  key={file.uid}
                  className="relative group border border-gray-300 rounded-lg overflow-hidden shadow-sm"
                >
                  <div className="relative w-full h-28">
                    <Image
                      src={previewUrl}
                      alt="preview"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => removeImage(file.uid)}
                    className="absolute top-1 right-1 bg-white/80 hover:bg-red-500 hover:text-white text-red-600 rounded-full p-1 shadow opacity-0 group-hover:opacity-100 transition"
                  >
                    <DeleteOutlined className="text-xs" />
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* ===== Drag & Drop Upload Section ===== */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Product Images
          </label>

          <Upload.Dragger
            {...uploadProps}
            className="p-6 border-dashed rounded-lg transition-all"
          >
            <div className="flex flex-col items-center justify-center">
              <UploadCloud size={26} className="text-gray-500 mb-2" />
              <p className="font-medium text-sm">Drop file or browse</p>
              <p className="text-gray-400 text-xs">
                Format: jpeg, png, mp4 — Max size: 25 MB
              </p>
            </div>
          </Upload.Dragger>

          {errors.images && (
            <p className="text-red-500 text-sm mt-2">
              {errors.images.message?.toString()}
            </p>
          )}
        </div>

        {/* ===== Submit Button ===== */}
        <div className="flex justify-end">
          <Button type="primary" htmlType="submit">
            Publish Custom Product
          </Button>
        </div>
      </Form>
    </Spin>
  );
}
