import { useState } from "react";

export default function TestComponent({ increment }: { increment: number }) {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + increment);
  }

  function decreaseCounter() {
    setCounter(counter - increment);
  }

  return (
    <>
      <p>This is a test component!</p>
      <div className="mx-auto font-bold text-lg">{counter}</div>
      <div className="mx-auto">
        <button
          className="rounded-full font-bold p-3 border-2 border-white active:border-black active:bg-white active:text-black"
          onClick={decreaseCounter}
        >
          Decrease by {increment}
        </button>
        <button
          className="rounded-full font-bold p-3 border-2 border-white active:border-black active:bg-white active:text-black"
          onClick={incrementCounter}
        >
          Increment by {increment}
        </button>
      </div>
    </>
  );
}
