"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = ({
  className,
}: {
  className?: string;
  isShowBorder?: boolean;
}) => {
  const pathname = usePathname();
  return (
    <div className={cn("flex  gap-6  font-normal ps-3", className)}>
      {/* <Link href={"/"}>
        <div
          className={cn(
            "cursor-pointer  hover:underline text-md text-black hover:text-tomato transition duration-200",
            pathname === "/" && "text-tomato font-semibold"
          )}
        >
          Home
        </div>
      </Link> */}
      <Link href={"/products"}>
        <div
          className={cn(
            "cursor-pointer hover:underline text-md text-black hover:text-tomato transition duration-200",
            pathname === "/services" && "text-tomato font-semibold"
          )}
        >
          Products .
        </div>
      </Link>
      <Link href={"/about"}>
        <div
          className={cn(
            "cursor-pointer hover:underline text-md text-black hover:text-tomato transition duration-200",
            pathname === "/about-us" && "text-tomato font-semibold"
          )}
        >
          About .
        </div>
      </Link>
      <Link href={"/contact"}>
        <div
          className={cn(
            "cursor-pointer hover:underline text-md text-black hover:text-tomato transition duration-200",
            pathname === "/contact-us" && "text-tomato font-semibold"
          )}
        >
          Contact .
        </div>
      </Link>
    </div>
  );
};

export default NavMenu;
