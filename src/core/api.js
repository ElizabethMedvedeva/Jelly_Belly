import { API_URL } from "./constants";

export const findProduct = async (search) => {
  const url = new URL(`${API_URL}/cardss`);
  url.searchParams.append("search", search);
  url.searchParams.append("page", 1);
  url.searchParams.append("limit", 6);

  const result = await apiRequest(url);

  return result;
};

async function apiRequest(URL) {
  let response = await fetch(URL);
  const result = await response.json();
  return result;
}
export { apiRequest };
