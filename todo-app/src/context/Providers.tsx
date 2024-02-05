"use client";

import { ReactNode } from "react";
import { TodosProvider } from "./TodosProvider";

type Props = {
  children: ReactNode;
};

export function Providers({ children }: Props) {
  return <TodosProvider>{children}</TodosProvider>;
}
