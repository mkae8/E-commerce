"use client";

import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { Timer } from "./Timer";
import { Chip } from "./Chip";
import Link from "next/link";
import { HeartChip } from "./HeartChip";
import { AddCard } from "./AddCard";
import { Rating } from "./Rating";

export const FlashSale = ({ posts }) => {
  const leftScroll = () => {
    document.getElementById("scroll").scrollBy({
      left: -500,
      behavior: "smooth",
    });
  };
  const rightScroll = () => {
    document.getElementById("scroll").scrollBy({
      left: 500,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="flex flex-col h-[130px] ">
        <div className="h-[103px] w-[1170px] flex flex-col gap-5 ">
          <div className="flex items-center gap-4">
            <Chip />
            <p className="text-[#DB4444] font-semibold">Today’s</p>
          </div>
          <div className="flex w-[1170px] justify-between">
            <div className="flex w-[600px] justify-between  ">
              <h1 className="text-[36px] font-semibold">Flash Sales</h1>
              <div>
                <Timer />
              </div>
            </div>
            <div className="flex items-end w-[100px] h-[46px] gap-3 ">
              <div className="bg-[#F5F5F5] rounded-full w-[46px] h-[46px] flex items-center justify-center ">
                <FaArrowLeft
                  onClick={leftScroll}
                  className=" flex  w-[24px] h-[24px] "
                />
              </div>
              <div className="bg-[#F5F5F5] rounded-full w-[46px] h-[46px] flex items-center justify-center ">
                <FaArrowRight
                  onClick={rightScroll}
                  className=" flex  w-[24px] h-[24px] "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div
          className="w-full h-[400px] flex mt-12 gap-[30px] snap-x overflow-scroll "
          id="scroll"
        >
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
    </>
  );
};
