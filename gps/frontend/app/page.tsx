import { Hero } from "@/components/Hero";
import { getProducts } from "./products-service";


export default async function Home() {
  const products = await getProducts();
  console.log(products)
  return (
    <Hero products={products} />
  );
  
}
