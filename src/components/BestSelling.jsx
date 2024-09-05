"use client";
import React, { useState } from "react";
import { Chip } from "./Chip";
import Link from "next/link";
import { AddCard } from "./AddCard";
import { Rating } from "./Rating";

export const BestSelling = ({ posts }) => {
  const [visiblePost, setVisiblePost] = useState(4);
  const loadMore = () => setVisiblePost((prev) => prev + 17);

  return (
    <div className="flex flex-col w-full h-[518px] mt-[100px] gap-[60px]">
      <div className="w-full h-[108px] flex flex-col">
        <div className="flex gap-4 text-[#DB4444] items-center">
          <Chip />
          <p className="font-semibold">Categories</p>
        </div>
        <div className="flex justify-between">
          <h1 className="text-[36px] font-semibold">Best Selling Products</h1>
          <button
            onClick={loadMore}
            className="bg-[#DB4444] py-4 px-12 text-white rounded"
          >
            View All
          </button>
        </div>
      </div>
      <div className="w-full h-[400px] flex justify-between  overflow-scroll">
        {posts
          .slice(0, visiblePost)
          .map(({ id, title, price, image, rating }) => (
            <Link
              key={id}
              href={`/list/${id}`}
              className=" group flex flex-col w-[270px] h-[350px] justify-around shrink-0"
            >
              <div className="flex  flex-col items-center justify-center w-[270px] h-[250px] ">
                <img
                  src={image}
                  className=" w-[186px] h-[164px] object-contain"
                />
                <div className="opacity-0 group-hover:opacity-100">
                  <AddCard />
                </div>
              </div>
              <p>{title}</p>
              <p className="text-red-400">{price}$</p>
              <p className="w-[100px] h-5 flex items-center gap-3">
                <Rating /> <p className="opacity-50">{rating.rate}</p>
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
};
