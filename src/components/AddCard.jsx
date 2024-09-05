import React from "react";
import { FiShoppingCart } from "react-icons/fi";

export const AddCard = () => {
  return (
    <div className="w-[270px] h-[41px] bg-black text-white flex justify-center items-center gap-2 rounded hover:bg-red-400">
      <FiShoppingCart /> Add To Cart
    </div>
  );
};
