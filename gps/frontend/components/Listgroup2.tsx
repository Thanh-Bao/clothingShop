'use client';

import { Product } from "@/types";
import { Rating } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FcLike } from "react-icons/fc";

 interface Props {
  products: Product[];
}

const locale = "vi-VN";
const options = {
  style: "currency",
  currency: "VND",
};

export default function ListGroupWithLinks2({products}:Props) {
  const router = useRouter();

  const limitedProducts = products.slice(0, 5);

  const handleClickDetail = (filteredProduct:Product) => {
    router.push(`/product/${filteredProduct.ID}/Detail`)
};
  return (
    <div>
      
      <div className="flex items-center h-10 bg-sky-800 rounded-t-lg">
        <FcLike className="w-5 h-5 mx-2 text-red-600"/>
        <h1 className="text-white font-bold">TOP REVIEWS SẢN PHẨM</h1>
      </div>

      <div className="w-full py-4 bg-gray-100 rounded-b-lg">
        {limitedProducts.map((product) =>(
          <div key={product.ID} className="flex px-3 justify-between py-1 cursor-pointer" onClick={() => handleClickDetail(product)}>
            <div className="w-3/4">
              <div className="font-bold">{product.name}</div>
              <div className="">
                <Rating>
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                </Rating>
              </div>
              <div className="text-sm text-red-600">{new Intl.NumberFormat(locale, options).format(product.realPrice)}</div>
              <span className="text-xs line-through opacity-50">{new Intl.NumberFormat(locale, options).format(product.fakePrice)}</span>
            </div>
            <div className="max-w-[60px] max-h-[50px] w-1/4">
              <Image
                    src={product.img}
                    alt=""
                    width={250}
                    height={250}
                    layout="responsive"
                    className="rounded-md"
                  />
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}


