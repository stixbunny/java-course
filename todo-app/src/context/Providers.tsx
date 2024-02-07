"use client";

import { ReactNode } from "react";
import { TodosProvider } from "./TodosProvider";
import { AuthProvider } from "./AuthProvider";

type Props = {
  children: ReactNode;
};

export function Providers({ children }: Props) {
  return (
    <TodosProvider>
      <AuthProvider>{children}</AuthProvider>
    </TodosProvider>
  );
}
