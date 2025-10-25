"use client";
import { useState, ChangeEvent } from "react";
import bgImage from "@/assets/bgall/loginBg.png";
import logo from "@/assets/logo/logo.png";
import Image from "next/image";

const SubmitCode = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    let newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);
  };

  const handleSubmit = () => {
    if (code.join("").length < 4) {
      setError("Please enter the full verification code.");
      return;
    }
    setError(""); // Clear error if successful
    // Handle verification logic
  };

  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center pt-14">
        <div className="flex items-center justify-center gap-2   ">
          <Image
            src={logo}
            alt="cupsoflove"
            width={150}
            height={150}
            className="rounded object-cover"
          />
        </div>
      </div>{" "}
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        {" "}
        <div className="bg-white p-8  w-full max-w-sm">
          <h1 className="text-3xl font-bold text-center mb-6">
            Verification Code
          </h1>
          <p className="text-center text-gray-500 mb-6">
            We have sent a verification code to you{" "}
            <span className="font-semibold">Support@gmail.com</span>
          </p>
          <div className="flex justify-between mb-6">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onPaste={(e) => {
                  e.preventDefault();
                  const paste = e.clipboardData.getData("text").slice(0, 4);
                  const newCode = paste
                    .split("")
                    .concat(code.slice(paste.length));
                  setCode(newCode.slice(0, 4));
                }}
                className="w-14 h-14 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-red-500 text-white font-semibold rounded-lg"
          >
            Verify
          </button>
          <div className="flex justify-between mt-4 text-sm text-center">
            <p className="text-gray-500">Don't receive the code?</p>
            <button className="text-blue-500">Resend</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitCode;
