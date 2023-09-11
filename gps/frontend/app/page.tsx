import { Hero } from "@/components/Hero";
import { Product, video } from "@/types";
import { getProducts, getYoutube } from "./products-service";

export default async function Home() {

  // const products= await getServerSideProps()
  // console.log(products.props.products)
  const products: Product[] = await getProducts();
  const video: video[] = await getYoutube();

  return (
    <Hero products={products}
          video={video} />
  );
  
}

// export async function getServerSideProps() {

//     // Call an external API endpoint to get products.
//   // You can use any data fetching library and can also query the database directly.
//   const products: Product[] = await getProducts();
//   const video: video[] = await getYoutube();

//   // By returning { props: { products } }, the Home component
//   // will receive `products` as a prop at build time in Production
//   return {
//     props: {
//       products,
//       video,
//     },
//   };

// }


