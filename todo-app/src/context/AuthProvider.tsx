import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

import type { successType } from "@/app/login/page";

type Props = {
  children: ReactNode;
};

type AuthState = {
  number: number;
  setNumber: Dispatch<SetStateAction<number>>;
  isAuthenticated: boolean;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
  login: (username: string, password: string) => successType;
  logout: () => void;
};

const Context = createContext<AuthState | undefined>(undefined);

export function AuthProvider({ children }: Props) {
  const [number, setNumber] = useState<number>(0);
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);

  function login(username: string, password: string): successType {
    if (username === "stixbunny" && password === "password") {
      setAuthenticated(true);
      return 1;
    } else if (username === "stixbunny") {
      setAuthenticated(false);
      return 3;
    } else {
      setAuthenticated(false);
      return 2;
    }
  }

  function logout() {
    setAuthenticated(false);
  }

  return (
    <Context.Provider
      value={{
        number,
        setNumber,
        isAuthenticated,
        setAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(Context);
  if (!context) {
    throw new Error("Use AuthProvider in parent component");
  }
  return context;
}
