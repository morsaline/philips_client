import { ArrowRight, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";
import productImg from "@/assets/Products/05D1951D-F93F-4E49-87BC-9987CAF9EAC1 2.jpg";

function Products() {
  return (
    <div className=" bg-black  text-white">
      <div className="max-w-[90rem] mx-auto">
        {" "}
        {/* Header Navigation */}
        <div className="flex justify-between items-center py-8">
          <div>
            <p className="text-red-500 text-sm font-semibold tracking-wide">
              OUR PRODUCTS
            </p>
            <h1 className="text-4xl font-bold mt-2">THE NEW COLLECTIONS</h1>
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
        {/* Main Product Section */}
        <div className="flex items-center justify-between py-16 gap-16">
          {/* Left - Product Image */}
          <div className="flex-1 flex justify-center relative w-full aspect-[4/3]">
            <Image
              src={productImg}
              alt="Hero Banner"
              fill
              className="rounded-md object-contain"
              priority
            />
          </div>

          {/* Right - Product Details */}
          <div className="flex-1 space-y-6">
            <div>
              <h2 className="text-[44px] font-bold leading-tight mb-4">
                DISCOVER THE LATEST
                <br />
                COLLECTION OF CUPS OF LOVE
              </h2>
              <p className="text-[#929092] text-[22px] leading-relaxed max-w-2xl">
                A digital agency is a company that leverages digital channels to
                grow their clients&apos; biggoal A digital agency is a company
                that leverages digital
              </p>
            </div>

            {/* Price */}
            <div className="text-[44px] font-bold text-yellow-400">$25.50</div>

            {/* Action Button */}
            <button className="bg-red-500 hover:bg-red-600 transition text-white px-8 py-3 flex items-center gap-2 font-semibold">
              View Details <Plus size={20} />
            </button>

            {/* Product Info */}
            <div className="flex gap-12 pt-4">
              <div>
                <p className="text-white text-xs uppercase tracking-wide mb-2">
                  Available
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-white font-semibold">In Stock</span>
                </div>
              </div>
              <div>
                <p className="text-white text-xs uppercase tracking-wide mb-2">
                  Quantity
                </p>
                <span className="text-white font-semibold">100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
