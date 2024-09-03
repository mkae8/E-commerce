import { FlashSale } from "@/components/FlashSale";
import { Hero } from "@/components/Hero";
import { SellingProducts } from "@/components/SellingProducts";
import { SideBar } from "@/components/SideBar";
import Image from "next/image";

export default async function Home() {
  const result = await fetch("https://fakestoreapi.com/products");
  const objResult = await result.json();
  console.log(objResult);

  return (
    <>
      <div className="flex justify-between py-12  ">
        <SideBar />
        <Hero />
      </div>
      <FlashSale />
      <SellingProducts posts={objResult} />
    </>
  );
}
