"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import userImg from "@/assets/logo/Image BOX.png";
import Marquee from "react-fast-marquee"; // replace with your actual image path

export default function TestimonialSection() {
  return (
    <section
      className=" "
      style={{
        backgroundImage: `url("/Rectangle 63.png")`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Marquee>
        <p className="text-[44px] uppercase mt-3 ">
          {" "}
          Every Gift Will tells Your story in{" "}
          <span className="text-[#d94e3b]">cups of love</span> story
        </p>
      </Marquee>
      <div className="   border-t border-[#e6e6e6]">
        <div className="flex  gap-12 max-w-[90rem] mx-auto">
          {" "}
          {/* Left Side */}
          <div className="p-5 ">
            <p className="text-[#d94e3b] text-sm tracking-widest font-medium mb-2">
              DISCOVER WHAT
            </p>
            <h2 className="text-gray-800 text-2xl font-semibold mb-8">
              OUR CUSTOMER SAYS
            </h2>

            <div className="space-y-4">
              {/* Rating */}
              <div className="flex items-center gap-1 text-[#d94e3b]">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#d94e3b]" />
                ))}
                <Star className="w-5 h-5 text-gray-300" />
              </div>

              {/* Content */}
              <p className="text-gray-800 leading-relaxed text-lg font-medium">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised word.
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={userImg}
                    alt="User"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-[#d94e3b] font-semibold leading-tight">
                    Jennifer Park
                  </p>
                  <p className="text-gray-400 text-sm">VP HR, Innovate Now</p>
                </div>
                <p className="text-[#d94e3b] text-3xl ml-auto stroke-inherit font-bold">
                  ”
                </p>
              </div>

              <div className="w-8 h-[2px] bg-[#d94e3b] mt-4"></div>
            </div>
          </div>
          {/* Right Side */}
          <div className="space-y-8 border-l border-[#e6e6e6] pl-10 py-5">
            {[1, 2].map((_, i) => (
              <div key={i} className="space-y-3">
                <div className="flex items-center gap-1 text-[#d94e3b]">
                  {[...Array(4)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#d94e3b]" />
                  ))}
                  <Star className="w-4 h-4 text-gray-300" />
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised word
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={userImg}
                      alt="User"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[#d94e3b] text-sm font-semibold leading-tight">
                      Jennifer Park
                    </p>
                    <p className="text-gray-400 text-xs">VP HR, Innovate Now</p>
                  </div>
                  <p className="text-[#d94e3b] text-2xl ml-auto">”</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
