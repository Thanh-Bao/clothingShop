const API_URL = "http://gps.bao.name.vn/rest/api";

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


// {
//   "name"           : "Thanh Tung",
//   "phone"          : "0934565431",
//   "address"        : "Lô T2-1.2, Đường D1, Đ. D1, P.Tân Phú, TP.Thủ Đức, TP.Hồ Chí Minh.",
//   "note"           : null,
//   "SaleOrderItems" : [
//        {
//           "productID"    : "quan-short-nam-thun-co-dan",
//           "quantity"     : 2,
//           "color"        : "RED",
//           "size"         : "XL" 
//       },
//       {
//          "productID"    : "quan-short-nam-thun-co-dan",
//           "quantity"     : 3,
//           "color"        : "BLUE",
//           "size"         : "S" 
//       }
//   ]
// }