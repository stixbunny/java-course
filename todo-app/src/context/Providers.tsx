"use client";

import { ReactNode } from "react";
import { TodosProvider } from "./TodosProvider";
import { AuthAndFetchProvider } from "./AuthAndFetchProvider";

type Props = {
  children: ReactNode;
};

export function Providers({ children }: Props) {
  return (
    <TodosProvider>
      <AuthAndFetchProvider>{children}</AuthAndFetchProvider>
    </TodosProvider>
  );
}
