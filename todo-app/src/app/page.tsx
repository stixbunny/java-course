"use client";
export default function Home() {
  async function callApi() {
    console.log("calling api...");
    try {
      const response = await fetch("http://localhost:8080/hello-world-bean");
      if (!response.ok) {
        console.log("There was an error in the response from the API");
        throw new Error(`${response.status}: ${response.statusText}`);
      }
      console.log("API called successfully");
    } catch (error) {
      console.log("There was an error calling the API");
      console.log(error);
    }
  }
  return (
    <div className="flex flex-col items-center min-h-[100%] justify-center">
      <button
        className="py-2 px-4 rounded text-text font-bold bg-primary hover:bg-primaryhover"
        onClick={callApi}
      >
        Call API
      </button>
    </div>
  );
}
