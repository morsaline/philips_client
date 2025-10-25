// pages/contact.js
import { Mail, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div
      className="  py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url("/Rectangle 63.png")`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[90rem] mx-auto">
        {" "}
        <h2 className="text-3xl font-bold text-gray-900">CONTACT US</h2>
      </div>
      <div className="max-w-[90rem] mx-auto flex gap-10">
        {/* Left Column - Contact Info */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-[30%]">
          <div className="mt-6 space-y-4">
            <div className="border-b pb-3">
              <div>
                <div className="flex items-center gap-3 my-3">
                  <span className="p-2 rounded-full bg-red-600 text-white flex items-center justify-center shadow-sm">
                    <Phone className="w-4 h-4" />
                  </span>
                  <div className="text-xl font-semibold text-gray-900">
                    Call To Us
                  </div>
                </div>

                <p className="text-gray-500">
                  We are available 24/7, 7 days a week.
                </p>
                <p className="text-gray-600">Phone: +8801611122222</p>
              </div>
            </div>
            <div className="">
              <div className="flex items-center gap-3 my-3">
                <span className="p-2 rounded-full bg-red-600 text-white flex items-center justify-center shadow-sm">
                  <Mail className="w-4 h-4" />
                </span>
                <div className="text-xl  font-semibold text-gray-900">
                  Write To Us
                </div>
              </div>
              <div>
                <p className="text-gray-500">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="text-gray-600">Emails: customer@exclusive.com</p>
                <p className="text-gray-600">Emails: support@exclusive.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-white p-6  rounded-lg shadow-lg w-[70%]">
          <form>
            <div className="space-y-8 flex-col flex justify-between ">
              <div className="flex gap-2 w-full">
                {" "}
                <div className="w-full">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="e.g John Son"
                    className="w-full bg-[#f1f1f1] placeholder-gray-500 text-black px-4 py-3 focus:outline-none"
                  ></input>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="EMAIL Address"
                    className="w-full bg-[#f1f1f1] placeholder-gray-500 text-black px-4 py-3 focus:outline-none"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="YOUR PHONE"
                    className="w-full bg-[#f1f1f1] placeholder-gray-500 text-black px-4 py-3 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Your message here..."
                  className="w-full bg-[#f1f1f1] placeholder-gray-500 text-black px-4 py-3 focus:outline-none"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className=" py-2 px-4 bg-red-600 text-white  rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
