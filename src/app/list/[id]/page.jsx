import { BestSelling } from "@/components/BestSelling";
import { ProductDetail } from "@/components/ProductDetail";
import { RelatedItems } from "@/components/RelatedItems";

export default async function Page({ params }) {
  const { id } = params;
  const result = await fetch(`https://fakestoreapi.com/products/${id}`);
  const objResult = await result.json();

  const resultTwo = await fetch("https://fakestoreapi.com/products/");
  const objResultTwo = await resultTwo.json();

  return (
    <>
      <ProductDetail products={objResult} />
      <RelatedItems products={objResultTwo} />
    </>
  );
}
