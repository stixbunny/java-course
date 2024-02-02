import { useCounterContext } from "@/context/CounterProvider"

export default function Counter() {

  const {counter, setCounter} = useCounterContext();

  return (
    <div className="mx-auto font-bold text-lg">{counter}</div>
  )
}