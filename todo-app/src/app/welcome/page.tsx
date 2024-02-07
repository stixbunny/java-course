"use client";

import { useAuthContext } from "@/context/AuthProvider";
export default function Welcome() {
  const { username } = useAuthContext();

  return <div className="">Welcome {username}!</div>;
}
