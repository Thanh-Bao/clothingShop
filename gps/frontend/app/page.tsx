import { Hero } from "@/components/Hero";



export default function Home({ products, categories }:any) {
console.log(products)
  return (
    <Hero categories={categories}
          products={products} />
       
  );
  
}




