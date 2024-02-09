import type Todo from "@/types/todo";
import { useRouter } from "next/navigation";

interface Props {
  todo: Todo;
  deleteTodo: (id: number) => void;
}

export default function Todo({ todo, deleteTodo }: Props) {
  const router = useRouter();

  function updateTodo() {
    console.log(`redirecting to /todo/${todo.id}`)
    router.push(`/todo/${todo.id}`);
  }

  return (
    <>
      <td className="border border-borderhigh p-3 bg-backgroundmid">
        {todo.description}
      </td>
      <td className="border border-borderhigh p-3 bg-backgroundmid">
        {todo.done.toString()}
      </td>
      <td className="border border-borderhigh p-3 bg-backgroundmid">
        {/* {new Date(todo.targetDate).toLocaleDateString("es-CL")} */}
        {(new Date(todo.targetDate)).toLocaleDateString()}
      </td>
      <td className="p-3 border border-borderhigh bg-backgroundmid">
        <div className="flex flex-row gap-3">
          <button
            className="py-2 px-4 rounded text-text font-bold bg-red-500 hover:bg-red-800"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
          <button
            className="py-2 px-4 rounded text-text font-bold bg-yellow-500 hover:bg-yellow-800"
            onClick={() => updateTodo()}
          >
            Update
          </button>
        </div>
      </td>
    </>
  );
}
