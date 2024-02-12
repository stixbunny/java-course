"use client";

import { useAuthAndFetchContext } from "@/context/AuthAndFetchProvider";

export default function Welcome() {
  const { username } = useAuthAndFetchContext();

  return <div className="">Welcome {username}!</div>;
}
