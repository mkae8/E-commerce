"use client";
import React from "react";
import { Chip } from "./Chip";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { CiMobile3 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoWatchOutline } from "react-icons/io5";
import { IoCameraOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import { LuGamepad } from "react-icons/lu";

export const Catogeries = () => {
  return (
    <div className="w-full h-[313px] mt-[100px] gap-[60px] ">
      <div className="w-full h-[108px]  flex flex-col">
        <div className="flex gap-4 text-[#DB4444] items-center ">
          <Chip />
          <p className="font-semibold">Categories</p>
        </div>
        <div className="flex justify-between">
          <h1 className="text-[36px] font-semibold">Browse By Category</h1>
          <div className="flex items-center w-[100px] h-[46px] gap-3 ">
            <div className="bg-[#F5F5F5] rounded-full w-[46px] h-[46px] flex items-center justify-center ">
              <FaArrowLeft className=" flex  w-[24px] h-[24px] " />
            </div>
            <div className="bg-[#F5F5F5] rounded-full w-[46px] h-[46px] flex items-center justify-center ">
              <FaArrowRight className=" flex  w-[24px] h-[24px] " />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full h-[145px] border justify-between">
        <div className="w-[170px] h-[145px] border rounded-1 flex flex-col justify-center items-center hover:bg-[#DB4444] hover:text-white">
          <CiMobile3 className="h-[56px] w-[56px]" />
          <p>Phones</p>
        </div>
        <div className="w-[170px] h-[145px] border rounded-1 flex-col flex justify-center items-center hover:bg-[#DB4444] hover:text-white">
          <HiOutlineComputerDesktop className="h-[56px] w-[56px]" />
          <p>Computer</p>
        </div>
        <div className="w-[170px] h-[145px] border rounded-1 flex flex-col justify-center items-center hover:bg-[#DB4444] hover:text-white">
          <IoWatchOutline className="h-[56px] w-[56px]" />
          <p>Smart Watch</p>
        </div>
        <div className="w-[170px] h-[145px] border rounded-1 flex flex-col justify-center items-center hover:bg-[#DB4444] hover:text-white">
          <IoCameraOutline className="h-[56px] w-[56px]" />
          <p>Camera</p>
        </div>
        <div className="w-[170px] h-[145px] border rounded-1 flex flex-col justify-center items-center hover:bg-[#DB4444] hover:text-white">
          <CiHeadphones className="h-[56px] w-[56px]" />
          <p>Headphones</p>
        </div>
        <div className="w-[170px] h-[145px] border rounded-1 flex flex-col justify-center items-center hover:bg-[#DB4444] hover:text-white">
          <LuGamepad className="h-[56px] w-[56px]" />
          <p>Gaming</p>
        </div>
      </div>
      <br />
      <br />
      <hr />
    </div>
  );
};
