// pages/payment.tsx
import Image from "next/image";

export default function PaymentPage() {
  return (
    <div
      className=" text-[#1e1e1e] font-sans"
      style={{
        backgroundImage: `url("/Rectangle 63.png")`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[90rem] mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <div className="text-sm text-red-600 font-medium mb-6">
          VIEW DETAIL | CHECKOUT | PAYMENT
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10   p-6 md:p-10 rounded-md relative overflow-hidden">
          {/* Background silhouette */}
          <div className="absolute inset-0 bg-[url('/silhouette.png')] bg-no-repeat bg-center opacity-5 pointer-events-none z-0" />

          {/* Left Side - Cart */}
          <div className="space-y-6 relative z-10">
            <h2 className="text-xl font-semibold">PAYMENT</h2>

            {/* Cart Item */}
            <div className="flex items-start justify-between border-b pb-4">
              <div className="flex items-center gap-4">
                <Image src="/menu.png" alt="Menu" width={50} height={50} />
                <div>
                  <h4 className="font-semibold text-sm">MENU</h4>
                  <p className="text-xs text-gray-500">
                    A digital agency agency is a company agency
                  </p>
                </div>
              </div>
              <span className="text-red-600 font-bold">$150.25</span>
            </div>

            {/* Cart Item 2 */}
            <div className="flex items-start justify-between border-b pb-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/giftcard.png"
                  alt="Gift Card"
                  width={50}
                  height={50}
                />
                <div>
                  <h4 className="font-semibold text-sm">SPECIAL GIFT CARD</h4>
                  <p className="text-xs text-gray-500">
                    A digital agency agency is a company agency
                  </p>
                </div>
              </div>
              <span className="text-red-600 font-bold">$50.25</span>
            </div>

            {/* Summary */}
            <div className="space-y-2 text-sm font-semibold">
              <div className="flex justify-between">
                <span>SUB TOTAL:</span>
                <span className="text-red-600">$550.50</span>
              </div>
              <div className="flex justify-between">
                <span>SHIPPING FEE:</span>
                <span>$00</span>
              </div>
              <div className="flex justify-between text-base font-bold">
                <span>TOTAL:</span>
                <span className="text-red-600">$550.50</span>
              </div>
            </div>
          </div>

          {/* Right Side - Payment Form */}
          <form className="space-y-5 relative z-10">
            {/* Payment Method */}
            <div>
              <label className="block text-xs font-bold mb-1 uppercase text-gray-700">
                Payment Method
              </label>
              <div className="bg-white border border-gray-300 rounded px-3 py-2 inline-block">
                <Image src="/stripe.png" alt="Stripe" width={60} height={20} />
              </div>
            </div>

            {/* Card Holder */}
            <div>
              <label className="block text-xs font-bold mb-1 uppercase text-gray-700">
                Card Holder Name*
              </label>
              <input
                type="text"
                placeholder="e.g John son"
                className="w-full bg-[#f1f1f1] placeholder-gray-500 text-black px-4 py-3 focus:outline-none"
              />
            </div>

            {/* Card Number */}
            <div>
              <label className="block text-xs font-bold mb-1 uppercase text-gray-700">
                Card Number*
              </label>
              <input
                type="text"
                placeholder="e.g 847 4854 4454"
                className="w-full bg-[#f1f1f1] placeholder-gray-500 text-black px-4 py-3 focus:outline-none"
              />
            </div>

            {/* Expiry & CVC */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-xs font-bold mb-1 uppercase text-gray-700">
                  Expiry
                </label>
                <input
                  type="text"
                  placeholder="30/25"
                  className="w-full bg-[#f1f1f1] placeholder-gray-500 text-black px-4 py-3 focus:outline-none"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-xs font-bold mb-1 uppercase text-gray-700">
                  CVC
                </label>
                <input
                  type="text"
                  placeholder="880"
                  className="w-full bg-[#f1f1f1] placeholder-gray-500 text-black px-4 py-3 focus:outline-none"
                />
              </div>
            </div>

            {/* Country */}
            <div>
              <label className="block text-xs font-bold mb-1 uppercase text-gray-700">
                Country
              </label>
              <select className="w-full bg-[#f1f1f1] placeholder-gray-500 text-black px-4 py-3 focus:outline-none">
                <option>Bangladesh</option>
              </select>
            </div>

            {/* Pay Button */}
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded flex items-center justify-center gap-2 transition"
            >
              Pay Now →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
