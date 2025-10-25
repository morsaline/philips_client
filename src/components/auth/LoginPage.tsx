"use client";

import { Input } from "antd";
import Link from "next/link";
import logo from "@/assets/logo/logo.png";
import { FcGoogle } from "react-icons/fc";
import bgImage from "@/assets/bgall/loginBg.png";
import Image from "next/image";
// import "antd/dist/reset.css";

export default function LoginPage() {
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
        <div className="w-full max-w-sm bg-transparent p-6 rounded-md">
          <h1 className="text-2xl font-semibold mb-2">Login in to Exclusive</h1>
          <p className="text-gray-500 text-sm mb-6">Enter your details below</p>

          {/* Form */}
          <form className="space-y-6">
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
            <div className="flex items-center justify-between gap-5">
              <button
                type="submit"
                className="bg-[#E53935] text-white font-medium px-8 py-2.5 rounded-sm hover:bg-red-600 transition"
              >
                Login
              </button>
              <Link href={"/forget-password"}>
                <div className="text-[#E53935]">Forget Password?</div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
