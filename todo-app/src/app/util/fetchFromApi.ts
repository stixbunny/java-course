import Todo from "@/types/todo";
import { fetchDelete, fetchJson, fetchWithErrors } from "./customFetch";

export async function fetchHelloPath(variable: string) {
  const json = await fetchJson(
    "http://localhost:8080/hello-world/path-variable/" + variable
  );
  return json.message;
}

export async function fetchHelloWorldBean() {
  const json = await fetchJson("http://localhost:8080/hello-world-bean");
  return json.message;
}

export async function fetchTodos(username: string): Promise<Todo[]> {
  const json = await fetchJson(`http://localhost:8080/users/${username}/todos`);
  if (json) return json;
  return [];
}

export async function deleteTodo(username: string, id: number) {
  const response = fetchDelete(
    `http://localhost:8080/users/${username}/todos/${id}`
  );
}

export async function fetchTodo(username: string, id: number) {
  const json = await fetchJson(
    `http://localhost:8080/users/${username}/todos/${id}`
  );
  if (json) return json;
  return null;
}
