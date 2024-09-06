"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.count,
      0
    );
  };

  const handleDeleteItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <div className="w-[1170px] flex flex-col">
      <h1 className="text-2xl font-bold mb-8 mt-8">Your Cart</h1>
      {cartItems.length > 0 ? (
        <div className="flex flex-col gap-6 ">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-4"
            >
              <div className=" flex  w-full items-center gap-[180px]  ">
                <div className="flex items-center gap-4">
                  <img
                    className="w-[150px] h-[150px]"
                    src={item.image}
                    alt=""
                  />
                  <h2 className="font-bold w-[96px] h-fit text-balance">
                    {item.title}
                  </h2>
                </div>
                <div className="flex gap-20 ">
                  <div className="flex flex-col items-center ">
                    <p className="font-semibold">Price:</p>
                    {item.price}$
                  </div>
                  <div className="flex flex-col  items-center ">
                    <p className="font-semibold">Quantity:</p>
                    {item.count}
                  </div>
                </div>
                <MdOutlineDelete
                  className="w-[40px] h-[40px] cursor-pointer"
                  onClick={() => handleDeleteItem(item.id)}
                />
              </div>
              <div className="font-bold text-end">
                Total: {(item.price * item.count).toFixed(2)}$
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center mt-6 ">
            <div className="text-2xl font-bold ">Total Price:</div>
            <div className="text-2xl font-bold">
              {calculateTotalPrice().toFixed(2)}$
            </div>
          </div>
        </div>
      ) : (
        <div className="text-[20px] w-full h-[700px] flex flex-col gap-10 justify-center items-center ">
     


          <div className="flex items-center gap-5">
            Do you wanna see all products ?
            <Link href={"/viewAll"}>
              <button className="btn btn-ghost text-[16px] ">Click me!</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
