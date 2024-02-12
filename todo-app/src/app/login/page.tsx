"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthAndFetchContext } from "@/context/AuthAndFetchProvider";

export default function Home() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const { login } = useAuthAndFetchContext();

  const router = useRouter();

  const [success, setSuccess] = useState<boolean | null>(null);

  async function handleSignIn() {
    setSuccess(await login(form.username, form.password));
  }

  function ErrorMessage() {
    if (success === false) {
      return (
        <div className="errorMessage text-red-500 text-xs italic">
          Authentication error, please check your credentials.
        </div>
      );
    }
  }

  function SuccessMessage() {
    if (success === true) {
      return (
        <div className="successMessage text-blue-500 text-xs italic font-bold">
          Authenticated successfully!
        </div>
      );
    }
  }

  useEffect(() => {
    if (success === true) {
      router.push("/welcome");
    }
  }, [router, success]);

  return (
    <div className="w-full max-w-xs mx-auto">
      <form
        action="post"
        className="flex flex-col gap-4 bg-white shadow-md rounded p-6 mb-4"
      >
        <SuccessMessage />
        <ErrorMessage />
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
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            value={form.username}
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
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            value={form.password}
          />
        </div>
        <div className="flex items-center justify-between gap-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
