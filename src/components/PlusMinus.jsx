"use client";

export const PlusMinus = ({ count, setCount }) => {
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 1 ? count - 1 : 1);

  return (
    <div className="flex items-center gap-2">
      <button onClick={decrement} className="btn">
        -
      </button>
      <span>{count}</span>
      <button onClick={increment} className="btn">
        +
      </button>
    </div>
  );
};
