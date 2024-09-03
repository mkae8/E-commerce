"use client";

import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

import { Timer } from "./Timer";

export const FlashSale = () => {
  return (
    <div className="flex flex-col h-[130px] ">
      <div className="h-[103px] w-[1170px] flex flex-col gap-5 ">
        <div className="flex items-center gap-4">
          <p className="w-5 h-10 bg-[#DB4444] rounded-[4px]"></p>
          <p className="text-[#DB4444] font-semibold">Today’s</p>
        </div>
        <div className="flex w-[1170px] justify-between">
          <div className="flex w-[600px] justify-between  ">
            <h1 className="text-[36px] font-semibold">Flash Sales</h1>
            <div>
              <Timer />
            </div>
          </div>
          <div className="flex items-end w-[100px] h-[46px] gap-3 ">
            <div className="bg-[#F5F5F5] rounded-full w-[46px] h-[46px] flex items-center justify-center ">
              <FaArrowLeft className=" flex  w-[24px] h-[24px] " />
            </div>
            <div className="bg-[#F5F5F5] rounded-full w-[46px] h-[46px] flex items-center justify-center ">
              <FaArrowRight className=" flex  w-[24px] h-[24px] " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
