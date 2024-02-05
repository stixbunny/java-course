"use client";
import { useTodosContext } from "@/context/TodosProvider";

export default function Todos() {
  const { todos, setTodos } = useTodosContext();

  return (
    <div className="">
      <table className="mx-auto">
        <thead>
          <tr>
            <td>id</td>
            <td>description</td>
            <td>done?</td>
            <td>target date</td>
          </tr>
        </thead>
        <tbody>
          {todos.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.description}</td>
              <td>{t.done}</td>
              <td>{t.targetDate.toLocaleDateString("es-CL")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
