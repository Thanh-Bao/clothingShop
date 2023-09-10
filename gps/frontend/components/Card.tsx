"use client";

import { CardProps, Product } from "@/types";
import { Rating } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AddToCart } from "./AddToCart";

export const ProductCard = ({ product_name, group, products }: CardProps) => {
  const router = useRouter();

  const locale = "vi-VN";
  const options = {
    style: "currency",
    currency: "VND",
  };

  // Filter products with the specified category

  const selectedProducts = products.filter(
    (product: Product) => product.category === product_name
  );

  const groupClass = group == 2 ? "card1" : "card";

  const handleClickDetail = (filteredProduct:Product) => {
    router.push(`/product/${filteredProduct.ID}/Detail`)
};


  return (
    <div className="container">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 min-[320px]:grid-cols-1">
        {selectedProducts.map((filteredProduct) => (
          <div className={`${groupClass}`} key={filteredProduct.ID}>
            <div className="min-h-[150px]" onClick={() => handleClickDetail(filteredProduct)}>
              <div className="group max-h-[160px] overflow-hidden">
                {/* ảnh sản phẩm */}
                <Image
                  src={filteredProduct.img}
                  alt=""
                  width={250}
                  height={250}
                  layout="responsive"
                  className="transform-gpu transition-transform duration-300 scale-100 group-hover:scale-125"
                />
              </div>
            </div>
            <div className="pb-2 px-2">
              {/* tên sản phẩm */}
              <button className="product_title h-10" onClick={() => handleClickDetail(filteredProduct)}>
                {filteredProduct.name}
              </button>
              {/* Giá sản phẩm */}
              <div className="">
                {filteredProduct.fakePrice !== null ? (
                  <span className="text-xl font-bold text-red-700">
                    {new Intl.NumberFormat(locale, options).format(
                      filteredProduct.realPrice
                    )}
                  </span>
                ) : (
                  <span className="text-xs line-through opacity-50">N/A</span>
                )}
                <div className="flex items-center gap-2  py-1">
                  {filteredProduct.fakePrice !== null ? (
                    <span className="text-xs line-through opacity-50">
                      {new Intl.NumberFormat(locale, options).format(
                        filteredProduct.fakePrice
                      )}
                    </span>
                  ) : (
                    <span className="text-xs line-through opacity-50">N/A</span>
                  )}
                  <span className="discount_percents">Save 20%</span>
                </div>
              </div>
              {/* rating product */}
              <div className="py-1">
                <Rating>
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star filled={false} />
                  <p className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                    4.95 out of 5
                  </p>
                </Rating>
              </div>
              {/* phần này là phần button action */}
              <AddToCart product={filteredProduct} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
