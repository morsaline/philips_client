"use client";

import {
  FacebookFilled,
  InstagramFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import bgImage from "@/assets/bgall/FooterBg.png";
import qrCoode from "@/assets/bgall/Qr Code.png";
import googlePlayStore from "@/assets/bgall/GooglePlay.png";
import applePlayStore from "@/assets/bgall/AppStore.png";

export default function Footer() {
  return (
    <footer
      className="bg-[#0E0E0E] text-white py-12 px-4 sm:px-6 lg:px-16"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      {/* Top Section */}
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
        {/* Quick Links */}
        <div className="flex flex-col items-center sm:items-center lg:items-start text-center sm:text-center lg:text-left">
          <h3 className="text-sm font-semibold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-white transition">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center sm:items-center lg:items-start text-center sm:text-center lg:text-left">
          <h3 className="text-sm font-semibold mb-4">CONTACT</h3>
          <p className="text-gray-300 text-sm mb-1">
            Philip@cupsoflovdiboard.com
          </p>
          <p className="text-gray-300 text-sm">+487 5458 484</p>
        </div>

        {/* Mail For Customer Board */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-sm font-semibold mb-4">
            MAIL FOR CUSTOMER BOARD
          </h3>
          <button className="flex items-center gap-2 bg-[#E53935] text-white font-semibold text-sm py-2 px-6 rounded-full hover:bg-[#ff4b48] transition mb-6">
            Send Mail <Mail className="w-4 h-4" />
          </button>
        </div>

        {/* Download App */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-sm font-semibold mb-4">DOWNLOAD APP</h3>
          <p className="text-gray-300 text-sm mb-3">
            You can find us on your mobile
          </p>

          <div className="flex items-center gap-3 mb-4 justify-center">
            <Image
              src={qrCoode}
              alt="QR Code"
              width={60}
              height={60}
              className="rounded-md"
            />
            <div className="flex flex-col gap-2">
              <Image
                src={googlePlayStore}
                alt="Google Play"
                width={100}
                height={30}
              />
              <Image
                src={applePlayStore}
                alt="App Store"
                width={100}
                height={30}
              />
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 justify-center ">
            <Link href="#" className="hover:text-[#E53935] transition">
              <FacebookFilled className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
            <Link href="#" className="hover:text-[#E53935] transition">
              <InstagramFilled className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
            <Link href="#" className="hover:text-[#E53935] transition">
              <YoutubeFilled className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center pt-6 text-xs sm:text-sm text-gray-400 gap-2 sm:gap-0">
        <p>© Copyright 2024. Redwan Latif. All rights reserved.</p>
        <Link href="#" className="hover:text-white transition">
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
}
