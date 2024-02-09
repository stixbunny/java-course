"use client";

import { fetchTodo } from "@/app/util/fetchFromApi";
import { useAuthContext } from "@/context/AuthProvider";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Todo from "@/types/todo";
import { useRouter } from "next/navigation";

interface formValues {
  description: string;
  targetDate: string;
}

interface formErrors {
  description?: string;
  targetDate?: string;
}

interface NewTodo {
  username: string;
  description: string;
  targetDate: string;
  done: boolean;
}

export default function Todo() {
  const { username } = useAuthContext();
  const router = useRouter();

  function createTodo(values: formValues) {
    console.log("Creating todo...");
    const newTodo: NewTodo = {
      username: username,
      description: values.description,
      targetDate: values.targetDate,
      done: false,
    };
    //Create todo function

    console.log(newTodo);
    router.push("/todos");
  }

  function validate(values: formValues) {
    console.log("Validating...");
    let errors: formErrors = {};
    if (values.description.length < 5) {
      errors.description = "Enter at least 5 characters.";
    }
    if (values.targetDate === null) {
      errors.targetDate = "Enter a target date.";
    }
    return errors;
  }

  return (
    <div className="w-full max-w-sm mx-auto">
      <h1 className="text-bold text-text mb-2 text-center">
        Add New Todo Details
      </h1>
      <Formik
        initialValues={{
          description: "",
          targetDate: (new Date()).toDateString(),
        }}
        onSubmit={createTodo}
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
              placeholder="Learn to Fly..."
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
