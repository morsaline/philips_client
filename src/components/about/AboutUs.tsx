import React from "react";
import Image from "next/image";
import about1 from "@/assets/about/about1.jpg";
import about2 from "@/assets/about/about2.png";
import about3 from "@/assets/about/about3.jpg";
import about4 from "@/assets/about/about4.jpg";
import bgImg from "@/assets/banner/Screenshot 2025-10-21 125216.png";

export default function AboutUs() {
  return (
    <div className="bg-white min-h-screen max-w-[90rem] mx-auto px-6 md:px-16 py-10">
      <div>
        {" "}
        {/* Small Title */}
        <p className="text-xs tracking-wider text-[#d35400] mb-1">
          CUPS OF LOVE
        </p>
        {/* Main Title */}
        <h1 className="text-2xl font-semibold text-black mb-6 pb-2">
          ABOUT US
        </h1>
        {/* Two Images Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="relative w-full h-72">
            <Image
              src={about1}
              alt="Couple with lights"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative w-full h-72">
            <Image
              src={about2}
              alt="Couple on swing"
              fill
              className="object-cover"
            />
          </div>
        </div>
        {/* Section Title */}
        <h2 className="text-xl font-semibold text-black mb-4 border-t  border-gray-200  pt-4 uppercase">
          Let’s Know What We Do
        </h2>
        {/* Paragraphs */}
        <div className="text-sm text-gray-700 leading-relaxed space-y-6 pt-4">
          <p>
            Lorem ipsum dolor sit amet consectetur. In tellus turpis enim nunc
            ante pharetra. Nunc aenean fringilla magna integer semper sed dui
            nisi. Praesent sit nullam lacus nec sapien sagittis ut. Nibh
            vestibulum nibh massa arcu consectetur risus phasellus pharetra
            aliquam cursus gravida facilisi. Odio egestas sed nisi sed
            pellentesque accumsan adipiscing massa. Quia vitae elementum morbi
            arcu. Dolor tellus vel egestas aliquet eget adipiscing cursus enim.
            Vestibulum pellentesque et aliquet senectus posuere tincidunt eget
            integer nec. Mi scelerisque sit id vulputate egestas. Ullamcorper
            dis sit in feugiat venenatis aliquam ultrices aliquet. Integer nisl
            faucibus volutpat convallis magnis. Libero pharetra ligula viverra
            volutpat vulputate est aliquam adipiscing cursus.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur. Ornare interdum eu euismod
            sit turpis mattis. Imperdiet habitant consectetur accumsan purus non
            sit scelerisque ultricies nulla. Scelerisque id cum pellentesque
            senectus eu neque netus arcu tellus. Integer sapien mi mauris mauris
            consectetur tristique. Habitasse quam nunc molestie in tempus purus
            tortor volutpat neque. Felis nec hendrerit adipiscing ornare nisl
            eget.
          </p>

          <p>
            Elementum convallis non id erat ornare. Accumsan justo sit odio
            proin dui. Enim viverra sapien habitasse sed commodo molestie
            malesuada dignissim. Et arcu non arcu eros erat hendrerit viverra.
            Curabitur massa diam quisque dictum ipsum adipiscing volutpat urna.
            Ultrices scelerisque lobortis pellentesque neque venenatis pulvinar
            nunc dictum.
            <span className="text-[#c0392b] cursor-pointer ml-1 font-medium">
              ...See More
            </span>
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 ">
          {/* Section 1 */}
          <div className="flex flex-col md:flex-row-reverse bg-white shadow-sm border  overflow-hidden">
            {/* Image */}
            <div className="w-full md:w-1/2 relative h-[220px] md:h-[300px]">
              <Image
                src={about3}
                alt="Couple with cup"
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug">
                DISCOVER THE LATEST COLLECTION OF CUPS OF LOVE
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Tincidunt rutrum cras
                interdum felis. Est venenatis mauris lectus arcu odio nibh
                convallis tincidunt. Id amet egestas lobortis et euismod elit...
              </p>
              <span className="text-indigo-600 font-medium text-sm hover:underline cursor-pointer">
                See More
              </span>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col md:flex-row bg-white shadow-sm border overflow-hidden">
            {/* Image */}
            <div className="w-full md:w-1/2 relative h-[220px] md:h-[300px]">
              <Image
                src={about4}
                alt="Couple with cup"
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center space-y-3">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug">
                DISCOVER THE LATEST COLLECTION OF CUPS OF LOVE
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Tincidunt rutrum cras
                interdum felis. Est venenatis mauris lectus arcu odio nibh
                convallis tincidunt. Id amet egestas lobortis et euismod elit...
              </p>
              <span className="text-indigo-600 font-medium text-sm hover:underline cursor-pointer">
                See More
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[600px]">
        <Image
          src={bgImg}
          alt="Full screen background"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
