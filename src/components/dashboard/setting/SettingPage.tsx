"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Input, Button } from "antd";
import { Phone, Mail, MapPin, Pencil } from "lucide-react";
import EditProfileModal from "./EditProfileModal";

export default function SettingsPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#f9fafb] px-6 py-8 font-sans">
      {/* ===== Heading ===== */}
      <h1 className="text-[22px] font-semibold text-[#1e1e1e] mb-6">
        Settings
      </h1>

      {/* ===== Profile Card ===== */}
      <div className="bg-white border border-[#e5e7eb] rounded-xl shadow-sm p-16   relative">
        {/* Edit Icon */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-black transition"
          onClick={() => setOpen(true)}
        >
          <Pencil size={18} />
        </button>

        <div className="p-5">
          {" "}
          <div className="flex gap-5 ">
            {" "}
            <div className="flex gap-4 w-1/2">
              {" "}
              {/* Profile Image */}
              <div className=" ">
                <Image
                  src="https://i.pravatar.cc/120?img=1"
                  alt="User"
                  width={150}
                  height={150}
                  className="rounded-lg object-cover"
                />
              </div>
              {/* Profile Info */}
              <div className="flex flex-col md:flex-row justify-between w-full gap-6">
                {/* Left side */}
                <div className="flex-1">
                  <h2 className="text-[18px] font-semibold text-[#1e1e1e]">
                    Joohn Emily Carter
                  </h2>
                  <p className="text-sm text-gray-600 mt-2 font-medium">
                    Introduction:
                  </p>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    Lorem Ipsum as their for default model text, and a search
                    for 'lorem ipsum' will uncover many web for site.
                  </p>
                </div>
              </div>
            </div>
            {/* Right side */}
            <div className=" space-y-3 w-1/2 ">
              <div className="flex items-center gap-2">
                <Phone className="text-gray-500" size={16} />
                <span className="font-bold">Phone</span>
                <span className="text-sm text-gray-700">+84 0373467950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="text-gray-500" size={16} />
                <span className="font-bold">Email</span>
                <span className="text-sm text-gray-700">
                  giangbanganh@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-gray-500" size={16} />
                <span className="font-bold">Address</span>
                <span className="text-sm text-gray-700">Dhaka Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Change Password Section ===== */}
      <div className="bg-white border border-[#e5e7eb] rounded-xl shadow-sm p-6 mt-8">
        <h2 className="text-[18px] font-semibold text-[#1e1e1e] mb-6">
          Change Password
        </h2>

        <form className="space-y-5 ">
          <div>
            <label className="text-[13px] text-gray-700 font-medium mb-1 block">
              Current Password
            </label>
            <Input.Password
              placeholder="********"
              className="h-[42px] rounded-md border-[#d9d9d9] hover:border-[#bfbfbf] focus:border-[#1677ff]"
            />
          </div>

          <div>
            <label className="text-[13px] text-gray-700 font-medium mb-1 block">
              New Password
            </label>
            <Input.Password
              placeholder="********"
              className="h-[42px] rounded-md border-[#d9d9d9] hover:border-[#bfbfbf] focus:border-[#1677ff]"
            />
          </div>

          <div>
            <label className="text-[13px] text-gray-700 font-medium mb-1 block">
              Confirm new Password
            </label>
            <Input.Password
              placeholder="********"
              className="h-[42px] rounded-md border-[#d9d9d9] hover:border-[#bfbfbf] focus:border-[#1677ff]"
            />
          </div>

          <Button
            type="primary"
            htmlType="submit"
            className="bg-[#d9383a] hover:bg-[#b12d2f] border-none text-white font-medium rounded-md h-[40px] mt-3"
          >
            Update password
          </Button>
        </form>
      </div>
      <EditProfileModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
