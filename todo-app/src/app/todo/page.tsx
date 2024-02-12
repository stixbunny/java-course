"use client";

import Todo, { NewTodo } from "@/types/todo";
import { useRouter } from "next/navigation";
import TodoForm from "./components/todoForm";
import { useAuthAndFetchContext } from "@/context/AuthAndFetchProvider";

interface formValues {
  description: string;
  targetDate: string;
}

export default function Todo() {
  const { username, fetchCreateTodo } = useAuthAndFetchContext();
  const router = useRouter();

  async function createTodo(values: formValues) {
    console.log("Creating todo...");
    const newTodo: NewTodo = {
      username: username,
      description: values.description,
      targetDate: values.targetDate,
      done: false,
    };
    await fetchCreateTodo(username, newTodo);

    console.log(newTodo);
    router.push("/todos");
  }

  return <TodoForm description="" targetDate="" onSubmit={createTodo} />;
}
