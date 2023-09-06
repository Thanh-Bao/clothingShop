  'use client'
  import { getProduct } from '@/app/products-service';
import { Detail } from '@/components/Detail';
import { Product } from '@/types';
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";


  const LoadingSpinner = () => {
    return (
      <div className="loading-spinner-overlay">
        <div className="loading-spinner">
          {/* Add your loading spinner animation here */}
        </div>
      </div>
    );
  };

  const ProductDetail = () => {
    const [product, setProduct] = useState<Product>();
    const [isLoading, setIsLoading] = useState(true); // Thêm state để kiểm tra trạng thái tải

    const id = useParams().id;

    useEffect(() => {
      const fetchProductDetails = async () => {
        if (id) {
          const productData = localStorage.getItem(`product_${id}`);
          if (productData) {
            setProduct(JSON.parse(productData));
            setIsLoading(false); // Tải xong, không còn đang tải
          } else {
            const product: Product = await getProduct(id as string);
            setProduct(product);
            localStorage.setItem(`product_${id}`, JSON.stringify(product));
            setIsLoading(false); // Tải xong, không còn đang tải
          }
        }
      };

      fetchProductDetails();
    }, [id]);

    return (
      <>
        {isLoading ? ( // Hiển thị LoadingSpinner khi đang tải
          <LoadingSpinner />
        ) : (
          <Detail product={product as Product} id={id as string} />
        )}
      </>
    );
  };

  export default ProductDetail;




