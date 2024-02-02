import { useState } from "react";
import { useCounterContext } from "@/context/CounterProvider";

export default function CounterButton({
  changeByNumber,
}: {
  changeByNumber: number;
}) {
  const { counter, setCounter } = useCounterContext();
  const word = changeByNumber >= 0 ? "Increase" : "Decrease";

  function changeCounter() {
    setCounter(counter + changeByNumber);
  }

  return (
    <button
      className="rounded-full font-bold p-3 border-2 border-white active:border-black active:bg-white active:text-black"
      onClick={changeCounter}
    >
      {word} by {changeByNumber}
    </button>
  );
}
