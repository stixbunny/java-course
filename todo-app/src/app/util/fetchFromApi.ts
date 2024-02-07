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
