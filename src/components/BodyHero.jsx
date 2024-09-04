"use client";
import React from "react";

export const BodyHero = () => {
  return (
    <div className="bg-black w-full items-center flex justify-between h-[500px] pl-[70px] mt-[100px] ">
      <div className=" flex flex-col gap-4 pt-10">
        <span className="flex  gap-4">
          <h1 className="text-[#00FF66]">Categories</h1>
        </span>
        <h1 className="text-[#FAFAFA] text-[48px] ">
          Enhance Your Music Experience
        </h1>
        <div className="flex w-[320px] h-[62px] justify-between">
          <div className="w-[62px] h-[62px] bg-[#FFFFFF] rounded-full flex flex-col items-center justify-center font-semibold">
            23 <p className="text-[11px]">Hours</p>
          </div>
          <div className="w-[62px] h-[62px] bg-[#FFFFFF] rounded-full flex flex-col items-center justify-center font-semibold">
            05 <p className="text-[11px]">Days</p>
          </div>
          <div className="w-[62px] h-[62px] bg-[#FFFFFF] rounded-full flex flex-col items-center justify-center font-semibold">
            59 <p className="text-[11px]">Minutes</p>
          </div>
          <div className="w-[62px] h-[62px] bg-[#FFFFFF] rounded-full flex flex-col items-center justify-center font-semibold">
            35<p className="text-[11px]">Seconds</p>
          </div>
        </div>
        <button className="py-4 px-12 bg-[#00FF66] text-white w-[171px] h-[56px] rounded">
          Buy Now!
        </button>
      </div>
      <img
        src="/jbl.png"
        alt=""
        className="w-[600px] h-[420px] object-cover pr-[70px]"
      />
    </div>
  );
};
