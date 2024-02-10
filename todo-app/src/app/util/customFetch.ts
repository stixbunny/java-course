export async function fetchWithErrors(
  url: string,
  method = "GET",
  hasBody = false,
  body = ""
) {
  console.log("calling api...");
  try {
    let response: Response;
    if (hasBody) {
      response = await fetch(url, {
        method: method,
        body: body,
        headers: new Headers({ "content-type": "application/json" }),
      });
    } else {
      response = await fetch(url, { method: method });
    }
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

export async function fetchPost(url: string, hasBody = false, body = "") {
  const response = await fetchWithErrors(url, "POST", hasBody, body);
}

export async function fetchPut(url: string, body: string) {
  const response = await fetchWithErrors(url, "PUT", true, body);
}
