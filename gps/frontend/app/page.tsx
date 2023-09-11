import { Hero } from "@/components/Hero";
import { Product, video } from "@/types";
import { getProducts, getYoutube } from "./products-service";

export default async function Home() {

  const products: Product[] = await getProducts();
  const video: video[] = await getYoutube();

  return (
    <Hero products={products}
          video={video} />
  );
  
}


