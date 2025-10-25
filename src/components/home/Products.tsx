import { ArrowRight, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";
import productImg from "@/assets/Products/05D1951D-F93F-4E49-87BC-9987CAF9EAC1 2.jpg";

import bgImage from "@/assets/bgall/productBg.png";

function Products() {
  return (
    <div
      className="bg-black text-white"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 py-8">
          <div>
            <p className="text-red-500 text-xs sm:text-sm md:text-base font-semibold tracking-wide">
              OUR PRODUCTS
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mt-1 sm:mt-2">
              THE NEW COLLECTIONS
            </h1>
          </div>

          <button className="relative group overflow-hidden mt-4 sm:mt-0 bg-transparent hover:bg-gray-200 text-white px-5 sm:px-8 py-2 sm:py-3 font-medium flex items-center gap-2 border border-gray-300 transition-all duration-300">
            <span className="relative z-10 text-sm sm:text-base">
              Explore More
            </span>
            <ArrowRight className="relative z-10 text-lg sm:text-xl" />

            {/* Animated borders */}
            <span className="absolute top-0 left-0 h-[1px] w-0 bg-black group-hover:w-full transition-all duration-300 ease-in-out"></span>
            <span className="absolute top-0 right-0 w-[1px] h-0 bg-black group-hover:h-full transition-all duration-300 ease-in-out delay-100"></span>
            <span className="absolute bottom-0 right-0 h-[1px] w-0 bg-black group-hover:w-full transition-all duration-300 ease-in-out delay-200"></span>
            <span className="absolute bottom-0 left-0 w-[1px] h-0 bg-black group-hover:h-full transition-all duration-300 ease-in-out delay-300"></span>
          </button>
        </div>

        {/* Main Product Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 py-12">
          {/* Left - Product Image */}
          <div className="flex-1 w-full md:w-1/2 flex justify-center relative aspect-[4/3]">
            <Image
              src={productImg}
              alt="Product Image"
              fill
              className="rounded-md object-contain"
              priority
            />
          </div>

          {/* Right - Product Details */}
          <div className="flex-1 md:w-1/2 space-y-4 sm:space-y-6 lg:space-y-8">
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[40px] font-bold leading-snug sm:leading-tight mb-2 sm:mb-4">
                DISCOVER THE LATEST COLLECTION OF CUPS OF LOVE
              </h2>
              <p className="text-[#929092] text-sm sm:text-base md:text-lg lg:text-[22px] leading-relaxed max-w-2xl">
                A digital agency is a company that leverages digital channels to
                grow their clients&apos; biggoal. A digital agency is a company
                that leverages digital.
              </p>
            </div>

            {/* Price */}
            <div className="text-yellow-400 font-bold text-xl sm:text-2xl md:text-3xl lg:text-[44px]">
              $25.50
            </div>

            {/* Action Button */}
            <button className="bg-red-500 hover:bg-red-600 transition text-white px-6 sm:px-8 py-2 sm:py-3 flex items-center gap-2 font-semibold text-sm sm:text-base">
              View Details <Plus size={18} className="sm:!w-5 sm:!h-5" />
            </button>

            {/* Product Info */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 pt-3 sm:pt-4">
              <div>
                <p className="text-white text-[10px] sm:text-xs md:text-sm uppercase tracking-wide mb-1 sm:mb-2">
                  Available
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                  <span className="text-white font-semibold text-xs sm:text-sm md:text-base">
                    In Stock
                  </span>
                </div>
              </div>
              <div>
                <p className="text-white text-[10px] sm:text-xs md:text-sm uppercase tracking-wide mb-1 sm:mb-2">
                  Quantity
                </p>
                <span className="text-white font-semibold text-xs sm:text-sm md:text-base">
                  100%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
