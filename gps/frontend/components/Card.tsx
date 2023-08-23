"use client";
import { ProductList } from "@/constants";
import { CardProps } from "@/types";
import { Rating } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AddToCart } from "./AddToCart";


export const ProductCard = ({ product_name, group }: CardProps) => {
  const router = useRouter();

  // Tìm danh mục sản phẩm tương ứng với tên thực thể truyền vào
  const productCategory = ProductList.find((category) =>
    category.hasOwnProperty(product_name)
  );

  if (!productCategory) {
    return null; // Xử lý trường hợp không tìm thấy danh mục sản phẩm
  }

  // Sử dụng kiểu "index signature" để truy cập vào thuộc tính của đối tượng
  const selectedProducts =
    productCategory[product_name as keyof typeof productCategory];

  // Kiểm tra số lượng sản phẩm và thiết lập lớp cho grid
  const gridClass =
    selectedProducts.length < 4 ? "justify-start" : "justify-between";
  const productClass = selectedProducts.length < 4 ? "mr-3" : "";
  const groupClass = group == 2 ? "card1" : "card";

  return (
    <div className="container mx-auto">
      <div className={`lg:grid-cols-4 ${gridClass} flex`}>
        {selectedProducts.map((properties, index) => (
          // eslint-disable-next-line react/jsx-key
          <div
            className={`${groupClass} ${productClass} card`}
            key={properties.id}
          >
            <div>
              <div className="group overflow-hidden">
                {/* ảnh sản phẩm */}
                <Image
                  src={properties.url}
                  alt=""
                  width={134}
                  height={187}
                  layout="responsive"
                  className="transform-gpu transition-transform duration-300 scale-100 group-hover:scale-125"
                />
              </div>
              {/* tên sản phẩm */}
              <button
                className="product_title h-10 mt-2 px-2"
                onClick={() => {
                  router.push("/DetailPage");
                }}
              >
                {properties.title}
              </button>
            </div>
            <div className="pb-2 px-2">
              {/* Giá sản phẩm */}
              <div className="">
                <span className="text-xl font-bold text-red-700">
                  {properties.discount}
                </span>
                <div className="flex items-center gap-2  py-1">
                  <span className="text-xs line-through opacity-50">
                    {properties.price}
                  </span>
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
              <AddToCart product={properties} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
