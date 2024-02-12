"use client";
import { useAuthAndFetchContext } from "@/context/AuthAndFetchProvider";
import Link from "next/link";

export default function TheHeader() {
  const { isAuthenticated } = useAuthAndFetchContext();

  return (
    <header className="w-100 flex flex-row items-center gap-4 justify-between border border-borderhigh bg-backgroundmid">
      <div className="p-4">Todo Spring-React App</div>
      <nav className="flex flex-row items-center">
        <Link
          href="/"
          className="p-4 border-x border-borderhigh hover:bg-backgroundhigh"
        >
          Home
        </Link>
        <Link
          href="/todos"
          className="p-4 border-r border-borderhigh hover:bg-backgroundhigh"
        >
          Todos
        </Link>
        {!isAuthenticated && (
          <Link href="/login" className="p-4 hover:bg-backgroundhigh">
            Login
          </Link>
        )}
        {isAuthenticated && (
          <Link href="/logout" className="p-4 hover:bg-backgroundhigh">
            Logout
          </Link>
        )}
      </nav>
    </header>
  );
}
