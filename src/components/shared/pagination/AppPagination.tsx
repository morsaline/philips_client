"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

type AppPaginationProps = {
  total?: number;
  limit?: number;
  page?: number;
  onChange?: (page: number) => void;
  color?: "cyan" | "red" | "green";
};

const AppPagination = ({
  total = 0,
  limit = 10,
  page = 1,
  onChange = () => {},
  color = "red", // you can override color (cyan, blue, green, etc.)
}: AppPaginationProps) => {
  const totalPages = Math.ceil(total / limit);
  if (totalPages <= 1) return null;

  // generate pages with ellipsis
  const generatePages = () => {
    const pages = [];
    const siblingCount = 1;
    const left = Math.max(page - siblingCount, 1);
    const right = Math.min(page + siblingCount, totalPages);

    if (left > 2) pages.push(1, "...");
    else for (let i = 1; i < left; i++) pages.push(i);

    for (let i = left; i <= right; i++) pages.push(i);

    if (right < totalPages - 1) pages.push("...", totalPages);
    else for (let i = right + 1; i <= totalPages; i++) pages.push(i);

    return pages;
  };

  const pages = generatePages();

  // color themes
  const baseColor = {
    cyan: {
      active: "bg-[#06B6D4] text-white",
      hover: "hover:bg-gray-100 hover:text-[#06B6D4]",
      border: "border-[#06B6D4]/30",
    },
    red: {
      active: "bg-red-600 text-white",
      hover: "hover:bg-red-100 hover:text-white",
      border: "border-red-300",
    },
    green: {
      active: "bg-green-600 text-white",
      hover: "hover:bg-gray-100 hover:text-green-600",
      border: "border-green-300",
    },
  }[color];

  const handlePageChange = (p: number | string) => {
    if (p !== "..." && p !== page) onChange(p as number);
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-6">
      {/* Prev Button */}
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className={`p-2 rounded-md  transition-all ${
          page === 1
            ? "text-gray-300 border-gray-200 cursor-not-allowed"
            : `${baseColor.border} text-gray-600 hover:bg-gray-100`
        }`}
      >
        <ChevronLeft size={18} />
      </button>

      {/* Page Numbers */}
      {pages.map((p, i) =>
        p === "..." ? (
          <span key={i} className="px-2 text-gray-400 select-none">
            ...
          </span>
        ) : (
          <button
            key={i}
            onClick={() => handlePageChange(p)}
            className={`w-8 h-8 text-sm font-medium rounded-md border transition-all 
              ${
                p === page
                  ? `${baseColor?.active} ${baseColor?.border}`
                  : `bg-white text-gray-700 ${baseColor?.hover} ${baseColor?.border}`
              }`}
          >
            {p}
          </button>
        )
      )}

      {/* Next Button */}
      <button
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        className={`p-2 rounded-md  transition-all ${
          page === totalPages
            ? "text-gray-300 border-gray-200 cursor-not-allowed"
            : `${baseColor?.border} text-gray-600 hover:bg-gray-100`
        }`}
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default AppPagination;
