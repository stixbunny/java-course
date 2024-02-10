"use client";

import { fetchTodo, fetchUpdateTodo } from "@/app/util/fetchFromApi";
import { useAuthContext } from "@/context/AuthProvider";
import { useEffect, useState } from "react";
import Todo from "@/types/todo";
import { useRouter } from "next/navigation";
import TodoForm from "../components/todoForm";

interface Params {
  params: {
    id: number;
  };
}

interface formValues {
  description: string;
  targetDate: string;
}

export default function Todo({ params }: Params) {
  const { username } = useAuthContext();
  const [todo, setTodo] = useState<Todo | null>(null);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const foundTodo = await fetchTodo(username, params.id);
      setTodo(foundTodo);
    })();
  }, [params.id, username]);

  async function updateTodo(values: formValues) {
    console.log("Updating todo...");
    const updatedTodo: Todo = {
      id: params.id,
      username: username,
      description: values.description,
      targetDate: values.targetDate,
      done: false,
    };
    await fetchUpdateTodo(username, params.id, updatedTodo);
    console.log(updatedTodo);
    router.push("/todos");
  }

  if (todo === null) {
    return;
  }

  return (
    <TodoForm
      id={params.id}
      description={todo.description}
      targetDate={todo.targetDate}
      onSubmit={updateTodo}
    />
  );
}
