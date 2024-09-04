"use client";
import React, { useState } from "react";
import { Chip } from "./Chip";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

export const ExploreProduct = ({ posts }) => {
  const [visiblePosts, setVisiblePosts] = useState(8);
  const loadMore = () => setVisiblePosts((prev) => prev + 13);

  return (
    <div className="flex flex-col mt-[100px] w-full h-full justify-center items-center">
      <div className="w-full h-[108px]  flex flex-col">
        <div className="flex gap-4 text-[#DB4444] items-center ">
          <Chip />
          <p className="font-semibold">Our Products</p>
        </div>
        <div className="flex justify-between">
          <h1 className="text-[36px] font-semibold">Explore Our Products</h1>
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
      <div className="w-full h-full justify-center items-center gap-[30px] flex flex-wrap">
        {posts
          .slice(0, visiblePosts)
          .map(({ id, title, price, image, rating }) => (
            <Link
              className="flex flex-col w-[270px] h-[350px] justify-around shrink-0"
              key={id}
              href={`/list/${id}`}
            >
              <div className="flex items-center justify-center w-[270px] h-[250px] ">
                <img
                  src={image}
                  className=" w-[186px] h-[164px] object-contain"
                />
              </div>
              <p>{title}</p>
              <p className="text-[#DB4444]">{price}$</p>
              <p>{rating.rate}</p>
            </Link>
          ))}
      </div>
      <button
        onClick={loadMore}
        className="py-4 px-12 bg-[#DB4444] rounded hover:bg-slate-700 text-white w-[234px] h-[56px] mt-[50px]"
      >
        View All Product
      </button>
    </div>
  );
};
