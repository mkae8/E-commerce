"use client";

import Link from "next/link";
import React from "react";
import { AddCard } from "./AddCard";
import { HeartChip } from "./HeartChip";
import { Rating } from "./Rating";

export const SellingProducts = ({ posts }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full h-[400px] flex mt-12 gap-[30px] snap-x overflow-scroll">
        {posts.map(({ id, title, price, image, rating }) => (
          <Link
            key={id}
            href={`/list/${id}`}
            className=" group flex flex-col w-[270px] h-[350px] snap-start justify-around shrink-0"
          >
            <div className="flex flex-col items-center justify-center w-[270px] h-[250px] relative ">
              <img
                src={image}
                className=" w-[186px] h-[164px] object-contain  "
              />
              <div className="absolute right-4 top-4">
                <HeartChip />
              </div>

              <div className="opacity-0 group-hover:opacity-100">
                <AddCard />
              </div>
            </div>

            <p>{title}</p>
            <p className="text-red-400">{price}$</p>
            <div className="flex items-center gap-3">
              <Rating />
              <p className="opacity-50">{rating.rate}</p>
            </div>
          </Link>
        ))}
      </div>
      <button className="bg-[#DB4444] text-white py-4 px-12 rounded ">
        View All Products
      </button>
      <br />
      <br />
      <hr className="w-full" />
    </div>
  );
};
