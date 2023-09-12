"use client";
import { getAlbum, getDes, getOffer } from "@/app/products-service";
import { useCart } from "@/styles/CartContext";
import { Product } from "@/types";
import { Breadcrumb, Button, Sidebar } from "flowbite-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { GiCardExchange, GiRotaryPhone } from "react-icons/gi";

import { Tabs } from "flowbite-react";
import { BsTicketDetailed } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";

import {
  HiChartPie,
  HiHome,
  HiInbox,
  HiOutlineFire,
  HiOutlineShoppingCart,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

type Props = {
  product: Product;
  id: String;
};

interface AlbumItem {
  productID: string;
  url: string;
  // ... Các thuộc tính khác
}

interface OfferItem {
  productID: string;
  ID: number;
  des: String;
  // Các thuộc tính khác của OfferItem
}

interface textdesItem {
  productID: string;
  ID: number;
  txt: String;
}

export const Detail = ({ product, id }: Props) => {
  const { addToCart } = useCart();
  const [urlArray, setUrlArray] = useState<string[]>([]);
  const [filteredOffers, setFilteredOffers] = useState<OfferItem[]>([]);
  const [filteredtxt, setFilteredtxt] = useState<textdesItem[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>(`${product.img}`);

  const locale = "vi-VN";
  const options = {
    style: "currency",
    currency: "VND",
  };

  useEffect(() => {
    const fetchAlbum = async () => {
      if (id) {
        const targetID = `${id}`;
        const album: AlbumItem[] = await getAlbum();
        const offers: OfferItem[] = await getOffer();
        const textdes: textdesItem[] = await getDes();
        const newUrlArray: string[] = [];
        // lọc ảnh
        album.forEach((item: AlbumItem) => {
          if (item.productID == targetID) {
            newUrlArray.push(item.url);
          }
        });
        setUrlArray([product.img, ...newUrlArray]);

        // Lọc các phần tử từ offers có thuộc tính ID bằng id và đặt vào filteredOffers
        const filteredOffers = offers.filter(
          (offer) => offer.productID == targetID
        );
        setFilteredOffers(filteredOffers);

        // Lọc các phần tử từ mô tả có thuộc tính ID bằng id
        const filteredtxt = textdes.filter(
          (text) => text.productID == targetID
        );
        setFilteredtxt(filteredtxt);
      }
    };
    fetchAlbum();
  }, [id]);

  const handleThumbnailClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleAddToCartClick = (product: Product) => {
    addToCart(product);
  };


  return (
    <div className="relative -z-10 mb-16">

        <div className="xl:max-w-[1250px] xl:px-16 max-[430px]:max-w-[390px] mx-auto">
          <Breadcrumb
            aria-label="Solid background breadcrumb example"
            className="bg-gray-50 px-5 py-3 dark:bg-gray-900"
          >
            <Breadcrumb.Item href="#" icon={HiHome}>
              <p>Home</p>
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">{product.category}</Breadcrumb.Item>
            <Breadcrumb.Item href="#">{product.name}</Breadcrumb.Item>
          </Breadcrumb>

          <div className="xl:flex xl:space-x-5 xl:my-6">
            {/* Cột 1: Hiển thị ảnh */}
            <div className="xl:w-1/4 max-[430px]:w-full max-[430px]:py-3">
              <Image
                src={selectedImage}
                alt="Product"
                width={500}
                height={500}
              />
              <div className="mt-4 space-x-2 flex flex-wrap">
                {urlArray.map((thumbnail, index) => (
                  <Image
                    key={index}
                    src={thumbnail}
                    alt={`Thumbnail ${index}`}
                    width={100}
                    height={100}
                    className="w-1/4 cursor-pointer mb-2"
                    onClick={() => handleThumbnailClick(thumbnail)}
                  />
                ))}
              </div>
            </div>

            {/* Cột 2: Hiển thị giá cả và thông tin */}
            <div className="xl:w-2/4 max-[430px]:w-full">
              <h2 className="text-4xl mb-4">{product.name}</h2>
              <p className="text-red-600 text-3xl font-bold mb-2">
                {new Intl.NumberFormat(locale, options).format(
                  product.realPrice
                )}
              </p>
              <p className="text-xl line-through opacity-50 font-bold ml-1">
                {new Intl.NumberFormat(locale, options).format(
                  product.fakePrice
                )}
              </p>
              <div className="py-3">
                <fieldset className="px-2 py-3 border border-orange-500 border-">
                  <legend className=" font-bold text-lg text-red-600 px-2">
                    Khuyến Mãi
                  </legend>
                  <p className="pb-2">
                    <span className="text-red-600 text-lg font-bold">
                      Mua {product.name} - Nhận ưu đãi hấp dẫn tại Thành Nam
                    </span>
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <HiOutlineFire className="min-w-[20px] min-h-[20px] mx-2 text-orange-500" />
                      <span className="text-blue-600">
                        Tặng gói dịch vụ lắp đặt chuyên nghiệp. Nhanh - An Toàn
                        - Bí Mật.
                      </span>
                    </li>

                    <li className="flex items-center">
                      <HiOutlineFire className="min-w-[20px] min-h-[20px] mx-2 text-orange-500" />
                      <span className="text-blue-600">
                        {" "}
                        Miễn phí lắp đặt tại Sài Gòn.
                      </span>
                    </li>
                    <li className="flex items-center">
                      <HiOutlineFire className="min-w-[20px] min-h-[20px] mx-2 text-orange-500" />
                      <span className="text-blue-600">
                        {" "}
                        Miễn phí ship COD giao hàng trên toàn quốc - Nhận hàng
                        trả tiền.
                      </span>
                    </li>
                    <li className="flex items-center">
                      <HiOutlineFire className="min-w-[20px] min-h-[20px] mx-2 text-orange-500" />
                      <span className="text-blue-600">
                        Tặng gói BẢO HÀNH VÀNG có thời hạn{" "}
                        {product.guarantee_code} - Cam kết 1 đổi 1 - Bảo hành
                        miễn phí tại xe.
                      </span>
                    </li>
                    {/* phần genaral ra các offer khuyến mãi */}
                    {filteredOffers.map((offer) => (
                      <li className="flex items-center" key={offer.ID}>
                        <HiOutlineFire className="w-5 h-5 mx-2 text-orange-500" />
                        <span className="text-blue-600">{offer.des}</span>
                      </li>
                    ))}

                    <li className="flex items-center space-x-1 py-5">
                      <GiRotaryPhone className="w-5 h-5 mx-2 text-orange-500" />
                      <span className="text-red-600 text-xl font-bold">
                        HOTLINE :{" "}
                      </span>
                      <span className="text-blue-600 text-xl font-bold">
                        {" "}
                        0373784746
                      </span>
                    </li>
                  </ul>
                </fieldset>
              </div>

              <Button
                gradientDuoTone="pinkToOrange"
                className="flex items-center h-14"
                onClick={() => handleAddToCartClick(product)}
              >
                <HiOutlineShoppingCart className="w-6 h-6 mx-3" />
                <p className="text-lg">Thêm Vào giở hàng</p>
              </Button>
            </div>

            {/* Cột 3: Hiển thị ưu nhược điểm */}
            <div className="xl:w-1/4 max-[430px]:hidden">
              <Sidebar
                aria-label="Sidebar with logo branding example"
                className="w-full"
              >
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiChartPie}>
                      <p>
                        UY TÍNH
                        <br />
                        HÀNG ĐẦU
                      </p>
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiViewBoards}>
                      <p>
                        BÁN HÀNG
                        <br />
                        CHÍNH HÃNG
                      </p>
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiInbox}>
                      <p>
                        CAM KẾT
                        <br />
                        GIÁ TỐT
                      </p>
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiUser}>
                      <p>
                        FREE LẮP
                        <br />
                        ĐẶT TẠI NHÀ
                      </p>
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={FaShippingFast}>
                      <p>
                        GIAO HÀNG
                        <br />
                        TOÀN QUỐC
                      </p>
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={GiCardExchange}>
                      <p>
                        ĐỔI TRẢ
                        <br />
                        DỄ DÀNG
                      </p>
                    </Sidebar.Item>
                    <Sidebar.Item href="#" icon={HiTable}>
                      <p>
                        BẢO HÀNH
                        <br /> 1-5 NĂM
                      </p>
                    </Sidebar.Item>
                    <Sidebar.Item href="#">
                      <Button gradientMonochrome="success">
                        <div className="flex items-center">
                          <BsFillPhoneVibrateFill className="w-5 h-5 mr-2" />
                          <p>HOTLINE : 0272784746</p>
                        </div>
                      </Button>
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </Sidebar>
            </div>
          </div>
          <div className="max-[430px]:mt-3">
            <Tabs.Group
              aria-label="Tabs with underline"
              style="underline"
              className=""
            >
              <Tabs.Item active icon={BsTicketDetailed} title="MÔ TẢ">
                {filteredtxt.map((txtItem) => (
                  <div className="" key={txtItem.ID}>
                    <div
                      className="px-4 py-2 "
                      dangerouslySetInnerHTML={{ __html: txtItem.txt }}
                    />
                  </div>
                ))}
              </Tabs.Item>
              <Tabs.Item icon={MdDashboard} title="THÔNG SỐ KỸ THUẬT">
                <p className="  ">dfgf</p>
              </Tabs.Item>
            </Tabs.Group>
          </div>
        </div>
    </div>
  );
};
