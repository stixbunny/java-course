export async function fetchWithErrors(
  url: string,
  method = "GET",
  hasBody = false,
  body = "",
  auth = "Basic c3RpeGJ1bm55OnBhc3N3b3Jk"
) {
  console.log("calling api...");
  try {
    let response: Response;
    if (hasBody) {
      response = await fetch(url, {
        method: method,
        body: body,
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: auth,
        }),
      });
    } else {
      response = await fetch(url, {
        method: method,
        headers: new Headers({
          Authorization: auth,
        }),
      });
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
