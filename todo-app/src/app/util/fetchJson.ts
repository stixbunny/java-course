export default async function fetchJson(url: string) {
  console.log("calling api...");
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log("There was an error in the response from the API");
      throw new Error(`${response.status}: ${response.statusText}`);
    }
    console.log("API called successfully");
    const json = await response.json();
    return json;
  } catch (error) {
    console.log("There was an error calling the API");
    console.log(error);
  }
}
