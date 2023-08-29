'use client'
import { getProduct } from '@/app/products-service';
import { Detail } from '@/components/Detail';
import { Product } from '@/types';
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";


const ProductDetail = () => {

  const [product, setProduct] = useState<Product>();

  const id = useParams().id;

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (id) {
        const product: Product = await getProduct(id as string);
        setProduct(product);
      }
    };
  fetchProductDetails();
  }, [id]);

  return (
    <>
    {product !== undefined ? (
      <Detail product={product as Product} id={id as string} />
    ) : (
      <div>Loading...</div>
    )}
  </>
  )
};

export default ProductDetail;




