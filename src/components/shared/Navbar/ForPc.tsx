"use client";
import logo from "@/assets/logo/logo.png";


import Image from "next/image";
import Link from "next/link";

import NavMenu from "./NavMenu";

const ForPc = () => {
  return (
    <div
      className=" bg-transparent bg-cover bg-center bg-no-repeat border-b"
      style={{
        backgroundImage: `url("/Rectangle 63.png")`,
      }}
    >
      <div className=" max-w-[90rem] mx-auto hidden lg:flex py-3 items-center justify-between ">
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
