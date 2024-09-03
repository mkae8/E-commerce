"use client";
import { IoIosArrowForward } from "react-icons/io";

export const SideBar = () => {
  return (
    <>
      <div className="flex flex-col w-[217px] h-[344px] justify-between">
        <div className="flex items-center justify-between">
          <p>Woman’s Fashion</p>
          <IoIosArrowForward />
        </div>
        <div className="flex items-center justify-between ">
          <p>Men’s Fashion</p>
          <IoIosArrowForward />
        </div>

        <p>Electronics</p>
        <p>Home & Lifestyle</p>
        <p>Medicine</p>
        <p>Sports & Outdoor</p>
        <p>Baby’s & Toys</p>
        <p>Groceries & Pets</p>
        <p>Health & Beauty</p>
      </div>
    </>
  );
};
