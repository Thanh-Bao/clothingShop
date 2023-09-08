const API_URL = "https://thanhconggps.com/rest/api";

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
  const data = await fetch(`${API_URL}/Product(ID='${id}',IsActiveEntity=true)`);
   return data.json();
};


// Getting all Albulm from fake store API
export async function getAlbum() {
  const data = await fetch(`${API_URL}/Album`);
  return data.json();
};

export async function getYoutube() {
  const data = await fetch(`${API_URL}/Video`);
  return data.json();
};

export async function getOffer() {
  const data = await fetch(`${API_URL}/Specialoffer`);
  return data.json();
};

export async function getDes() {
  const data = await fetch(`${API_URL}/Text`);
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


// http://localhost:4004/rest/api/SaleOrder
// {
//  "phone"          : "0934565431",
//  "address"        : "Lô T2-1.2, Đường D1, Đ. D1, P.Tân Phú, TP.Thủ Đức, TP.Hồ Chí Minh.",
//  "name"           :"Thanh Tung",
//  "SaleOrderItems" : [
//   {
//     //           "productID"    : 10003,
//     //           "quantity"     : 2,
//                   "realPrice" : 123,
//                 "fakePrice"   : 456
//  ]
// }

