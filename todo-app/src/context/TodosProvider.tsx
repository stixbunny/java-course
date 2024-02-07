import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import type Todo from "@/types/todo";

type Props = {
  children: ReactNode;
};

type TodosState = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

const Context = createContext<TodosState | undefined>(undefined);

export function TodosProvider({ children }: Props) {
  
  const initialTodos: Todo[] = [];
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  return (
    <Context.Provider value={{ todos, setTodos }}>{children}</Context.Provider>
  );
}

export function useTodosContext() {
  const context = useContext(Context);
  if (!context) {
    throw new Error("Use TodosProvider in parent component");
  }
  return context;
}
