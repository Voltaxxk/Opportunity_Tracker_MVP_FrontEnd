import type { RequestOptions } from "../../interfaces/requestOptions.interface";

const defaultHeaders: HeadersInit = {
  "Content-Type": "application/json",
};

export const apiClient = async <T>(
  baseUrl: string,
  options: RequestOptions = {}
): Promise<T> => {
  const { method = "GET", body, headers = {}, query } = options;

  let url = baseUrl;
  if (query) {
    const queryParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)) {
      if (value !== undefined) {
        queryParams.set(key, value);
      }
    }
    url += `?${queryParams.toString()}`;
  }

  const response = await fetch(url, {
    method,
    headers: {
      ...defaultHeaders,
      ...headers,
    },
    ...(method !== "GET" && body && { body: JSON.stringify(body) }),
  });


  console.log({response})
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error ${response.status}: ${errorText}`);
  }

  return response.json();
};