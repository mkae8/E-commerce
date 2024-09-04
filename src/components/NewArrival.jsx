"use client";
import React from "react";
import { Chip } from "./Chip";

export const NewArrival = () => {
  return (
    <div className="flex  flex-col w-[full] h-[768px] mt-[100px] gap-[60px] ">
      <div>
        <div className="flex gap-4 text-[#DB4444] items-center ">
          <Chip />
          <p className="font-semibold">Our Products</p>
        </div>
        <h1 className="text-[36px] font-semibold">New Arrival</h1>
      </div>
      <div className="w-full h-[600px] gap-[30px] flex">
        <img
          src="/psp.png"
          className="w-[570px] h-[600px] object-cover"
          alt=""
        />
        <div className="flex flex-col gap-[30px]">
          <img
            src="/women.png"
            className="w-[570px] h-[284px] object-cover"
            alt=""
          />
          <div className="flex gap-[30px]">
            <img
              src="/speaker.png"
              className="w-[270px] h-[284px] object-cover"
              alt=""
            />
            <img
              src="/perfume.png"
              className="w-[270px] h-[284px] object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
