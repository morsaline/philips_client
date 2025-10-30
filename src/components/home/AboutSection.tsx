"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import img1 from "@/assets/about/couple white.png";
import img2 from "@/assets/about/Rectangle 53.png";
import bgImage from "@/assets/bgall/aboutusBg.png";

export default function AboutSection() {
  return (
    <section
      className="bg-black text-white border-t border-[#2b2b2b]"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      {/* ===== Top Section ===== */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8  space-y-10">
        {/* Header */}
        <div className="flex  justify-between items-start sm:items-center gap-4 sm:gap-6 py-8 px-8">
          <div>
            <p className="text-red-500 text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide uppercase">
              Discover the
            </p>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-1 sm:mt-2 text-white uppercase">
              About us
            </h1>
          </div>

          <button className="relative group overflow-hidden mt-4 sm:mt-0 bg-transparent hover:bg-gray-200 text-white hover:text-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 font-medium flex items-center gap-2 border border-gray-300 transition-all duration-300 rounded-md">
            <span className="relative z-10 text-xs sm:text-sm md:text-base">
              Explore More
            </span>
            <ArrowRight className="relative z-10 text-sm sm:text-base md:text-lg" />

            {/* Animated borders */}
            <span className="absolute top-0 left-0 h-[1px] w-0 bg-black group-hover:w-full transition-all duration-300 ease-in-out"></span>
            <span className="absolute top-0 right-0 w-[1px] h-0 bg-black group-hover:h-full transition-all duration-300 ease-in-out delay-100"></span>
            <span className="absolute bottom-0 right-0 h-[1px] w-0 bg-black group-hover:w-full transition-all duration-300 ease-in-out delay-200"></span>
            <span className="absolute bottom-0 left-0 w-[1px] h-0 bg-black group-hover:h-full transition-all duration-300 ease-in-out delay-300"></span>
          </button>
        </div>

        {/* ===== Upper Content ===== */}
        <div className="border-t border-[#2b2b2b] pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image with aspect ratio */}
            <div className="p-2 md:p-4">
              <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[16/10] rounded-md overflow-hidden">
                <Image
                  src={img1}
                  alt="About Image"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center gap-4">
              <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold uppercase leading-snug">
                Discover the Latest Collection of Cups of Love
              </h2>
              <p className="text-gray-400 text-base sm:text-lg md:text-[20px] leading-relaxed">
                A digital agency is a company that leverages digital channels to
                grow their clients&apos; business. A digital agency focuses on
                creative, strategic, and technical development of screen-based
                products.
              </p>

              <button className="relative bg-[#d9d9d9] text-black px-6 sm:px-8 py-3 flex items-center gap-2 font-medium group overflow-hidden border border-transparent shadow-[2px_2px_0_0_#a5a5a5] w-fit mt-4">
                <span className="relative z-10">Explore More</span>
                <span className="relative z-10 text-xl">→</span>
                <span className="absolute top-0 left-0 h-[2px] bg-black w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                <span className="absolute top-0 right-0 w-[2px] bg-black h-0 group-hover:h-full transition-all duration-300 ease-in-out delay-100"></span>
                <span className="absolute bottom-0 right-0 h-[2px] bg-black w-0 group-hover:w-full transition-all duration-300 ease-in-out delay-200"></span>
                <span className="absolute bottom-0 left-0 w-[2px] bg-black h-0 group-hover:h-full transition-all duration-300 ease-in-out delay-300"></span>
              </button>
            </div>
          </div>
        </div>

        {/* ===== Bottom Section ===== */}
        <div className="border-t border-[#2b2b2b] ">
          <div className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-0">
            {/* Left Text */}
            <div className="flex flex-col justify-center gap-4 border-b lg:border-b-0 lg:border-r border-[#2b2b2b] p-6 lg:p-10 w-full lg:w-[70%]">
              <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold uppercase leading-snug">
                Discover the Latest Collection of Cups of Love
              </h2>
              <p className="text-gray-400 text-base sm:text-lg md:text-[20px] leading-relaxed">
                A digital agency is a company that leverages digital channels to
                grow their clients&apos; business. A digital agency focuses on
                creative, strategic, and technical development of screen-based
                products.
              </p>

              <button className="relative bg-[#d32f2f] text-white px-6 sm:px-8 py-3 flex items-center gap-2 font-medium group overflow-hidden border border-transparent shadow-[2px_2px_0_0_#8b1a1a] w-fit mt-4">
                <span className="relative z-10">View More</span>
                <span className="relative z-10 text-xl">→</span>
                <span className="absolute top-0 left-0 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                <span className="absolute top-0 right-0 w-[2px] bg-white h-0 group-hover:h-full transition-all duration-300 ease-in-out delay-100"></span>
                <span className="absolute bottom-0 right-0 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300 ease-in-out delay-200"></span>
                <span className="absolute bottom-0 left-0 w-[2px] bg-white h-0 group-hover:h-full transition-all duration-300 ease-in-out delay-300"></span>
              </button>
            </div>

            {/* Right Image with aspect ratio */}
            <div className="relative w-full lg:w-[30%] p-2 md:p-4">
              <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[9/12] rounded-md overflow-hidden">
                <Image
                  src={img2}
                  alt="About Image"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
