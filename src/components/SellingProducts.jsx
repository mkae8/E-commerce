"use client";

import Link from "next/link";
import React from "react";

export const SellingProducts = ({ posts }) => {
  return (
    <div className="w-full h-[350px] flex mt-10 gap-[30px] overflow-scroll">
      {posts.map(({ id, title, price, image, rating, category }) => (
        <Link
          key={id}
          href={`/list/${id}`}
          className="flex flex-col w-[270px] h-[350px]   "
        >
          <img src={image} className="w-[270px] h-[250px] object-contain" />
          <p>{title}</p>
          <p>{price}$</p>
          <p>{rating.rate}</p>
        </Link>
      ))}
    </div>
  );
};
