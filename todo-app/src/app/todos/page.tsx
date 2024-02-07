"use client";
import { useTodosContext } from "@/context/TodosProvider";
import { useCallback, useEffect } from "react";
import { fetchTodos, deleteTodo as deleteTodoApi } from "../util/fetchFromApi";

export default function Todos() {
  const { todos, setTodos } = useTodosContext();

  async function deleteTodo(id: number) {
    await deleteTodoApi("in28minutes", id);
    refresh();
  }

  const refresh = useCallback(() => {
    (async () => {
      const newTodos = await fetchTodos("in28minutes");
      setTodos(newTodos);
    })();
  }, [setTodos]);

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
              <td className="border border-borderhigh p-3 bg-backgroundmid">
                {t.description}
              </td>
              <td className="border border-borderhigh p-3 bg-backgroundmid">
                {t.done.toString()}
              </td>
              <td className="border border-borderhigh p-3 bg-backgroundmid">
                {new Date(t.targetDate).toLocaleDateString("es-CL")}
              </td>
              <td className="border border-borderhigh p-3 bg-backgroundmid">
                <button
                  className="py-2 px-4 rounded text-text font-bold bg-red-500 hover:bg-red-800"
                  onClick={() => deleteTodo(t.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
