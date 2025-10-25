"use client";

import { Input } from "antd";
import { FcGoogle } from "react-icons/fc";
import "antd/dist/reset.css";
import Link from "next/link";
import bgImage from "@/assets/bgall/loginBg.png";
import logo from "@/assets/logo/logo.png";
import Image from "next/image";

export default function RegisterPage() {
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
          <h1 className="text-2xl font-semibold mb-2">Create an account</h1>
          <p className="text-gray-500 text-sm mb-6">Enter your details below</p>

          {/* Form */}
          <form className="space-y-6">
            <div className="relative border-b border-gray-300 focus-within:border-[#E53935] transition">
              <Input
                placeholder="Name"
                variant="borderless"
                className="!bg-transparent !shadow-none !outline-none !text-sm placeholder-gray-400 focus:!ring-0"
              />
            </div>

            <div className="relative border-b border-gray-300 focus-within:border-[#E53935] transition">
              <Input
                placeholder="Email or Phone Number"
                variant="borderless"
                className="!bg-transparent !shadow-none !outline-none !text-sm placeholder-gray-400 focus:!ring-0"
              />
            </div>

            <div className="relative border-b border-gray-300 focus-within:border-[#E53935] transition">
              <Input.Password
                placeholder="Password"
                variant="borderless"
                className="!bg-transparent !shadow-none !outline-none !text-sm placeholder-gray-400 focus:!ring-0"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#E53935] text-white font-medium py-2.5 rounded-sm hover:bg-red-600 transition"
            >
              Create Account
            </button>
          </form>

          {/* Google Button */}
          <button className="w-full border border-gray-400 mt-4 py-2.5 flex items-center justify-center gap-2 rounded-sm hover:bg-gray-50 transition">
            <FcGoogle size={20} />
            <span className="text-sm">Sign up with Google</span>
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 mt-5">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-black font-medium hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
