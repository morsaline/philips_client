"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Minus, Plus, Trash2 } from "lucide-react";
import bgImage from "@/assets/bgall/ProductCheckout.png";

export default function CartPage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      title: "MENU",
      description: "A digital agency agency is a company agency",
      price: 150.25,
      quantity: 1,
      image: "/menu.png", // replace with your real image
    },
    {
      id: 2,
      title: "SPECIAL GIFT BOARD",
      description: "A digital agency agency is a company agency",
      price: 450.25,
      quantity: 1,
      image: "/gift.png", // replace with your real image
    },
  ]);

  const handleQuantityChange = (id: number, delta: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + delta),
            }
          : item
      )
    );
  };

  const handleRemove = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section
      className="bg-[#fffaf7] min-h-screen text-black py-12"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 px-4">
        {/* CART ITEMS */}
        <div className="flex-1">
          <h2 className="text-[#E53935] text-sm font-semibold mb-2">
            YOUR CHOSEN
          </h2>
          <h1 className="text-2xl font-bold mb-6">CARTS</h1>

          {cart.map((item) => (
            <div className="flex items-center gap-4 w-full p-4 border-b border-gray-400 ">
              {/* Image */}
              <div
                className="bg-white py-10 px-5"
                style={{ boxShadow: "-4px 4px 12px rgba(0, 0, 0, 0.5)" }}
                key={item.id}
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
        </div>

        {/* SUMMARY */}
        <div className="w-full md:w-[320px] border-l border-gray-300 pl-6">
          <h2 className="text-xl font-semibold mb-4">SUMMARY</h2>

          <div className="flex justify-between text-gray-600 mb-3">
            <span>SUB TOTAL:</span>
            <span className="text-[#E53935] font-semibold">
              ${subTotal.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between text-gray-600 mb-3">
            <span>SHIPPING FEE:</span>
            <span>$0</span>
          </div>
          <hr className="border-gray-300 mb-4" />
          <div className="flex justify-between text-lg font-semibold mb-6">
            <span>TOTAL:</span>
            <span className="text-[#E53935]">${subTotal.toFixed(2)}</span>
          </div>

          <button
            onClick={() => alert("Proceeding to payment...")}
            className="bg-[#E53935] text-white w-full py-3 font-medium hover:bg-red-600 transition rounded-sm"
          >
            Pay Now →
          </button>
        </div>
      </div>
    </section>
  );
}
