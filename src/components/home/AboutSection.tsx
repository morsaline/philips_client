"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import img1 from "@/assets/about/couple white.png";
import img2 from "@/assets/about/Rectangle 53.png";

export default function AboutSection() {
  return (
    <section className="bg-black text-white  space-y-6 border-t  border-[#2b2b2b]">
      <div className=" ">
        <div className="flex justify-between items-center  py-8 max-w-[90rem] mx-auto">
          <div>
            <p className="text-red-500 uppercase text-sm font-semibold tracking-wide">
              Discover the
            </p>
            <h1 className="text-4xl font-bold mt-2 uppercase">About Us</h1>
          </div>
          <button className="relative hover:bg-gray-200 text-white px-8 py-4 font-medium flex items-center gap-2 border   border-gray-300  group overflow-hidden">
            <span className="relative z-10 ">Explore More</span>
            <span className="relative z-10 text-xl">
              <ArrowRight />
            </span>

            {/* Top border */}
            <span className="absolute top-0 left-0 h-[1px] bg-black w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>

            {/* Right border */}
            <span className="absolute top-0 right-0 w-[1px] bg-black h-0 group-hover:h-full transition-all duration-300 ease-in-out delay-100"></span>

            {/* Bottom border */}
            <span className="absolute bottom-0 right-0 h-[1px] bg-black w-0 group-hover:w-full transition-all duration-300 ease-in-out delay-200"></span>

            {/* Left border */}
            <span className="absolute bottom-0 left-0 w-[1px] bg-black h-0 group-hover:h-full transition-all duration-300 ease-in-out delay-300"></span>
          </button>
        </div>
        {/* ===== Top Section ===== */}
        <div className="border-t border-[#2b2b2b]">
          <div className="max-w-[95rem] mx-auto  grid md:grid-cols-2 gap-10 ">
            {/* Left Image - Top Section */}
            <div className="border-r-2 border-[#2b2b2b] p-3">
              <div className="relative w-full h-[350px] md:h-[420px] overflow-hidden rounded-sm">
                <Image
                  src={img1}
                  alt="About Image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl md:text-[44px] font-bold uppercase leading-snug">
                Discover the Latest Collection of Cups of Love
              </h2>
              <p className="text-gray-400 text-[20px] leading-relaxed">
                A digital agency is a company that leverages digital channels to
                grow their clients&apos; business. A digital agency focuses on
                creative, strategic, and technical development of screen-based
                products.
              </p>

              {/* Explore More Button */}
              <button className="relative bg-[#d9d9d9] text-black px-8 py-3 flex items-center gap-2 font-medium group overflow-hidden border border-transparent shadow-[2px_2px_0_0_#a5a5a5] w-fit mt-4">
                <span className="relative z-10">Explore More</span>
                <span className="relative z-10 text-xl">→</span>

                {/* Hover Border Animation */}
                <span className="absolute top-0 left-0 h-[2px] bg-black w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                <span className="absolute top-0 right-0 w-[2px] bg-black h-0 group-hover:h-full transition-all duration-300 ease-in-out delay-100"></span>
                <span className="absolute bottom-0 right-0 h-[2px] bg-black w-0 group-hover:w-full transition-all duration-300 ease-in-out delay-200"></span>
                <span className="absolute bottom-0 left-0 w-[2px] bg-black h-0 group-hover:h-full transition-all duration-300 ease-in-out delay-300"></span>
              </button>
            </div>
          </div>
        </div>

        {/* ===== Bottom Section ===== */}
        <div className="border-t border-[#2b2b2b]  ">
          <div className="max-w-[95rem] mx-auto flex">
            {" "}
            {/* Left Text */}
            <div className="flex flex-col justify-center space-y-4 border-r p-10 border-[#2b2b2b] w-[70%]">
              <h2 className="text-3xl md:text-[44px] font-bold uppercase leading-snug">
                Discover the Latest Collection of Cups of Love
              </h2>
              <p className="text-gray-400 text-[20px] leading-relaxed">
                A digital agency is a company that leverages digital channels to
                grow their clients&apos; business. A digital agency focuses on
                creative, strategic, and technical development of screen-based
                products.
              </p>

              {/* View More Button */}
              <button className="relative bg-[#d32f2f] text-white px-8 py-3 flex items-center gap-2 font-medium group overflow-hidden border border-transparent shadow-[2px_2px_0_0_#8b1a1a] w-fit mt-4">
                <span className="relative z-10">View More</span>
                <span className="relative z-10 text-xl">→</span>

                {/* Hover Border Animation */}
                <span className="absolute top-0 left-0 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                <span className="absolute top-0 right-0 w-[2px] bg-white h-0 group-hover:h-full transition-all duration-300 ease-in-out delay-100"></span>
                <span className="absolute bottom-0 right-0 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out delay-200"></span>
                <span className="absolute bottom-0 left-0 w-[2px] bg-white h-0 group-hover:h-full transition-all duration-300 ease-in-out delay-300"></span>
              </button>
            </div>
            {/* Right Image */}
            <div className="relative h-[350px] md:max-h-[420px] w-[30%] border-[#2b2b2b] p-3">
              <div className="relative w-full h-full overflow-hidden rounded-sm">
                <Image
                  src={img2}
                  alt="About Image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
