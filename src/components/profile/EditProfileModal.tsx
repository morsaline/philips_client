"use client";
import { useState, ChangeEvent } from "react";

type EditProfileModalProps = {
  onClose: () => void;
};

const EditProfileModal = ({ onClose }: EditProfileModalProps) => {
  const [formData, setFormData] = useState<{
    name: string;
    contact: string;
    email: string;
    address: string;
  }>({
    name: "",
    contact: "",
    email: "",
    address: "",
  });

  const [profilePic, setProfilePic] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePicChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  const handleSubmit = () => {
    console.log("Submitting", formData, "Profile Pic:", profilePic);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-xl w-full max-w-4xl p-8 relative">
        <h2 className="text-xl font-semibold text-center mb-6">
          Edit Settings
        </h2>

        {/* Profile picture upload */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            {profilePic ? (
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-2xl text-gray-500">👤</span>
            )}
          </div>
          <label className="text-sm text-blue-600 cursor-pointer">
            Upload Picture
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePicChange}
            />
          </label>
        </div>

        {/* Form */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-sm font-medium mb-1 text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              className="border px-4 py-2 rounded"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="contact"
              className="text-sm font-medium mb-1 text-gray-700"
            >
              Contact
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              placeholder="Enter Contact"
              className="border px-4 py-2 rounded"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium mb-1 text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              className="border px-4 py-2 rounded"
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="address"
              className="text-sm font-medium mb-1 text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address"
              className="border px-4 py-2 rounded"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={handleSubmit}
            className="bg-red-500 text-white px-6 py-2 rounded-md"
          >
            Submit Now
          </button>
          <button
            onClick={onClose}
            className="border border-gray-300 px-6 py-2 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
