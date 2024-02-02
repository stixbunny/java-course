"use client";
import { Component } from "react";
import CounterButtons from "@/components/CounterButtons";
import Counter from "@/components/Counter";
import ResetCounterButton from "@/components/ResetCounterButton";
import { CounterProvider } from "@/context/CounterProvider";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-24 gap-3">
      <CounterProvider>
        <Counter />
        <CounterButtons value={1} />
        <CounterButtons value={2} />
        <CounterButtons value={3} />
        <ResetCounterButton />
      </CounterProvider>
    </main>
  );
}
