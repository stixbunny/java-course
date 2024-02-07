"use client";
import { useTodosContext } from "@/context/TodosProvider";
import { useEffect } from "react";
import { fetchTodos } from "../util/fetchFromApi";

export default function Todos() {
  const { todos, setTodos } = useTodosContext();

  useEffect(() => {
    (async function () {
      const newTodos = await fetchTodos("in28minutes");
      setTodos(newTodos);
    })();
  }, [setTodos]);

  return (
    <div className="align-middle">
      <table className="mx-auto table-auto border-collapse border border-slate-500">
        <thead>
          <tr>
            <td className="border border-borderhigh p-3 bg-backgroundhigh">
              id
            </td>
            <td className="border border-borderhigh p-3 bg-backgroundhigh">
              description
            </td>
            <td className="border border-borderhigh p-3 bg-backgroundhigh">
              done?
            </td>
            <td className="border border-borderhigh p-3 bg-backgroundhigh">
              target date
            </td>
          </tr>
        </thead>
        <tbody>
          {todos.map((t) => (
            <tr key={t.id}>
              <td className="border border-borderhigh p-3 bg-backgroundmid">
                {t.id}
              </td>
              <td className="border border-borderhigh p-3 bg-backgroundmid">
                {t.description}
              </td>
              <td className="border border-borderhigh p-3 bg-backgroundmid">
                {t.done.toString()}
              </td>
              <td className="border border-borderhigh p-3 bg-backgroundmid">
                {new Date(t.targetDate).toLocaleDateString("es-CL")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
