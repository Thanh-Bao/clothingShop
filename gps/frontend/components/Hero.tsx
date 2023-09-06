'use client'

import { ListBar, Media } from "@/components";
import WithIcons from "@/components/Buttongroup";
import { ProductCard } from "@/components/Card";
import SlideAsAnything from "@/components/Carousel";
import ListGroupWithLinks from "@/components/Listgroup";
import ListGroupWithLinks1 from "@/components/Listgroup1";
import ListGroupWithLinks2 from "@/components/Listgroup2";
import ListGroupWithLinks3 from "@/components/Listgroup3";
import { Product, video } from "@/types";
import { useEffect, useState } from "react";
import { AiFillCar } from "react-icons/ai";
import { BsCameraFill } from "react-icons/bs";
import { FaMotorcycle } from "react-icons/fa";
import { TbBrandYoutubeKids } from "react-icons/tb";
  
type Props={
  products: Product[];
  video : video[];
}

export const Hero = ({products,video}:Props) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    console.log(window.innerWidth);
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative -z-40 ">
      <div className="m-auto min-h-[1000px] max-w-[1122px] mt-5">
        {/* ---------Group 1------------- */}
{/* ############################################--Mobile--############################################# */}
        {isMobile ? (
          <div className="w-full mt-5">
          {/* phần slider */}
          <div className="w-full h-auto mx-auto">
            <SlideAsAnything />
          </div>
          

          {/* phần này là sản phẩm yêu thích */}
          <div className="w-full mt-5">
            <div className="">
              <WithIcons />
            </div>
            <div className="mt-3 rounded-md">
                  <ProductCard
                    products={products}
                    group={1}
                    product_name='LikeDevice'
                  />
        
            </div>
          </div>

          {/* phần này là thiết bị định vị xe máy */}
          <div className="w-full mt-5">
            <div>
              <div className="">
                <ListBar
                  List_name="Thiết bị định vị xe máy"
                  icon={FaMotorcycle}
                />
              </div>
              <div className="mt-3 rounded-md">
                <ProductCard
                  products={products}
                  group={1}
                  product_name="GPSMoto"
                />
              </div>
            </div>
          </div>
          {/* phần này là thiết bị định vị xe hơi */}
          <div className="w-full mt-5">
            <div>
              <div className="">
                <ListBar
                  List_name="thiết bị định vị xe hơi"
                  icon={AiFillCar}
                />
              </div>
              <div className="mt-3 rounded-md">
                <ProductCard
                  products={products}
                  group={1}
                  product_name="GPSCar"
                />
              </div>
            </div>
          </div>
        </div>
        ) : (
          <div className="flex -z-30">
          {/* ===== phần nội dung bên trái ===== */}
          <div className="w-1/4 mr-3">
            <div className="w-full mb-8">
              <ListGroupWithLinks />
            </div>
            <div className="w-full mb-8">
              <ListGroupWithLinks1 />
            </div>
            <div className="w-full mb-8">
              <ListGroupWithLinks2 />
            </div>
            <div className="w-full mb-8">
              <ListGroupWithLinks3 />
            </div>
            <div className="w-full ">
              <ListGroupWithLinks3 />
            </div>
          </div>
          {/*===== phần nội dung bên phải =====*/}

          <div className="w-3/4 ml-5">
            {/* phần slider */}
            <div className="w-full h-80 ">
              <SlideAsAnything />
            </div>

            {/* phần này là sản phẩm yêu thích */}
            <div className="w-full mt-5">
              <div className="">
                <WithIcons />
              </div>
              <div className="mt-3 rounded-md">
                    <ProductCard
                      products={products}
                      group={1}
                      product_name='LikeDevice'
                    />
          
              </div>
            </div>

            {/* phần này là thiết bị định vị xe máy */}
            <div className="w-full mt-5">
              <div>
                <div className="">
                  <ListBar
                    List_name="Thiết bị định vị xe máy"
                    icon={FaMotorcycle}
                  />
                </div>
                <div className="mt-3 rounded-md">
                  <ProductCard
                    products={products}
                    group={1}
                    product_name="GPSMoto"
                  />
                </div>
              </div>
            </div>

            {/* phần này là thiết bị định vị xe hơi */}
            <div className="w-full mt-5">
              <div>
                <div className="">
                  <ListBar
                    List_name="thiết bị định vị xe hơi"
                    icon={AiFillCar}
                  />
                </div>
                <div className="mt-3 rounded-md">
                  <ProductCard
                    products={products}
                    group={1}
                    product_name="GPSCar"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        )}



        
        {/* ---------Group 2------------- */}
        <div className="">
          {/* ---------phần nghị định 10------------- */}
          <div className="w-full mt-5">
            <div>
              <div className="">
                <ListBar List_name="Camera Nghị Định 10" icon={BsCameraFill} />
              </div>
              <div className="mt-3 rounded-md">
                <ProductCard
                  products={products}
                  group={2}
                  product_name="Monitor"
                />
              </div>
            </div>
          </div>
          {/* ---------media------------- */}
          <div className="w-full mt-5 mb-16">
            <div className="">
              <ListBar List_name="Video công nghệ" icon={TbBrandYoutubeKids} />
            </div>
            <div className="my-4 w-full rounded-md  overflow-hidden">
              <Media MediaUrl={video} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
