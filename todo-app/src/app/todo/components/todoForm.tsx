import { ErrorMessage, Field, Form, Formik } from "formik";

interface Props {
  id?: number;
  description: string;
  targetDate: string;
  onSubmit: (values: formValues) => Promise<void>;
}

interface formValues {
  description: string;
  targetDate: string;
}

interface formErrors {
  description?: string;
  targetDate?: string;
}

export default function TodoForm({
  id,
  description,
  targetDate,
  onSubmit,
}: Props) {
  let title = "";
  let newDescription = "";
  let newTargetDate = "";
  let button = "";

  if (id) {
    // Update a todo
    title = `Todo #${id}`;
    newDescription = description;
    newTargetDate = targetDate;
    button = "Update";
  } else {
    // Create a todo
    const date = new Date();
    title = `Add New Todo Details`;
    newDescription = "";
    newTargetDate = date.toISOString().split("T")[0];
    button = "Create";
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
      <h1 className="text-bold text-text mb-2 text-center">{title}</h1>
      <Formik
        initialValues={{
          description: newDescription,
          targetDate: newTargetDate,
        }}
        onSubmit={onSubmit}
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
              {button}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
