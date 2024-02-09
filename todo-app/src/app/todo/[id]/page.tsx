"use client";

import { fetchTodo } from "@/app/util/fetchFromApi";
import { useAuthContext } from "@/context/AuthProvider";
import Todo from "@/types/todo";
import { useEffect, useState } from "react";

interface Params {
  params: {
    id: number;
  };
}

export default function Todo({ params }: Params) {
  console.log(`parameter ${params.id} received`);

  const { username } = useAuthContext();
  const [todo, setTodo] = useState<Todo>();

  useEffect(() => {
    (async () => {
      const foundTodo = await fetchTodo(username, params.id);
      setTodo(foundTodo);
    })();
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto">
      <h1 className="text-bold text-text mb-2 text-center">Todo #{todo?.id}</h1>
      <form
        action="update"
        className="flex flex-col gap-4 bg-backgroundmid shadow-md rounded p-6 mb-4"
      >
        <label
          className="block text-text text-sm font-bold"
          htmlFor="description"
        >
          Description
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-text leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          type="text"
          placeholder="This is a test"
          value={todo?.description}
        />
      </form>
    </div>
  );
}
