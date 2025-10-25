"use client";

import React, { useState } from "react";
import { Modal, Input, Upload, Button, Image } from "antd";
import { UploadCloud, User } from "lucide-react";
import type { UploadProps } from "antd";

interface EditProfileModalProps {
  open: boolean;
  onClose: () => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({
  open,
  onClose,
}) => {
  // ✅ Single state for all form data
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    introduction: "",
    image: null as File | null,
    imageUrl: "", // for preview
  });

  // File upload handler
  const uploadProps: UploadProps = {
    beforeUpload: (file) => {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, image: file, imageUrl }));
      return false; // Prevent auto upload
    },
    multiple: false,
    showUploadList: false, // hide Ant default list
  };

  // Handle text input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle submit
  const handleSubmit = () => {
    console.log("Updated Profile Data:", formData);
    onClose();
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      title={<span className="font-semibold text-lg">Profile</span>}
      className="rounded-xl"
    >
      <div className="space-y-4">
        {/* Profile Preview */}
        <div className="flex flex-col items-center space-y-3">
          <div className="relative w-24 h-24">
            {formData.imageUrl ? (
              <Image
                src={formData.imageUrl}
                alt="Profile Preview"
                width={96}
                height={96}
                className="rounded-full object-cover border border-gray-200"
                preview={false}
              />
            ) : (
              <div className="w-24 h-24 rounded-full flex items-center justify-center border border-gray-300 bg-gray-50">
                <User className="w-8 h-8 text-gray-400" />
              </div>
            )}
          </div>
          <p className="text-gray-600 text-sm">Profile Preview</p>
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <Input
            name="name"
            placeholder="Enter first name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Phone + Email */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <Input
              name="phone"
              placeholder="01845464*****"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <Input
              name="email"
              placeholder="xyz@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium mb-1">Address</label>
          <Input
            name="address"
            placeholder="Enter address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        {/* Introduction */}
        <div>
          <label className="block text-sm font-medium mb-1">Introduction</label>
          <Input.TextArea
            name="introduction"
            rows={3}
            placeholder="Enter introduction"
            value={formData.introduction}
            onChange={handleChange}
          />
        </div>

        {/* Profile Image Upload */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Profile Image
          </label>
          <Upload.Dragger {...uploadProps} className="p-4">
            <div className="flex flex-col items-center justify-center">
              <UploadCloud size={26} className="text-gray-500 mb-2" />
              <p className="font-medium text-sm">Drop file or browse</p>
              <p className="text-gray-400 text-xs">
                Format: jpeg, png, mp4 & Max file size: 25 MB
              </p>
            </div>
          </Upload.Dragger>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-2 pt-3">
          <Button onClick={onClose}>Cancel</Button>
          <Button type="primary" danger onClick={handleSubmit}>
            Change
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default EditProfileModal;
