"use client";
import { FaAngleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import Link from "next/link";

const routers = [
  { title: "Home", href: "/" },
  { title: "Contact", href: "/contact" },
  { title: "About", href: "/about" },
  { title: "SignUp", href: "/signup" },
];

export const Header = () => {
  return (
    <>
      <div className="w-full h-12 bg-[#000000] flex justify-center items-center">
        <div className=" ">
          <div className="flex gap-2 items-center  w-[859px] justify-between ">
            <p className="text-white text-[14px] w-[550px] flex gap-[8px] ">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
              <span
                href=""
                className="text-white text-[14px] font-semibold underline"
              >
                ShopNow
              </span>
            </p>

            <span className="text-white flex items-center gap-[5px]">
              English <FaAngleDown />
            </span>
          </div>
        </div>
      </div>
      <div className=" flex  pt-8 pb-3 px-4">
        <div className="flex w-[1170px] h-[38px] items-center justify-between ">
          <h1 className="text-[24px] font-bold">Exclusive</h1>
          <nav className="flex w-[367px] h-6 justify-between items-center">
            {routers.map(({ title, href }) => (
              <Link href={href} key={title}>
                {title}
              </Link>
            ))}
          </nav>
          <div className="flex gap-6 items-center relative ">
            <input
              type="text"
              className="bg-[#F5F5F5] py-[7px] pr-3 pl-5 rounded-[4px] w-[243px] h-[38px] "
              placeholder="What are you looking for?"
            />
            <CiSearch className="w-5 h-5 absolute right-[31.5%]" />

            <div className="flex items-center gap-4">
              <CiHeart className="w-8 h-8" />
              <CiShoppingCart className=" w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full" />
    </>
  );
};
