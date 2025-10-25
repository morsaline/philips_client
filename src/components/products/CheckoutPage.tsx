"use client";

import { Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import productImg from "@/assets/Products/05D1951D-F93F-4E49-87BC-9987CAF9EAC1 2.jpg";
import bgImage from "@/assets/bgall/ProductCheckout.png";

export default function CheckoutPage() {
  const demoProducts = [
    {
      id: "1",
      title: "Menu",
      description: "A digital agency agency is a company agency",
      price: 150.25,
      quantity: 1,
      image: productImg, // make sure image exists in /public/assets/products/
    },
    {
      id: "2",
      title: "Menu",
      description: "A digital agency agency is a company agency",
      price: 450.25,
      quantity: 1,
      image: productImg,
    },
  ];

  const [products, setProducts] = useState(demoProducts);

  const handleQuantityChange = (id: string, delta: number) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: Math.max(1, p.quantity + delta) } : p
      )
    );
  };

  const handleRemove = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const total = products
    .reduce((sum, p) => sum + p.price * p.quantity, 0)
    .toFixed(2);

  return (
    <section
      className="  overflow-hidden py-14 px-6 md:px-16"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      {/* dotted background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* LEFT SIDE */}
        <div>
          <p className="text-[12px] uppercase text-[#E53935] font-semibold tracking-wide mb-3">
            View Detail | Checkout
          </p>
          <h2 className="text-[22px] font-semibold mb-6">Check Out</h2>

          {/* Cart Items */}
          {products.map((item) => (
            <div className="flex items-center gap-4 w-full p-4 border-b border-gray-400 ">
              {/* Image */}
              <div
                className="bg-white py-10 px-5"
                style={{ boxShadow: "-4px 4px 12px rgba(0, 0, 0, 0.5)" }}
              >
                <div className="relative w-[100px] h-[100px] flex-shrink-0 p-2 rounded-md overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={150} // Fit inside the padding naturally
                    height={150} // Ensure it fills the div's height
                    className="object-cover rounded-md border border-gray-200 w-full h-full"
                  />
                </div>
              </div>

              {/* Info Section (must be flex-1 for full width layout) */}
              <div className="flex-1 w-full">
                <div className="flex justify-between items-center w-full">
                  <h4 className="font-semibold text-[14px] text-gray-800">
                    {item.title}
                  </h4>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-[#E53935] hover:text-red-700"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                <p className="text-[13px] text-gray-500">{item.description}</p>

                {/* ✅ Full width row */}
                <div className="flex justify-between items-center gap-3 mt-1 w-full">
                  {/* Left section (price + quantity) */}
                  <div className="flex items-center gap-3">
                    <div className="text-[16px] font-semibold text-[#E53935]">
                      ${item.price.toFixed(2)}
                    </div>

                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="p-1.5 flex items-center justify-center hover:bg-gray-100"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="px-2 text-[13px] font-semibold flex items-center justify-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.id, +1)}
                        className="p-1.5 flex items-center justify-center hover:bg-gray-100"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>

                  {/* Right section (button aligned to right) */}
                  <button className="flex items-center gap-1 text-[12px] font-medium border border-gray-300 py-1.5 px-3 rounded-sm hover:bg-gray-100 transition">
                    View Details
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="flex gap-2 pt-6 text-[15px] font-semibold">
            <span>Total:</span>
            <span className="text-[#E53935]">${total}</span>
          </div>
        </div>

        {/* RIGHT SIDE (Form) */}
        <div>
          <h2 className="text-[22px] font-semibold mb-6">Fill Info</h2>

          <form className="space-y-5 font-[Poppins]">
            {/* Your Name */}
            <div>
              <label className="text-[13px] text-gray-700 font-medium mb-1 block">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#f1f1f1] placeholder-gray-500 text-black px-4 py-3 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-[13px] text-gray-700 font-medium mb-1 block">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[#f1f1f1] placeholder-gray-500 text-black px-4 py-3 focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-[13px] text-gray-700 font-medium mb-1 block">
                Phone
              </label>
              <input
                type="text"
                placeholder="Phone"
                className="w-full bg-[#f1f1f1] placeholder-gray-500 text-black px-4 py-3 focus:outline-none"
              />
            </div>

            {/* Address */}
            <div>
              <label className="text-[13px] text-gray-700 font-medium mb-1 block">
                Address
              </label>
              <textarea
                placeholder="Address"
                className="w-full bg-[#f1f1f1] placeholder-gray-500 text-black px-4 py-3 focus:outline-none h-24 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#E53935] hover:bg-[#d93332] text-white font-semibold text-[13px] py-2.5 px-6 rounded-sm flex items-center gap-2 transition"
            >
              Submit Now
              <ArrowRight size={14} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
