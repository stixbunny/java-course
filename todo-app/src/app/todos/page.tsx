"use client";
import { useTodosContext } from "@/context/TodosProvider";

export default function Todos() {
  const { todos, setTodos } = useTodosContext();

  return (
    <div className="">
      <table className="mx-auto table-auto border-collapse border border-slate-500">
        <thead>
          <tr>
            <td className="border border-slate-500 p-3 bg-slate-600">id</td>
            <td className="border border-slate-500 p-3 bg-slate-600">description</td>
            <td className="border border-slate-500 p-3 bg-slate-600">done?</td>
            <td className="border border-slate-500 p-3 bg-slate-600">target date</td>
          </tr>
        </thead>
        <tbody>
          {todos.map((t) => (
            <tr key={t.id}>
              <td className="border border-slate-500 p-3 bg-slate-700">{t.id}</td>
              <td className="border border-slate-500 p-3 bg-slate-700">{t.description}</td>
              <td className="border border-slate-500 p-3 bg-slate-700">{t.done}</td>
              <td className="border border-slate-500 p-3 bg-slate-700">{t.targetDate.toLocaleDateString("es-CL")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
