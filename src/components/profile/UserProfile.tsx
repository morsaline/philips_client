"use client";
import { useState } from "react";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaEdit } from "react-icons/fa";
import EditProfileModal from "./EditProfileModal";
import Image from "next/image";
import OrderHistory from "./OrderHistory";
import ChangePassword from "./ChangePassword";

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-[90rem] mx-auto">
      {" "}
      <div className="flex justify-center items-center min-h-[80vh] bg-gray-50">
        <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md text-center">
          {/* Edit icon */}
          <button
            onClick={() => setIsOpen(true)}
            className="absolute top-4 right-4 text-gray-500 hover:text-black"
          >
            <FaEdit size={20} />
          </button>

          {/* Profile image */}
          <Image
            src="/avatar.jpg" // Path to your image in the public folder
            alt="Profile"
            width={112} // 28 * 4px = 112px
            height={112}
            className="rounded-full mx-auto object-cover"
          />

          {/* Name */}
          <h2 className="text-xl font-semibold mt-4">Joohn Emily Carter</h2>
          <p className="text-sm text-gray-500 mb-4">Id: 4455.4</p>

          {/* Info */}
          <div className="text-left text-sm px-6 space-y-2">
            <div className="flex items-center">
              <FaPhoneAlt className="mr-2 text-gray-600" />
              <span className="font-medium">Contact:</span>
              <span className="ml-2 text-gray-700">+84 0373467950</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2 text-gray-600" />
              <span className="font-medium">Email:</span>
              <span className="ml-2 text-gray-700">giangbanganh@gmail.com</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-gray-600" />
              <span className="font-medium">Address:</span>
              <span className="ml-2 text-gray-700">Dhaka Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isOpen && <EditProfileModal onClose={() => setIsOpen(false)} />}
      </div>
      <div>
        <OrderHistory />
      </div>
      <ChangePassword />
    </div>
  );
};

export default UserProfile;
