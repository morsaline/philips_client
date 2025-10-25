"use client";

import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Search } from "lucide-react";
import productImg from "@/assets/Products/productImg.png";
import { StaticImageData } from "next/image";
import AppPagination from "../shared/pagination/AppPagination";

interface Product {
  id: number;
  imageSrc: string | StaticImageData;
  title: string;
  description: string;
  price: string;
}

const productsData: Product[] = [
  {
    id: 1,
    imageSrc: productImg,
    title: "Discover the Latest Collection of Cups of Love",
    description:
      "A digital agency is a company that leverages digital channels to grow their client’s budget.",
    price: "25.50",
  },
  {
    id: 2,
    imageSrc: productImg,
    title: "Discover the Latest Collection of Cups of Love",
    description:
      "A digital agency is a company that leverages digital channels to grow their client’s budget.",
    price: "25.50",
  },
  {
    id: 3,
    imageSrc: productImg,
    title: "Discover the Latest Collection of Cups of Love",
    description:
      "A digital agency is a company that leverages digital channels to grow their client’s budget.",
    price: "25.50",
  },
  {
    id: 4,
    imageSrc: productImg,
    title: "Elegant Porcelain Mug Set",
    description: "Classic white porcelain mugs for every occasion.",
    price: "35.00",
  },
  {
    id: 5,
    imageSrc: productImg,
    title: "Modern Glass Cup Design",
    description: "Stylish glass cups with a sleek look.",
    price: "18.00",
  },
  {
    id: 6,
    imageSrc: productImg,
    title: "Handmade Ceramic Tea Cup",
    description: "Crafted with love for your tea moments.",
    price: "22.00",
  },
];

const ProductsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const limit = 3; // products per page

  // 🔍 Filter products based on search
  const filteredProducts = productsData.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 🧮 Pagination logic
  const total = filteredProducts.length;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <div
      className="min-h-screen text-black px-4 sm:px-8 py-10"
      style={{
        backgroundImage: `url("/Rectangle 63.png")`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[90rem] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-lg text-red-500 font-semibold uppercase">
              New Latest
            </h1>
            <p className="text-3xl text-black uppercase">All Products</p>
          </div>

          {/* Search Bar */}
          <div className="mt-4 md:mt-0 relative flex">
            <input
              type="text"
              placeholder="Search Product"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setPage(1); // reset page on search
              }}
              className="bg-gray-800 text-white placeholder-gray-400 py-2 px-4 w-64 focus:outline-none"
            />
            <button className="text-white text-sm bg-[#c83734] flex items-center gap-1 p-2">
              <Search size={16} /> <span>Search Now</span>
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              imageSrc={product.imageSrc}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>

        {/* Pagination */}
        <AppPagination
          total={total}
          limit={limit}
          page={page}
          onChange={(p) => setPage(p)}
          color="red"
        />
      </div>
    </div>
  );
};

export default ProductsPage;
