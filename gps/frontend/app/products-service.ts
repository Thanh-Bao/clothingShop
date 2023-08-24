const API_URL = "https://gps.bao.name.vn/rest/api";

// Getting all products from fake store API
export async function getProducts() {
  const data = await fetch(`${API_URL}/Product`);
  return data.json();
};

// Getting all categories from fake store API
export async function getCategories() {
  const data = await fetch(`${API_URL}/Category`);
  return data.json();
};

// Getting all produts in a specfic category from fake store API
export async function getCategoyProducts(categoryName: string){
  const data = await fetch(
    `${API_URL}/Products/category/${categoryName}`
  );
  return data.json();
};

// Getting specific product by id
export async function getProduct(id: number | string) {
  const data = await fetch(`${API_URL}/products/${id}`);
  return data.json();
};
