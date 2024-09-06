"use client";
import { useEffect, useState } from "react";

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

  return (
    <div className="w-[1170px] mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cartItems.length > 0 ? (
        <div className="flex flex-col gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-4"
            >
              <div>
                <h2 className="font-bold">{item.title}</h2>
                <img className="w-[150px] h-[150px]" src={item.image} alt="" />
                <p>Price: {item.price}$</p>
                <p>Quantity: {item.count}</p>
              </div>
              <div className="font-bold">
                Total: {(item.price * item.count).toFixed(2)}$
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center mt-6">
            <div className="text-2xl font-bold">Total Price:</div>
            <div className="text-2xl font-bold">
              {calculateTotalPrice().toFixed(2)}$
            </div>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
