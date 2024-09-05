"use client";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { CgEye } from "react-icons/cg";

export const HeartChip = () => {
  return (
    <div className="flex flex-col ">
      <div className="h-[34px] w-[34px] bg-white rounded-full flex items-center justify-center">
        <CiHeart className="h-6 w-6 " />
      </div>
      <div className="h-[34px] w-[34px] bg-white rounded-full flex items-center justify-center">
        <CgEye className="h-6 w-6" />
      </div>
    </div>
  );
};
