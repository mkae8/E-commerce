import { AllProduct } from "@/components/AllProduct";
import React from "react";

export default async function Home() {
  const result = await fetch("https://fakestoreapi.com/products");
  const objResult = await result.json();
  return (
    <>
      <AllProduct allproducts={objResult} />
    </>
  );
}
