"use client";
import logo from "@/assets/logo/logo.png";
import MyButton from "@/components/ui/MyButton/MyButton";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import NavMenu from "./NavMenu";
import { cn } from "@nextui-org/react";

const ForPc = () => {
  return (
    <div
      className=" bg-transparent"
      style={{
        backgroundImage: `url("/Rectangle 63.png")`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container hidden lg:flex py-3 items-center justify-between ">
        <div className="flex  items-center gap-5 text-base text-black">
          <NavMenu />
        </div>
        <Link href={"/"}>
          <div className="flex items-center gap-2  -ml-4 ">
            <Image
              src={logo}
              alt="Dentistul.ro"
              width={100}
              height={100}
              className="rounded object-cover"
            />
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <Link href="/cart">
            <div className="cursor-pointer text-md text-black hover:text-tomato hover:underline transition duration-200">
              Cart .
            </div>
          </Link>

          <Link href="/login">
            <button className="flex items-center gap-1 text-black hover:text-tomato transition duration-200">
              Signin
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForPc;
