import { useCounterContext } from "@/context/CounterProvider";

export default function ResetCounterButton() {

  const {resetCounter} = useCounterContext();

  return (
    <button
      className="mx-auto rounded-full font-bold p-3 border-2 border-white active:border-black active:bg-white active:text-black"
      onClick={resetCounter}
    >
      Reset
    </button>
  )

};