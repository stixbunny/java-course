"use client";
import { Component } from "react";
import CounterButtons from "@/components/CounterButtons";
import Counter from "@/components/Counter";
import ResetCounterButton from "@/components/ResetCounterButton";
import { CounterProvider } from "@/context/CounterProvider";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-24 gap-3">
      <div className="w-full max-w-xs mx-auto">
        <form
          action="post"
          className="flex flex-col gap-4 bg-white shadow-md rounded p-6 mb-4"
        >
          <div className="flex flex-col gap-2">
            <label
              className="block text-gray-700 text-sm font-bold"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="block text-gray-700 text-sm font-bold"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
