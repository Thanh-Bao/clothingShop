// const API_URL = "http://localhost:4004/rest/api";
const API_URL = "https://thanhconggps.com/rest/api";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
// fetch(API_URL)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error('Fetch error:', error));

// Getting all products from fake store API
export async function getProducts() {
  const data = await fetch(`${API_URL}/Product`,{cache: "no-store"});
  return data.json();
};

// Getting all categories from fake store API
export async function getCategories() {
  const data = await fetch(`${API_URL}/Category`,{cache: "no-store"});
  return data.json();
};

// Getting all produts in a specfic category from fake store API
export async function getCategoyProducts(categoryName: string){
  const data = await fetch(
    `${API_URL}/Products/category/${categoryName}`,{cache: "no-store"}
  );
  return data.json();
};

// Getting specific by id
export async function getProduct(id: number | string) {
  const data = await fetch(`${API_URL}/Product(ID='${id}',IsActiveEntity=true)`,{cache: "no-store"});
   return data.json();
};

// {cache: "no-store"}
// Getting all Albulm from fake store API
export async function getAlbum(id: number | string) {
  const data = await fetch(`${API_URL}/Album?$filter=productID eq ${id}`,{cache: "no-store"});
  return data.json();
};

export async function getYoutube() {
  const data = await fetch(`${API_URL}/Video`,{cache: "no-store"});
  return data.json();
};

export async function getOffer(id: number | string) {
  const data = await fetch(`${API_URL}/Specialoffer?$filter=productID eq ${id}`,{cache: "no-store"});
  return data.json();
};

export async function getDes(id: number | string) {
  const data = await fetch(`${API_URL}/Text?$filter=productID eq ${id}`,{cache: "no-store"});
  return data.json();
};


