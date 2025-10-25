"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import romanticImg from "@/assets/banner/romanticImg.png";
import romanticImg2 from "@/assets/banner/Frame 2147226423.png";
import { ArrowRight } from "lucide-react";

const slides = [
  { id: 1, image: romanticImg },
  { id: 2, image: romanticImg },
  { id: 3, image: romanticImg },
  { id: 4, image: romanticImg },
  { id: 5, image: romanticImg },
  { id: 6, image: romanticImg },
];

export default function RomanticSlider() {
  return (
    <div className=" bg-black border-t border-gray-700">
      {" "}
      <div className="max-w-[90rem] mx-auto">
        {" "}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 py-8">
          <div>
            <p className="text-red-500 text-xs sm:text-sm md:text-base font-semibold tracking-wide uppercase">
              Discover the
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mt-1 sm:mt-2 uppercase">
              Custom Galllery
            </h1>
          </div>

          <button className="relative group overflow-hidden mt-4 sm:mt-0 bg-transparent hover:bg-gray-200 text-white px-5 sm:px-8 py-2 sm:py-3 font-medium flex items-center gap-2 border border-gray-300 transition-all duration-300">
            <span className="relative z-10 text-sm sm:text-base">
              Explore More
            </span>
            <ArrowRight className="relative z-10 text-lg sm:text-xl" />

            {/* Animated borders */}
            <span className="absolute top-0 left-0 h-[1px] w-0 bg-black group-hover:w-full transition-all duration-300 ease-in-out"></span>
            <span className="absolute top-0 right-0 w-[1px] h-0 bg-black group-hover:h-full transition-all duration-300 ease-in-out delay-100"></span>
            <span className="absolute bottom-0 right-0 h-[1px] w-0 bg-black group-hover:w-full transition-all duration-300 ease-in-out delay-200"></span>
            <span className="absolute bottom-0 left-0 w-[1px] h-0 bg-black group-hover:h-full transition-all duration-300 ease-in-out delay-300"></span>
          </button>
        </div>
        <div className="bg-black py-12 flex justify-center items-center overflow-hidden">
          <div className="relative w-full max-w-6xl">
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={3}
              centeredSlides={true}
              spaceBetween={-180}
              loop={true}
              loopAdditionalSlides={0}
              watchSlidesProgress={true}
              speed={900}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              pagination={{
                clickable: true,
              }}
              className="romanticSwiper"
            >
              {slides.map((slide) => (
                <SwiperSlide
                  key={slide.id}
                  className="!flex justify-center items-center"
                >
                  <div className="relative w-[650px] h-[400px] rounded-xl overflow-hidden transition-all duration-500">
                    <Image
                      src={slide.image}
                      alt={`Slide ${slide.id}`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
