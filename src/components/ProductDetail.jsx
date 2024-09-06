"use client";
import { useState } from "react";
import { PlusMinus } from "./PlusMinus";
import { CiHeart } from "react-icons/ci";
import { Rating } from "./Rating";

export const ProductDetail = ({ products }) => {
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const itemIndex = cartItems.findIndex(
      (item) => item.id === products.id && item.title === products.title
    );

    if (itemIndex > -1) {
      cartItems[itemIndex].count += count;
    } else {
      const newItem = {
        id: products.id,
        title: products.title,
        price: products.price,
        count,
        image: products.image,
      };
      cartItems.push(newItem);
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const { id, title, price, description, image, rating } = products;

  return (
    <div
      className="mt-[100px] mb-[100px] flex flex-col justify-between w-full gap-[60px]"
      key={id}
    >
      <h1>{title}</h1>
      <div className="flex gap-[60px] items-center">
        <img
          src={image}
          alt=""
          className="w-[500px] h-[600px] object-contain"
        />
        <div className="w-[500px] h-[600px] flex flex-col">
          <div className="w-full h-[280px] flex flex-col justify-between">
            <h1 className="text-[24px]">{title}</h1>
            <div className="flex items-center gap-4">
              <Rating />
              {rating.rate}
            </div>
            <p className="text-[24px]">{price}$</p>
            <p className="text-[14px]">{description}</p>

            <hr />
          </div>
          <div className="flex flex-col h-[250px] w-full mt-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                Colors: Only have one color
                <input type="checkbox" className="checkbox" disabled />
              </div>
              <div className="flex items-center gap-4">
                Size:
                <p className="w-8 h-8 border rounded flex items-center justify-center hover:bg-[#DB4444] hover:text-white">
                  S
                </p>
                <p className="w-8 h-8 border rounded flex items-center justify-center hover:bg-[#DB4444] hover:text-white">
                  M
                </p>
                <p className="w-8 h-8 border rounded flex items-center justify-center hover:bg-[#DB4444] hover:text-white">
                  L
                </p>
              </div>
              <div className="flex justify-between">
                <PlusMinus count={count} setCount={setCount} />

                <button
                  onClick={handleAddToCart}
                  className="bg-[#DB4444] text-white py-[10px] px-12 rounded"
                >
                  Add to Cart
                </button>
                <div className="w-10 h-10 border rounded flex justify-center items-center">
                  <CiHeart className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
          <textarea
            className="textarea textarea-info"
            placeholder="Address"
          ></textarea>
        </div>
      </div>
      <div className="flex"></div>
    </div>
  );
};
