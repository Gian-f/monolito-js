async function fetchProducts() {
  const API_URL = "http://localhost:3000/api-docs/Produto";
  const response = await fetch(API_URL);
  return response.json();
}

export { fetchProducts };