"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import bannerImg from "@/assets/banner/Rectangle 26.png";
import frame1 from "@/assets/banner/Frame 2147226421.png";
import frame2 from "@/assets/banner/Frame 2147226423.png";

export default function HeroBanner() {
  const images = [bannerImg, bannerImg, bannerImg];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.7, ease: "easeOut" },
    }),
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: (delay = 0) => ({
      opacity: 1,
      transition: { delay, duration: 0.8 },
    }),
  };

  const cardStagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardItem = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div
      className="grid grid-cols-1"
      style={{
        backgroundImage: `url("/Rectangle 63.png")`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="">
        {/* Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-6 sm:mb-8  max-w-[90rem] mx-auto px-3 sm:px-6"
        >
          <h1
            className="text-[1.25rem] sm:text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] xl:text-[60px]
            font-semibold leading-[1.3] md:leading-snug text-center md:text-left text-black"
          >
            &quot;THE LOVE ASSISTANT THAT KEEP{" "}
            <span className="text-[#e63946] font-bold">
              LOVE CONSISTENT&quot;
            </span>
          </h1>
        </motion.div>

        <div className="border-t">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-0">
            <div className="flex flex-col md:flex-row-reverse max-w-[90rem] mx-auto px-3 sm:px-6">
              {/* Right Side - Swiper */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full md:w-[40%] lg:w-[40%] xl:w-[30%] px-2 sm:px-4 md:px-6 lg:px-4 py-6 md:py-0 mt-6 md:my-5"
              >
                <Swiper
                  pagination={{ dynamicBullets: true }}
                  autoplay={{ delay: 3000 }}
                  modules={[Pagination, Autoplay]}
                  className="mySwiper"
                >
                  {images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className="relative w-full aspect-[16/13] sm:aspect-[16/13] md:h-[450px] lg:h-[470px] xl:h-[420px]"
                      >
                        <Image
                          src={img}
                          alt="Hero Image"
                          fill
                          className="rounded-md object-cover"
                        />
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>

              {/* Left Content */}
              <div className="w-full md:w-[70%] py-5 md:border-r-2 border-gray-200 flex flex-col justify-center">
                <div className="max-w-3xl px-2 sm:px-4 md:px-0 mx-auto md:mx-0">
                  <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-[1.25rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[3rem] xl:text-[44px]
                    font-bold leading-[1.3] md:leading-snug mb-3 text-center md:text-left"
                  >
                    DISCOVER THE LATEST <br className="hidden md:block" />{" "}
                    COLLECTION OF CUPS OF LOVE
                  </motion.h2>

                  <motion.p
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.3}
                    className="text-[#929092] text-[0.85rem] sm:text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.375rem] max-w-2xl mb-6 text-center md:text-left"
                  >
                    A digital agency is a company that leverages digital
                    channels to grow their clients&apos; business. A digital
                    agency is a company that leverages digital...
                  </motion.p>

                  <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.4}
                    className="flex justify-center md:justify-start mb-6"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative px-6 sm:px-8 py-3 sm:py-4 font-medium text-black bg-[#dddddd] group cursor-pointer text-sm sm:text-base"
                    >
                      <span className="relative z-10 flex items-center gap-2 group">
                        Shop Now <span className="text-lg sm:text-xl">→</span>
                      </span>
                      <span className="absolute w-full border border-black h-full -top-1 -left-1 group-hover:top-0 group-hover:left-0 transition-all duration-200 ease-in-out"></span>
                    </motion.button>
                  </motion.div>

                  {/* Info Boxes */}
                  <motion.div
                    variants={cardStagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 sm:gap-6 mt-8 sm:mt-10"
                  >
                    {/* Card 1: MENU */}
                    <motion.div
                      variants={cardItem}
                      className="p-4 hover:shadow-md transition group w-full sm:w-[calc(50%-0.75rem)] md:w-full lg:w-[calc(50%-0.75rem)] rounded-md bg-white"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <Image
                            src={frame1}
                            alt="Menu"
                            width={70}
                            height={60}
                            className="rounded-md object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm md:text-[13px] lg:text-sm uppercase tracking-wide text-gray-800">
                            MENU
                          </h3>
                          <p className="text-xs md:text-sm lg:text-xs text-gray-600 mt-1">
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
                    </motion.div>

                    {/* Card 2: CUSTOM BOARD */}
                    <motion.div
                      variants={cardItem}
                      className="p-4 hover:shadow-md transition group w-full sm:w-[calc(50%-0.75rem)] md:w-full lg:w-[calc(50%-0.75rem)] rounded-md bg-white"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <Image
                            src={frame2}
                            alt="Custom Board"
                            width={70}
                            height={60}
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
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
