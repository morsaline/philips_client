"use client";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function ChangePassword() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="my-10 bg-white ">
      <div className="w-full max-w-md">
        {/* Heading */}
        <h2 className="text-lg font-semibold text-black mb-6">
          Change Password
        </h2>

        {/* Current Password */}
        <div className="mb-5 relative">
          <label
            htmlFor="currentPassword"
            className="block text-sm font-medium text-black mb-2"
          >
            Current Password
          </label>
          <input
            type={showCurrent ? "text" : "password"}
            id="currentPassword"
            placeholder="Old Password"
            className="w-full p-3 text-gray-900 bg-gray-100 border border-transparent rounded-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <span
            className="absolute right-3 top-[38px] cursor-pointer text-gray-600"
            onClick={() => setShowCurrent(!showCurrent)}
          >
            {showCurrent ? (
              <AiOutlineEyeInvisible size={20} />
            ) : (
              <AiOutlineEye size={20} />
            )}
          </span>
        </div>

        {/* New Password */}
        <div className="mb-5 relative">
          <label
            htmlFor="newPassword"
            className="block text-sm font-medium text-black mb-2"
          >
            New Password
          </label>
          <input
            type={showNew ? "text" : "password"}
            id="newPassword"
            placeholder="New Password"
            className="w-full p-3 text-gray-900 bg-gray-100 border border-transparent rounded-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <span
            className="absolute right-3 top-[38px] cursor-pointer text-gray-600"
            onClick={() => setShowNew(!showNew)}
          >
            {showNew ? (
              <AiOutlineEyeInvisible size={20} />
            ) : (
              <AiOutlineEye size={20} />
            )}
          </span>
        </div>

        {/* Confirm Password */}
        <div className="mb-8 relative">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-black mb-2"
          >
            Confirm Password
          </label>
          <input
            type={showConfirm ? "text" : "password"}
            id="confirmPassword"
            placeholder="Confirm Password"
            className="w-full p-3 text-gray-900 bg-gray-100 border border-transparent rounded-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <span
            className="absolute right-3 top-[38px] cursor-pointer text-gray-600"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? (
              <AiOutlineEyeInvisible size={20} />
            ) : (
              <AiOutlineEye size={20} />
            )}
          </span>
        </div>

        {/* Button */}
        <button
          type="button"
          className="bg-[#c0392b] text-white text-sm font-medium px-6 py-2 rounded-sm hover:bg-[#a93226] transition"
        >
          Update Now
        </button>
      </div>
    </div>
  );
}
