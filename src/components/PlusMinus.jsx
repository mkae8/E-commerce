"use client";
import React, { useState } from "react";

export const PlusMinus = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={decrement}
        className="border w-[40px] h-[44px] px-2 py-1 hover:bg-[#DB4444] hover:text-white"
      >
        -
      </button>
      <span className=" flex items-center border w-[80px] h-[44px] text-[20px] justify-center">
        {count}
      </span>
      <button
        onClick={increment}
        className="border w-[40px] h-[44px] px-2 py-1 hover:bg-[#DB4444] hover:text-white"
      >
        +
      </button>
    </div>
  );
};
