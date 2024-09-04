"use client";
import React, { useState } from "react";
import { Chip } from "./Chip";
import Link from "next/link";
import { Rating } from "./Rating";

export const RelatedItems = ({ products }) => {
  const [visiblePost, setVisiblePost] = useState(4);

  return (
    <div className="flex flex-col w-full h-[518px] gap-[30px]">
      <div className="w-full h-[108px] flex flex-col">
        <div className="flex gap-4 text-[#DB4444] items-center">
          <Chip />
          <p className="font-semibold">Related Items</p>
        </div>
      </div>
      <div className="w-full h-[400px] flex justify-between overflow-x-scroll no-scrollbar">
        {products.map(({ id, title, price, image, rating }) => (
          <Link
            key={id}
            href={`/list/${id}`}
            className="flex flex-col w-[270px] h-[350px] justify-around shrink-0"
          >
            <div className="flex items-center justify-center w-[270px] h-[250px]">
              <img src={image} className="w-[186px] h-[164px] object-contain" />
            </div>
            <p>{title}</p>
            <p className="text-red-400">{price}$</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
