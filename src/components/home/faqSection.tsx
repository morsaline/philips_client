"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How can I enroll a course or make payment for it?",
    answer: `A digital agency is a company that leverages digital channels 
    to grow their clients’ brands online. It includes technologies such as 
    web design, digital marketing, creative design and app development.`,
  },
  {
    question: "What type of website it is?",
    answer: `A digital agency is a company that leverages digital channels 
    to grow their clients’ brands online. It includes technologies such as 
    web design, digital marketing, creative design and app development.`,
  },
  {
    question: "Do you offer web design services?",
    answer: `Yes, we specialize in building custom web design and development 
    solutions that are optimized for performance and conversion.`,
  },
  {
    question: "Can I get support after development?",
    answer: `Absolutely! We provide post-launch support and maintenance 
    services for all our projects.`,
  },
  {
    question: "Do you provide digital marketing solutions?",
    answer: `Yes, our marketing experts offer SEO, social media, 
    and ad campaign services tailored for your business goals.`,
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 lg:px-20 border-t border-[#2b2b2b]">
      <div className="flex flex-col lg:flex-row gap-10 max-w-[90rem] mx-auto">
        {/* LEFT SIDE - Questions */}
        <div className="flex-1 space-y-4 border-r border-[#2b2b2b] pr-4">
          <h3 className="text-[#ff3b3b] text-sm font-semibold uppercase tracking-wider">
            Let’s Explore
          </h3>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            FAQ / Questions & Answers
          </h2>

          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex justify-between items-center cursor-pointer py-4 border-b border-[#2b2b2b] transition-all duration-300 ${
                activeIndex === index
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <span className="text-sm md:text-base">{faq.question}</span>
              <span className="ml-2">
                {activeIndex === index ? (
                  <Minus className="w-5 h-5 text-[#ff3b3b]" />
                ) : (
                  <Plus className="w-5 h-5 text-[#ff3b3b]" />
                )}
              </span>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE - Answer */}
        <div className="flex-1 px-2 md:px-8 lg:px-10">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            {faqs[activeIndex].question}
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            {faqs[activeIndex].answer}
          </p>
          <p className="text-gray-400 leading-relaxed">
            {faqs[activeIndex].answer}
          </p>
        </div>
      </div>
    </section>
  );
}
