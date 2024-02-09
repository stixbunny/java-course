"use client";

import { fetchTodo } from "@/app/util/fetchFromApi";
import { useAuthContext } from "@/context/AuthProvider";
import Todo from "@/types/todo";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

interface Params {
  params: {
    id: number;
  };
}

interface formValues {
  description: string;
  targetDate: string;
}

export default function Todo({ params }: Params) {
  const { username } = useAuthContext();
  const [todo, setTodo] = useState<Todo | null>(null);

  useEffect(() => {
    (async () => {
      const foundTodo = await fetchTodo(username, params.id);
      setTodo(foundTodo);
    })();
  }, [params.id, username]);

  function updateTodo(values: formValues) {
    console.log(values);
  }

  function validate(values: formValues) {
    console.log("Validating...");
    let errors: formValues = { description: "", targetDate: "" };
    if (values.description.length < 5) {
      errors.description = "Enter at least 5 characters.";
    }
    if (values.targetDate === null) {
      errors.targetDate = "Enter a target date.";
    }
    return errors;
  }

  if (todo === null) {
    return;
  }

  return (
    <div className="w-full max-w-sm mx-auto">
      <h1 className="text-bold text-text mb-2 text-center">Todo #{todo.id}</h1>
      <Formik
        initialValues={{
          description: todo.description,
          targetDate: todo.targetDate,
        }}
        onSubmit={updateTodo}
        validate={validate}
      >
        {(props) => (
          <Form className="flex flex-col gap-4 bg-backgroundmid shadow-md rounded p-6 mb-4">
            <label
              className="block text-text text-sm font-bold"
              htmlFor="description"
            >
              Description
            </label>
            <Field
              className="bg-backgroundhigh shadow appearance-none rounded w-full py-2 px-3 text-text leading-tight focus:outline-none focus:shadow-outline"
              name="description"
              type="text"
            />
            <ErrorMessage name="description" />
            <label
              className="block text-text text-sm font-bold"
              htmlFor="targetDate"
            >
              Date
            </label>
            <Field
              className="bg-backgroundhigh shadow appearance-none rounded w-full py-2 px-3 text-text leading-tight focus:outline-none focus:shadow-outline"
              name="targetDate"
              type="date"
            />
            <ErrorMessage name="targetDate" />
            <button
              className="self-end bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
