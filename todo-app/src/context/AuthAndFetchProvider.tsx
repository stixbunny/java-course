import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import Todo, { NewTodo } from "@/types/todo";

type Props = {
  children: ReactNode;
};

type AuthAndFetchState = {
  number: number;
  setNumber: Dispatch<SetStateAction<number>>;
  isAuthenticated: boolean;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  username: string;
  token: string;
  fetchHelloPath: Function;
  fetchTodos: (username: string) => Promise<Todo[]>;
  deleteTodo: (username: string, id: number) => Promise<void>;
  fetchTodo: (username: string, id: number) => Promise<any>;
  fetchUpdateTodo: (username: string, id: number, todo: Todo) => Promise<void>;
  fetchCreateTodo: (username: string, todo: NewTodo) => Promise<void>;
  basicAuth: Function;
};

const AuthAndFetchContext = createContext<AuthAndFetchState | undefined>(
  undefined
);

export function AuthAndFetchProvider({ children }: Props) {
  const [number, setNumber] = useState<number>(0);
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [token, setToken] = useState<string>("");

  async function login(username: string, password: string): Promise<boolean> {
    console.log(`Connecting with ${token}...`);
    try {
      const response = await jwtAuth(username, password);
      if (response?.status === 200) {
        const tokenString = await response.json();
        const jwtToken = `Bearer ${tokenString.token}`;
        setAuthenticated(true);
        setUsername("stixbunny");
        setToken(jwtToken);
        console.log("Connected successfully");
        return true;
      } else {
        setAuthenticated(false);
        console.log("Error while logging in");
        return false;
      }
    } catch (error) {
      setAuthenticated(false);
      console.log("Error while login in");
      return false;
    }
  }

  function logout() {
    setAuthenticated(false);
    setUsername("");
    setToken("");
  }

  async function fetchWithErrors(
    url: string,
    method = "GET",
    hasBody = false,
    body = "",
    auth = token
  ) {
    console.log("calling api...");
    try {
      let response: Response;
      if (hasBody) {
        response = await fetch(url, {
          method: method,
          body: body,
          headers: new Headers({
            "Content-Type": "application/json",
            Authorization: auth,
          }),
        });
      } else {
        response = await fetch(url, {
          method: method,
          headers: new Headers({
            Authorization: auth,
          }),
        });
      }
      if (!response.ok) {
        console.log("There was an error in the response from the API");
        throw new Error(`${response.status}: ${response.statusText}`);
      }
      console.log("API called successfully");
      return response;
    } catch (error) {
      console.log("There was an error calling the API");
      console.log(error);
    }
  }

  async function fetchJson(url: string) {
    const response = await fetchWithErrors(url);
    return response?.json();
  }

  async function fetchDelete(url: string) {
    const response = await fetchWithErrors(url, "DELETE");
  }

  async function fetchPost(url: string, hasBody = false, body = "") {
    const response = await fetchWithErrors(url, "POST", hasBody, body);
  }

  async function fetchPut(url: string, body: string) {
    const response = await fetchWithErrors(url, "PUT", true, body);
  }

  async function fetchHelloPath(variable: string) {
    const json = await fetchJson(
      "http://localhost:8080/hello-world/path-variable/" + variable
    );
    return json.message;
  }

  async function fetchHelloWorldBean() {
    const json = await fetchJson("http://localhost:8080/hello-world-bean");
    return json.message;
  }

  async function fetchTodos(username: string): Promise<Todo[]> {
    const json = await fetchJson(
      `http://localhost:8080/users/${username}/todos`
    );
    if (json) return json;
    return [];
  }

  async function deleteTodo(username: string, id: number) {
    const response = await fetchDelete(
      `http://localhost:8080/users/${username}/todos/${id}`
    );
  }

  async function fetchTodo(username: string, id: number) {
    const json = await fetchJson(
      `http://localhost:8080/users/${username}/todos/${id}`
    );
    if (json) return json;
    return null;
  }

  async function fetchUpdateTodo(username: string, id: number, todo: Todo) {
    const response = await fetchPut(
      `http://localhost:8080/users/${username}/todos/${id}`,
      JSON.stringify(todo)
    );
  }

  async function fetchCreateTodo(username: string, todo: NewTodo) {
    const response = await fetchPost(
      `http://localhost:8080/users/${username}/todos`,
      true,
      JSON.stringify(todo)
    );
  }

  async function basicAuth(authToken: string) {
    return await fetchWithErrors(
      "http://localhost:8080/basicauth",
      "GET",
      false,
      "",
      authToken
    );
  }

  async function jwtAuth(username: string, password: string) {
    const creds = {
      username: username,
      password: password,
    };
    const response = await fetchWithErrors(
      "http://localhost:8080/authenticate",
      "POST",
      true,
      JSON.stringify(creds)
    );

    return response;
  }

  return (
    <AuthAndFetchContext.Provider
      value={{
        fetchHelloPath,
        fetchTodos,
        deleteTodo,
        fetchTodo,
        fetchUpdateTodo,
        fetchCreateTodo,
        basicAuth,
        number,
        setNumber,
        isAuthenticated,
        setAuthenticated,
        login,
        logout,
        username,
        token,
      }}
    >
      {children}
    </AuthAndFetchContext.Provider>
  );
}

export function useAuthAndFetchContext() {
  const context = useContext(AuthAndFetchContext);
  if (!context) {
    throw new Error("Use AuthAndFetchProvider in parent component");
  }
  return context;
}
