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

type TodosState = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

type Todo = {
  id: number;
  description: string;
  done: boolean;
  targetDate: Date;
};

const Context = createContext<TodosState | undefined>(undefined);

export function TodosProvider({ children }: Props) {
  const today = new Date();
  const targetDate = new Date(
    today.getFullYear() + 1,
    today.getMonth(),
    today.getDay()
  );
  const initialTodos: Todo[] = [
    { id: 1, description: "Learn AWS", done: false, targetDate: targetDate },
    { id: 2, description: "Learn GCP", done: false, targetDate: targetDate },
    { id: 3, description: "Learn Flask", done: false, targetDate: targetDate },
    {
      id: 4,
      description: "Learn Spring Boot",
      done: false,
      targetDate: targetDate,
    },
  ];
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
