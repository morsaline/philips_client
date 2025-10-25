"use client";

import { Input } from "antd";
import bgImage from "@/assets/bgall/loginBg.png";
import logo from "@/assets/logo/logo.png";
import Link from "next/link";
import Image from "next/image";
// import "antd/dist/reset.css";

export default function ResetPassword() {
  return (
    <section
      className=""
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center pt-14">
        <div className="flex items-center justify-center gap-2   ">
          <Image
            src={logo}
            alt="cupsoflove"
            width={150}
            height={150}
            className="rounded object-cover"
          />
        </div>
      </div>
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        {" "}
        <div className="w-full max-w-sm bg-transparent p-6 rounded-md">
          <h1 className="text-2xl font-semibold mb-2 text-center">
            Set New Password
          </h1>
          <p className="text-gray-500 text-sm mb-6 text-center">
            Enter a defferent password with the previous!
          </p>

          {/* Form */}
          <form className="space-y-6">
            <div className="relative border-b border-gray-300 focus-within:border-[#E53935] transition">
              <Input.Password
                placeholder="New Password"
                variant="borderless"
                className="!bg-transparent !shadow-none !outline-none !text-sm placeholder-gray-400 focus:!ring-0"
              />
            </div>
            <div className="relative border-b border-gray-300 focus-within:border-[#E53935] transition">
              <Input.Password
                placeholder="Confirm Password"
                variant="borderless"
                className="!bg-transparent !shadow-none !outline-none !text-sm placeholder-gray-400 focus:!ring-0"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-[#E53935] text-white font-medium px-8 py-2.5 rounded-sm hover:bg-red-600 transition"
              >
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
