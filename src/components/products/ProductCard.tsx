import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { FaShopify } from "react-icons/fa";

interface ProductCardProps {
  imageSrc: string | StaticImageData;
  title: string;
  description: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  title,
  description,
  price,
}) => {
  return (
    <div className="bg-black text-white rounded-md md:p-5  p-3 shadow-md flex flex-col h-full">
      {/* Product Image */}
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover rounded-md"
          sizes="(max-width: 768px) 100vw, 400px"
          priority
        />
      </div>

      {/* Title and Price */}
      <div className="flex justify-between items-start mb-2 mt-4 flex-grow">
        <div className="w-[80%]">
          <h3 className="text-lg font-semibold leading-snug">{title}</h3>

          {/* ✅ Fixed height + clamp (keeps consistent height always) */}
          <p className="text-sm text-gray-400 mb-4 leading-snug line-clamp-3 min-h-[3.8rem]">
            {description}
          </p>
        </div>
        <span className="text-yellow-400 font-semibold text-lg">${price}</span>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center gap-16 mt-auto">
        {/* View Details Button */}
        <Link href={""}>
          {" "}
          <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded flex justify-center items-center gap-2 transition-all">
            View Details <span className="text-xl">+</span>
          </button>
        </Link>

        {/* Footer: Availability and Quality */}
        <div className="flex justify-between items-center gap-5 text-sm">
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
      </div>
    </div>
  );
};

export default ProductCard;
