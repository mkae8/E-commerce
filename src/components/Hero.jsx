"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

export const Hero = () => {
  return (
    <div className="bg-black w-[892px] flex h-[344px] pl-[70px]  ">
      <div className=" flex flex-col gap-4 pt-10">
        <span className="flex items-center gap-4">
          <img
            src="/Logo.png"
            alt=""
            className="w-10 h-[49px] object-contain"
          />
          <p className="text-white">iPhone 14 Series</p>
        </span>
        <h1 className="text-[#FAFAFA] text-[48px] "> Up to 10% off Voucher</h1>
        <div className="flex gap-2 items-center">
          <span className="underline text-[#FAFAFA]">Shop Now </span>
          <FaArrowRight className="text-white" />
        </div>
      </div>
      <img
        src="/iphone.png"
        alt=""
        className="w-[496px] h-[344px] object-cover"
      />
    </div>
  );
};
