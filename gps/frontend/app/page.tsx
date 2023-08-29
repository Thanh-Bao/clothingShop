import { Hero } from "@/components/Hero";
import { getProducts } from "./products-service";


export default async function Home() {
  const products = await getProducts();
  return (
    <Hero products={products} />
  );
  
}
