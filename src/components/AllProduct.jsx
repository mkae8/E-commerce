"use client";
import React, { useState } from "react";
import { Chip } from "./Chip";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { AddCard } from "./AddCard";
import { Rating } from "./Rating";

export const AllProduct = ({ allproducts }) => {
  return (
    <div className="flex flex-col mt-[100px] mb-[100px] w-full h-full justify-center items-center">
      <div className="w-full h-[108px]  flex flex-col">
        <div className="flex justify-between">
          <h1 className="text-[36px] font-semibold">Our All Products</h1>
        </div>
      </div>
      <div
        className="w-full h-full justify-center items-center gap-[30px] flex flex-wrap "
        id="scroll"
      >
        {allproducts.map(({ id, title, price, image, rating }) => (
          <Link
            className=" group flex flex-col w-[270px] h-[350px] justify-around shrink-0"
            key={id}
            href={`/list/${id}`}
          >
            <div className="flex flex-col items-center justify-center w-[270px] h-[250px] ">
              <img
                src={image}
                className=" w-[186px] h-[164px] object-contain"
              />
              <div className="opacity-100">
                <AddCard />
              </div>
            </div>
            <p>{title}</p>
            <p className="text-[#DB4444]">{price}$</p>
            <p className="flex items-center gap-3">
              <Rating /> {rating.rate}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
