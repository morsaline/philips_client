"use client";

import {
  FacebookFilled,
  InstagramFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0E0E0E] text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
        {/* Quick Links */}
        <div>
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
        <div>
          <h3 className="text-sm font-semibold mb-4">CONTACT</h3>
          <p className="text-gray-300 text-sm mb-1">
            Philip@cupsoflovdiboard.com
          </p>
          <p className="text-gray-300 text-sm">+487 5458 484</p>
        </div>

        {/* Mail For Customer Board */}
        <div className="relative">
          <h3 className="text-sm font-semibold mb-4">
            MAIL FOR CUSTOMER BOARD
          </h3>
          <button className="flex items-center gap-2 bg-[#E53935] text-white font-semibold text-sm py-2 px-6 rounded-full hover:bg-[#ff4b48] transition">
            Send Mail <Mail className="w-4 h-4" />
          </button>

          {/* Decorative Wine Glass Illustration (optional SVG or background image) */}
          <div className="absolute -bottom-6 left-8 opacity-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="80"
              fill="none"
              stroke="white"
              strokeWidth="1"
              viewBox="0 0 24 24"
            >
              <path d="M8 2h8v6a4 4 0 0 1-8 0V2z" />
              <path d="M12 14v7" />
              <path d="M8 22h8" />
            </svg>
          </div>
        </div>

        {/* Download App */}
        <div>
          <h3 className="text-sm font-semibold mb-4">DOWNLOAD APP</h3>
          <p className="text-gray-300 text-sm mb-3">
            You can find us on your mobile
          </p>

          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/qr.png" // replace with your QR image path
              alt="QR Code"
              width={60}
              height={60}
              className="rounded-md"
            />
            <div className="flex flex-col gap-2">
              <Image
                src="/google-play.png"
                alt="Google Play"
                width={100}
                height={30}
              />
              <Image
                src="/app-store.png"
                alt="App Store"
                width={100}
                height={30}
              />
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-[#E53935] transition">
              <FacebookFilled className="w-4 h-4" />
            </Link>
            <Link href="#" className="hover:text-[#E53935] transition">
              <InstagramFilled className="w-4 h-4" />
            </Link>
            <Link href="#" className="hover:text-[#E53935] transition">
              <YoutubeFilled className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-6 text-xs text-gray-400">
        <p>© Copyright 2024. Redwan Latif. All rights reserved.</p>
        <Link href="#" className="hover:text-white transition">
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
}
