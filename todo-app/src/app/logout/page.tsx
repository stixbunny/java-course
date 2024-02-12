"use client";
import { useAuthAndFetchContext } from "@/context/AuthAndFetchProvider";
import { useEffect } from "react";

export default function Logout() {
  const { logout } = useAuthAndFetchContext();

  useEffect(() => {
    logout();
  }, [logout]);

  return (
    <div className="mx-auto">
      <p>Thanks for using the website.</p>
      <p>You're now logged out.</p>
    </div>
  );
}
