"use client";
import React, { useState } from "react";
import { Chip } from "./Chip";
import Link from "next/link";
import { Rating } from "./Rating";
import { AddCard } from "./AddCard";

export const RelatedItems = ({ products }) => {
  return (
    <div className="flex flex-col w-full h-[518px] gap-[30px]">
      <div className="w-full h-[108px] flex flex-col">
        <div className="flex gap-4 text-[#DB4444] items-center">
          <Chip />
          <p className="font-semibold">Related Items</p>
        </div>
      </div>
      <div className="w-full h-[400px] flex justify-between overflow-scroll snap-x ">
        {products.map(({ id, title, price, image, rating }) => (
          <Link
            key={id}
            href={`/list/${id}`}
            className=" group flex flex-col w-[270px] h-[350px] snap-start justify-around shrink-0"
          >
            <div className="flex flex-col items-center justify-center w-[270px] h-[250px]">
              <img src={image} className="w-[186px] h-[164px] object-contain" />
              <div className="opacity-0 group-hover:opacity-100">
                <AddCard />
              </div>
            </div>

            <p>{title}</p>
            <p className="text-red-400">{price}$</p>
            <div className="flex items-center gap-3">
              <Rating /> {rating.rate}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
