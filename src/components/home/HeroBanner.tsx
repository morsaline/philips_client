"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import bannerImg from "@/assets/banner/Rectangle 26.png";
import frame1 from "@/assets/banner/Frame 2147226421.png";
import frame2 from "@/assets/banner/Frame 2147226423.png";
import Link from "next/link";

export default function HeroBanner() {
  const images = [bannerImg, bannerImg, bannerImg];

  return (
    <div
      className=""
      style={{
        backgroundImage: `url("/Rectangle 63.png")`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="">
        {/* Title */}
        <div className="mb-12 max-w-[90rem] mx-auto">
          <h1 className="text-3xl md:text-[80px] font-semibold leading-snug">
            &quot;THE LOVE ASSISTANT THAT KEEP{" "}
            <span className="text-[#e63946] font-bold">
              LOVE CONSISTENT&quot;
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 border-t">
          <div className="max-w-[90rem] mx-auto">
            {/* Flex container: column on mobile, row on desktop */}
            <div className="flex flex-col md:flex-row">
              {/* Left Content */}
              <div className="w-full md:w-[70%] py-5 md:border-r-2">
                <div className="max-w-3xl px-2 md:px-0">
                  <h2 className="text-xl md:text-[44px] font-bold leading-snug mb-3">
                    DISCOVER THE LATEST <br /> COLLECTION OF CUPS OF LOVE
                  </h2>
                  <p className="text-[#929092] max-w-2xl mb-6">
                    A digital agency is a company that leverages digital
                    channels to grow their clients&apos; business. A digital
                    agency is a company that leverages digital...
                  </p>

                  <button className="relative px-8 py-4 font-medium text-black bg-[#dddddd] group cursor-pointer ">
                    <span className="relative z-10 flex items-center gap-2 group">
                      Shop Now <span className="text-xl">→</span>
                    </span>

                    <span className="absolute w-full border border-black h-full -top-1 -left-1 group-hover:top-0 group-hover:left-0 transition-all duration-200 ease-in-out"></span>
                  </button>

                  {/* Info Boxes */}
                  <div className="flex flex-col sm:flex-row gap-6 mt-10">
                    {/* Card 1: MENU */}
                    <div className=" p-4 hover:shadow-lg transition group w-full sm:w-[calc(50%-0.75rem)]">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <Image
                            src={frame1}
                            alt="Menu"
                            width={100}
                            height={80}
                            className="rounded-md object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm uppercase tracking-wide text-gray-800">
                            MENU
                          </h3>
                          <p className="text-xs text-gray-600 mt-1">
                            A digital agency is a company agency
                          </p>
                          <Link
                            href="/menu"
                            className="inline-flex items-center text-[#e63946] text-xs font-medium mt-2 group-hover:text-red-700 transition"
                          >
                            View Details{" "}
                            <ArrowRight size={12} className="ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Card 2: CUSTOM BOARD */}
                    <div className=" p-4 hover:shadow-lg transition group w-full sm:w-[calc(50%-0.75rem)]">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <Image
                            src={frame2}
                            alt="Custom Board"
                            width={100}
                            height={80}
                            className="rounded-md object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm uppercase tracking-wide text-gray-800">
                            CUSTOM BOARD
                          </h3>
                          <p className="text-xs text-gray-600 mt-1">
                            A digital agency is a company agency
                          </p>
                          <Link
                            href="/custom-board"
                            className="inline-flex items-center text-[#e63946] text-xs font-medium mt-2 group-hover:text-red-700 transition"
                          >
                            Order Now <ArrowRight size={12} className="ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Swiper */}
              <div className="w-full md:w-[30%] px-4 md:px-6 py-8 md:py-0 mt-8 md:my-5">
                <Swiper
                  pagination={{ dynamicBullets: true }}
                  autoplay={{ delay: 3000 }}
                  modules={[Pagination, Autoplay]}
                  className="mySwiper"
                >
                  {images.map((img) => (
                    // eslint-disable-next-line react/jsx-key
                    <SwiperSlide>
                      <div className="relative w-full h-[400px] md:h-[450px]">
                        <Image
                          src={img}
                          alt="Hero Image"
                          fill
                          className="rounded-md object-cover"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
