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
import { useState } from "react";
import { FiMonitor } from "react-icons/Fi";
import { AiFillCar } from "react-icons/ai";
import { BsCameraFill } from "react-icons/bs";
import { FaMotorcycle } from "react-icons/fa";
import { TbBrandYoutubeKids } from "react-icons/tb";
  
type Props={
  products: Product[];
  video : video[];
}


export const Hero = ({products,video}:Props) => {
  const [selectedProduct, setSelectedProduct] = useState('NewDevice');

  // Hàm xử lý sự kiện khi người dùng nhấn vào nút
  const handleProductSelection = (productName: string) => {
    setSelectedProduct(productName);
    
  };
  
  return (
    <div className="relative -z-40 ">

        <div className="xl:max-w-[1122px] xl:mt-5 max-[430px]:max-w-[390px] m-auto ">
    
            <div className="xl:flex -z-30">
            {/* ===== phần nội dung bên trái ===== */}
              <div className="w-1/4 mr-3 max-[430px]:hidden">
                <div className="w-full mb-8">
                  <ListGroupWithLinks />
                </div>
                <div className="w-full mb-8">
                  <ListGroupWithLinks1 />
                </div>
                <div className="w-full mb-8">
                  <ListGroupWithLinks2 
                  products={products}/>
                </div>
                <div className="w-full mb-8">
                  <ListGroupWithLinks3 MediaUrl={video} index ={2}/>
                </div>
                <div className="w-full mb-8">
                  <ListGroupWithLinks3 MediaUrl={video} index ={3}/>
                </div>
              </div>
            {/*===== phần nội dung bên phải =====*/}

            <div className="xl:w-3/4 xl:ml-5 max-[430px]:w-full">
              {/* phần slider */}
              <div className="w-full h-auto">
                <SlideAsAnything />
              </div>

              {/* phần này là sản phẩm yêu thích */}
              <div className="w-full mt-5">
                <div className="">
                  <WithIcons onProductSelect={handleProductSelection}/>
                </div>
                <div className="mt-3 rounded-md">
                      <ProductCard
                        products={products}
                        group={1}
                        product_name={selectedProduct}
                      />
                </div>
                
              </div>

              {/* phần này là thiết bị định vị xe máy */}
              <div className="w-full mt-5" id="GPSMoto">
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
              <div className="w-full mt-5" id="GPSCar">
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
          
          <div className="">

            {/* ---------camera hành trình------------- */}
            <div className="w-full mt-5" id="Camera">
              <div>
                <div className="">
                  <ListBar List_name="Camera Hành Trình" icon={BsCameraFill} />
                </div>
                <div className="mt-3 rounded-md">
                  <ProductCard
                    products={products}
                    group={2}
                    product_name="Camera"
                  />
                </div>
              </div>
            </div>

            {/* ---------Màn hình HUD------------- */}
            <div className="w-full mt-5" id="Moniter">
              <div>
                <div className="">
                  <ListBar List_name="Màn hình HUD VIETMAP" icon={FiMonitor} />
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
