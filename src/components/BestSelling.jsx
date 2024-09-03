"use client";
import React from "react";
import { Chip } from "./Chip";
import Link from "next/link";

export const BestSelling = ({ posts }) => {
  return (
    <div className="flex flex-col w-full h-[518px] mt-[100px] gap-[60px]">
      <div className="w-full h-[108px]  flex flex-col">
        <div className="flex gap-4 text-[#DB4444] items-center ">
          <Chip />
          <p className="font-semibold">Categories</p>
        </div>
        <div className="flex justify-between">
          <h1 className="text-[36px] font-semibold">Best Selling Products</h1>
          <button className="bg-[#DB4444] py-4 px-12 text-white rounded">
            View All
          </button>
        </div>
      </div>
      <div className="w-full h-[350px] justify-between border">
        {/* {posts.map(({ id, title, price, image, rating }) => (
          <Link
            key={id}
            href={`/list/${id}`}
            className="flex flex-col w-[270px] h-[350px] justify-around shrink-0 "
          >
            <img src={image} className=" w-[270px] h-[250px] object-contain" />
            <p>{title}</p>
            <p className="text-red-400">{price}$</p>
            <p className="opacity-50">{rating.rate}</p>
          </Link>
        ))} */}
      </div>
    </div>
  );
};
