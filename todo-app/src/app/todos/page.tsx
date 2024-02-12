"use client";
import { useTodosContext } from "@/context/TodosProvider";
import { useCallback, useEffect } from "react";
import Todo from "./components/todo";
import { useRouter } from "next/navigation";
import { useAuthAndFetchContext } from "@/context/AuthAndFetchProvider";

export default function Todos() {
  const { todos, setTodos } = useTodosContext();
  const router = useRouter();

  const {
    username,
    fetchTodos,
    deleteTodo: deleteTodoApi,
  } = useAuthAndFetchContext();

  const deleteTodo = async (id: number) => {
    await deleteTodoApi(username, id);
    refresh();
  };

  function addNewTodo() {
    router.push("/todo");
  }

  const refresh = useCallback(() => {
    (async () => {
      const newTodos = await fetchTodos(username);
      setTodos(newTodos);
    })();
  }, [setTodos, username]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  console.log(todos);

  return (
    <div className="flex flex-col gap-4 max-w-3xl mx-auto justify-center">
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
      <button
        className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={addNewTodo}
      >
        Add New Todo
      </button>
    </div>
  );
}
