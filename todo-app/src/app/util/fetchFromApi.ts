import Todo, { NewTodo } from "@/types/todo";
import {
  fetchDelete,
  fetchJson,
  fetchPost,
  fetchPut,
  fetchWithErrors,
} from "./customFetch";

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
  const response = await fetchDelete(
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

export async function fetchUpdateTodo(
  username: string,
  id: number,
  todo: Todo
) {
  const response = await fetchPut(
    `http://localhost:8080/users/${username}/todos/${id}`,
    JSON.stringify(todo)
  );
}

export async function fetchCreateTodo(username: string, todo: NewTodo) {
  const response = await fetchPost(
    `http://localhost:8080/users/${username}/todos`,
    true,
    JSON.stringify(todo)
  );
}
