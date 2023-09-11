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
import { AiFillCar } from "react-icons/ai";
import { BsCameraFill } from "react-icons/bs";
import { FaMotorcycle } from "react-icons/fa";
import { TbBrandYoutubeKids } from "react-icons/tb";
  
type Props={
  products: Product[];
  video : video[];
}

export const Hero = ({products,video}:Props) => {
  return (
    <div className="relative -z-40 ">

        <div className="xl:max-w-[1122px] xl:mt-5 max-[430px]:max-w-[400px] m-auto ">
    
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
                  <ListGroupWithLinks3 />
                </div>
                <div className="w-full ">
                  <ListGroupWithLinks3 />
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
