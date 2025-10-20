"use client";

import { ArrowRight } from "lucide-react";
import React from "react";

export default function ContactForm() {
  return (
    <section
      className=" text-black py-16 px-6 md:px-12 lg:px-20"
      style={{
        backgroundImage: `url("/Rectangle 63.png")`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* subtle dotted background */}
      <div className="relative  before:content-[''] before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%224%22 height=%224%22><circle cx=%222%22 cy=%222%22 r=%220.4%22 fill=%22%23d6d3d1%22/></svg>')] before:opacity-40 before:pointer-events-none">
        <div className="relative z-10 max-w-[90rem] mx-auto">
          {/* Heading */}
          <div className="mb-10">
            <p className="text-[#ff3b3b] uppercase text-sm font-semibold tracking-wide">
              Let’s Connect
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold mt-2">
              Get In Touch
            </h2>
          </div>

          {/* Form layout */}
          <form className="">
            <div className="flex flex-col md:flex-row gap-6 justify-between">
              {" "}
              {/* Left side inputs */}
              <div className="flex-1 space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-[#f1f1f1] placeholder-gray-500 text-black px-4 py-3 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-[#f1f1f1] placeholder-gray-500 text-black px-4 py-3 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full bg-[#f1f1f1] placeholder-gray-500 text-black px-4 py-3 focus:outline-none"
                />
              </div>
              {/* Right side textarea */}
              <div className="flex-1">
                <textarea
                  rows={8}
                  placeholder="Message"
                  className="w-full h-full bg-[#f1f1f1] placeholder-gray-500 text-black px-4 py-3 resize-none focus:outline-none"
                />
              </div>
            </div>
            {/* Submit button */}
            <button
              type="submit"
              className="bg-[#c72a1d] hover:bg-[#a32217] text-white flex items-center justify-center gap-2 px-6 py-3 mt-2 text-sm font-medium transition-all duration-300"
            >
              Submit Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
