import { getProduct } from "@/app/products-service";
import { Detail } from "@/components/Detail";
import { Product } from "@/types";

export default async function ProductDetail({params}: any) {
const product: Product = await getProduct(params.id);

    return (
      <>
        <Detail product={product as Product} id={params} />
      </>
    );
  };




