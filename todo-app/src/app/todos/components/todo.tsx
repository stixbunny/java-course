import type Todo from "@/types/todo";

interface Props {
  todo: Todo;
  deleteTodo: (id: number) => void;
}

export default function Todo({ todo, deleteTodo }: Props) {
  return (
    <>
      <td className="border border-borderhigh p-3 bg-backgroundmid">
        {todo.description}
      </td>
      <td className="border border-borderhigh p-3 bg-backgroundmid">
        {todo.done.toString()}
      </td>
      <td className="border border-borderhigh p-3 bg-backgroundmid">
        {new Date(todo.targetDate).toLocaleDateString("es-CL")}
      </td>
      <td className="border border-borderhigh p-3 bg-backgroundmid">
        <button
          className="py-2 px-4 rounded text-text font-bold bg-red-500 hover:bg-red-800"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </td>
    </>
  );
}
