import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type Props = {
  children: ReactNode;
};

type CounterState = {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
  resetCounter: () => void;
};

const Context = createContext<CounterState | undefined>(undefined);

export function CounterProvider({ children }: Props) {
  const [counter, setCounter] = useState<number>(0);

  function resetCounter() {
    setCounter(0);
  }
  return (
    <Context.Provider value={{ counter, setCounter, resetCounter }}>
      {children}
    </Context.Provider>
  );
}

export function useCounterContext() {
  const context = useContext(Context);
  if (!context) {
    throw new Error("Use CounterProvider in parent component");
  }
  return context;
}
