import Todo from "@/types/todo";
import fetchJson from "./fetchJson";

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
  return json;
}
