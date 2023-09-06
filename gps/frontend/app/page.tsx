import { Hero } from "@/components/Hero";
import { getProducts, getYoutube } from "./products-service";


export default async function Home() {
  const products = await getProducts();
  const video = await getYoutube();
  return (
    <Hero products={products}
          video={video} />
  );
  
}
