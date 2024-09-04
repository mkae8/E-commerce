"use client";
import React from "react";

export const Logistic = () => {
  return (
    <div className="w-full h-[450px] flex justify-center items-center">
      <div className="w-[943px] h-[161px] flex justify-between ">
        <div className="w-[249px] h-[161px] flex flex-col justify-center gap-2   items-center">
          <img src="/uil.png" className="w-20 h-20 " alt="" />
          <h1 className="text-[18px] font-semibold">FREE AND FAST DELIVERY</h1>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className="w-[262px] h-[161px] flex flex-col justify-center gap-2  items-center">
          <img src="/sonsoh.png" className="w-20 h-20 " alt="" />
          <h1 className="text-[18px] font-semibold">24/7 CUSTOMER SERVICE</h1>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="w-[256px] h-[161px] flex flex-col justify-center gap-2 items-center">
          <img src="/bat.png" className="w-20 h-20 " alt="" />
          <h1 className="text-[18px] font-semibold">MONEY BACK GUARANTEE</h1>
          <p>We reurn money within 30 days</p>
        </div>
      </div>
    </div>
  );
};
