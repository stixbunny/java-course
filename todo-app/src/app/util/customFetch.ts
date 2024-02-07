export async function fetchWithErrors(url: string, method = "GET") {
  console.log("calling api...");
  try {
    const response = await fetch(url, { method: method });
    if (!response.ok) {
      console.log("There was an error in the response from the API");
      throw new Error(`${response.status}: ${response.statusText}`);
    }
    console.log("API called successfully");
    return response;
  } catch (error) {
    console.log("There was an error calling the API");
    console.log(error);
  }
}

export async function fetchJson(url: string) {
  const response = await fetchWithErrors(url);
  return response?.json();
}

export async function fetchDelete(url: string) {
  const response = await fetchWithErrors(url, "DELETE");
}

export async function fetchPost(url: string) {
  const response = await fetchWithErrors(url, "POST");
}
