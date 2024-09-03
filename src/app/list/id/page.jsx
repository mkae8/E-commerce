export default async function Page({ params }) {
  const { id } = params;
  const result = await fetch(`https://fakestoreapi.com/products${id}`);
  const objResult = await result.json();
  return (
    <>
      <div>haha</div>
    </>
  );
}
