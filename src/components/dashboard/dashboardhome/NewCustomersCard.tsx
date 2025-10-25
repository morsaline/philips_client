"use client";

import Image from "next/image";
import Link from "next/link";

const customers = [
  {
    id: 1,
    name: "Shakil Ahmed",
    email: "shakil@gmail.com",
    orders: 2,
    amount: "$300",
    image: "/images/customer1.jpg",
  },
  {
    id: 2,
    name: "Shakil Ahmed",
    email: "shakil@gmail.com",
    orders: 2,
    amount: "$300",
    image: "/images/customer2.jpg",
  },
  {
    id: 3,
    name: "Shakil Ahmed",
    email: "shakil@gmail.com",
    orders: 2,
    amount: "$300",
    image: "/images/customer3.jpg",
  },
  {
    id: 4,
    name: "Shakil Ahmed",
    email: "shakil@gmail.com",
    orders: 2,
    amount: "$300",
    image: "/images/customer4.jpg",
  },
  {
    id: 5,
    name: "Shakil Ahmed",
    email: "shakil@gmail.com",
    orders: 2,
    amount: "$300",
    image: "/images/customer5.jpg",
  },
];

export default function NewCustomersCard() {
  return (
    <div className=" bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex flex-col">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-900 mb-3">
        New Customers
      </h2>

      <hr className="border-dashed border-gray-300 mb-4" />

      {/* Customer List */}
      <div className="flex-1 space-y-3 overflow-y-auto">
        {customers.map((customer) => (
          <div key={customer.id} className="flex items-center justify-between">
            {/* Left section */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={customer.image}
                  alt={customer.name}
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-800">
                  {customer.name}
                </h3>
                <p className="text-xs text-gray-500">{customer.email}</p>
              </div>
            </div>

            {/* Right section */}
            <div className="flex items-center gap-6">
              <p className="text-sm text-gray-600">{customer.orders} Order</p>
              <p className="text-sm font-medium text-gray-800">
                {customer.amount}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer link */}
      <div className="flex justify-end mt-4">
        <Link
          href="#"
          className="text-red-500 text-sm font-medium hover:underline"
        >
          See details
        </Link>
      </div>
    </div>
  );
}
