import Link from "next/link";
import React from "react";

const Error = () => {
  return (
    <div className="flex  w-full h-[800px] justify-center items-center ">
      <div className="flex flex-col justify-center items-center gap-[100px] w-[829px] h-[179px]">
        <span className="text-[110px]">404 Not Found</span>
        <p>Your visited page not found. You may go home page.</p>

        <Link href="/">
          <button className="bg-[#DB4444] font-medium text-white rounded h-[56px] w-[254px] py-4 px-12">
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
