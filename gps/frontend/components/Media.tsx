"use client";
import { ProductList } from "@/constants";
import { MediaProps } from "@/types";

export const Media = ({ MediaUrl }: MediaProps) => {
	const productCategory = ProductList.find(
	  (category) => category.hasOwnProperty(MediaUrl)
	);
  
	if (!productCategory) {
	  return null;
	}
  
	const selectedProducts = productCategory[MediaUrl as keyof typeof productCategory];
  
	return (
	  <div className="">
		<div className="flex justify-between w-full space-x-4">
		  {selectedProducts.map((product, index) => (
			<div className="w-1/2" key={index}>
			  {("url" in product) ? (
				<iframe
				  width="560"
				  height="315"
				  src={product.url}
				  title="YouTube Video Player"
				  frameBorder="0"
				  allowFullScreen
				></iframe>
			  ) : null}
			</div>
		  ))}
		</div>
	  </div>
	);
  };
  