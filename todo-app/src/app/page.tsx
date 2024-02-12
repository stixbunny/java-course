"use client";

import { useAuthAndFetchContext } from "@/context/AuthAndFetchProvider";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  const { fetchHelloPath } = useAuthAndFetchContext();

  async function callApi() {
    // const message = await fetchHelloWorldBean();
    const message = await fetchHelloPath("Milenko");
    setMessage(message);
  }

  return (
    <div className="flex flex-col gap-4 items-center min-h-[100%] justify-center">
      <button
        className="py-2 px-4 rounded text-text font-bold bg-primary hover:bg-primaryhover"
        onClick={callApi}
      >
        Call API
      </button>
      <p className="font-bold italic">{message}</p>
    </div>
  );
}
