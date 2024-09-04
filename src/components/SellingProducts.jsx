"use client";

import Link from "next/link";
import React from "react";

export const SellingProducts = ({ posts }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full h-[400px] flex mt-12 gap-[30px] overflow-scroll">
        {posts.map(({ id, title, price, image, rating }) => (
          <Link
            key={id}
            href={`/list/${id}`}
            className="flex flex-col w-[270px] h-[350px] justify-around shrink-0 "
          >
            <div className="flex items-center justify-center w-[270px] h-[250px] ">
              <img
                src={image}
                className=" w-[186px] h-[164px] object-contain"
              />
            </div>

            <p>{title}</p>
            <p className="text-red-400">{price}$</p>
            <p className="opacity-50">{rating.rate}</p>
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
