import { BestSelling } from "@/components/BestSelling";
import { BodyHero } from "@/components/BodyHero";
import { Catogeries } from "@/components/Catogeries";
import { ExploreProduct } from "@/components/ExploreProduct";
import { FlashSale } from "@/components/FlashSale";
import { Hero } from "@/components/Hero";
import { Logistic } from "@/components/Logistic";
import { NewArrival } from "@/components/NewArrival";
import { SellingProducts } from "@/components/SellingProducts";
import { SideBar } from "@/components/SideBar";
import Image from "next/image";

export default async function Home() {
  const result = await fetch("https://fakestoreapi.com/products");
  const objResult = await result.json();
  console.log(objResult);

  return (
    <div>
      <div className="flex justify-between py-12  ">
        <SideBar />
        <Hero />
      </div>
      <FlashSale />
      <SellingProducts posts={objResult} />
      <Catogeries />
      <BestSelling posts={objResult} />
      <BodyHero />
      <ExploreProduct posts={objResult} />
      <NewArrival />
      <Logistic />
    </div>
  );
}
