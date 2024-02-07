"use client";
import { useTodosContext } from "@/context/TodosProvider";
import { useCallback, useEffect } from "react";
import { fetchTodos, deleteTodo as deleteTodoApi } from "../util/fetchFromApi";
import { useAuthContext } from "@/context/AuthProvider";
import Todo from "./components/todo";

export default function Todos() {
  const { todos, setTodos } = useTodosContext();

  let { username } = useAuthContext();

  const deleteTodo = async (id: number) => {
    await deleteTodoApi(username, id);
    refresh();
  };

  const refresh = useCallback(() => {
    (async () => {
      const newTodos = await fetchTodos(username);
      setTodos(newTodos);
    })();
  }, [setTodos, username]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return (
    <div className="align-middle">
      <table className="mx-auto table-auto border-collapse border border-slate-500">
        <thead>
          <tr>
            <td className="font-bold border border-borderhigh p-3 bg-backgroundhigh">
              Description
            </td>
            <td className="font-bold border border-borderhigh p-3 bg-backgroundhigh">
              Done?
            </td>
            <td className="font-bold border border-borderhigh p-3 bg-backgroundhigh">
              Target Date
            </td>
            <td className="font-bold border border-borderhigh p-3 bg-backgroundhigh"></td>
          </tr>
        </thead>
        <tbody>
          {todos.map((t) => (
            <tr key={t.id}>
              <Todo todo={t} deleteTodo={deleteTodo} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
