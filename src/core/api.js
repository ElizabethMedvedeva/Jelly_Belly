async function apiRequest(URL) {
  let response = await fetch(URL);
  const result = await response.json();
  return result;
}
export { apiRequest };