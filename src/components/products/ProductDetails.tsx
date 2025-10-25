"use client";

import { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import productImg from "@/assets/Products/productImg.png";
import bgImage from "@/assets/bgall/ProductCheckout.png";
import Link from "next/link";
import { FaShopify } from "react-icons/fa";

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);

  const images = [
    { original: productImg.src, thumbnail: productImg.src },
    { original: productImg.src, thumbnail: productImg.src },
    { original: productImg.src, thumbnail: productImg.src },
    { original: productImg.src, thumbnail: productImg.src },
  ];

  return (
    <section
      className="bg-[#fffaf6] relative overflow-hidden py-12 px-4 md:px-16"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 ">
        {/* LEFT: Product Image Gallery */}
        <div className="relative">
          <Link
            href="#"
            className="absolute -top-6 left-0 text-[20px]  uppercase tracking-wide text-red-500 font-semibold"
          >
            View Details
          </Link>
          <div className="overflow-hidden rounded-md border border-gray-200  mt-3">
            <ImageGallery
              items={images}
              showPlayButton={false}
              showFullscreenButton={false}
              showNav={false} // ✅ Remove left/right icons
              thumbnailPosition="bottom"
            />
          </div>
        </div>

        {/* RIGHT: Product Info */}
        <div className="space-y-6 py-20">
          <h2 className="text-[26px] font-semibold text-[#000000] leading-snug">
            NEW SPECIAL EXCLUSIVE GIFT BOX
          </h2>

          <p className="text-[14px] text-[#555] leading-relaxed max-w-[90%]">
            A digital agency is a company that leverages digital channels to
            grow their clients’ brands. A digital agency is a company that
            leverages digital channels to grow their clients’ brands. A digital
            agency is a company that leverages digital channels.
          </p>

          <div className="flex justify-between items-center gap-5 text-sm max-w-10">
            <div className="flex flex-col justify-center items-center">
              Availability
              <p>
                <FaShopify className="text-green-500 text-center text-lg" />
              </p>
            </div>
            <div>
              Quality <p className="font-semibold">100%</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            {/* Price Section */}
            <div className="flex items-baseline">
              <p className="text-[22px] font-bold text-[#E53935] leading-none">
                $25.50
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden h-[38px]">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-9 h-full flex items-center justify-center hover:bg-gray-100 transition"
              >
                <Minus size={14} />
              </button>
              <span className="px-3 text-[14px] font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-9 h-full flex items-center justify-center hover:bg-gray-100 transition"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* Quantity & Buttons */}
          <div className="flex items-center gap-4">
            <div className="flex gap-3">
              <Link href={"/checkout"}>
                <button className="bg-[#E53935] hover:bg-[#d93332] text-white font-semibold text-[14px] py-2.5 px-6 rounded-[4px] transition">
                  Buy Now
                </button>
              </Link>

              <button className="flex items-center gap-2 border border-gray-300 py-2.5 px-6 rounded-[4px] hover:bg-gray-100 transition text-[14px] font-semibold">
                <ShoppingCart size={16} />
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
