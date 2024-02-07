"use client";
import { useAuthContext } from "@/context/AuthProvider";
import { useEffect } from "react";

export default function Logout() {
  const { logout } = useAuthContext();

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
