import { Hero } from "@/components/Hero";
import { Product } from "@/types";




export default function Home({ products, categories }: any) {
  return (
    <Hero categories={categories}
          products={products} />
       
  );
  
}




