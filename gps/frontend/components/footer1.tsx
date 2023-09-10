"use client";
import Button from "@mui/material/Button";
import { Footer, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import {
  BsFacebook,
  BsFillTelephoneInboundFill,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { GrSend } from "react-icons/gr";
import { HiMail } from "react-icons/hi";
import { LuLocateFixed } from "react-icons/lu";
import { MdOutgoingMail } from "react-icons/md";

export const FooterSitemapLinks = () => {
  // ##################################################################################################

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 768
  );
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Kiểm tra kích thước ban đầu khi trang web được tải
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // ########################################################################################################

  return (
    <div className="bg-black text-white">
      {isMobile ? (
        <div className="">
          <div className="max-w-[440px] mx-auto pt-4">
            <div className="w-full">
              <h1 className="text-xl font-bold my-3">
                Công Ty TNHH TMDV Thành Công
              </h1>
              <h2 className="font-bold">Trụ sở chính:</h2>
              <div className="flex items-center">
                <LuLocateFixed className="w-5 h-5 m-2" />
                <span className="font-inter text-sm my-1">
                  240 - 242 Phạm Văn Đồng,P. Hiệp Bình Chánh, TP. Thủ Đức,
                  TP.HCM
                </span>
              </div>
              <h2 className="font-bold">Chi Nhánh 1:</h2>
              <div className="flex items-center">
                <LuLocateFixed className="w-5 h-5 m-2" />
                <span className="font-inter text-sm my-1">
                  240 - 242 Phạm Văn Đồng,P. Hiệp Bình Chánh, TP. Thủ Đức,
                  TP.HCM
                </span>
              </div>
            </div>

            <div className="w-full">
              <h1 className="text-xl font-bold my-3">About Us</h1>
              <span className="py-3 font-inter text-sm">
                Copyright @ Công Ty TNHH Dịch Vụ Và PT Công Nghệ Thành Nam
                Chuyên phân phối, lắp đặt định vị ô tô xe máy, camera hành
                trình, thiết bị dẫn đường, phụ kiện nội thất đồ chơi ô tô chính
                hãng Lắp đặt, giao hàng tận nhà trên toàn quốc. Nhận hàng Thanh
                Toán.
              </span>
            </div>

            <div className="w-full">
              <h1 className="text-xl font-bold my-3">Contact Us</h1>
              <div className="flex  items-center my-5 ">
                <BsFillTelephoneInboundFill className="w-6 h-6 mr-2" />
                +84373784746
              </div>
              <div className="flex items-center my-3">
                <MdOutgoingMail className="w-8 h-8 mr-2" />
                user@gmail.com
              </div>
              <div className="flex items-center">
                <div className="w-72 py-3">
                  <TextInput
                    icon={HiMail}
                    id="email4"
                    placeholder="name@flowbite.com"
                    required
                    type="email"
                  />
                </div>
                <Button
                  variant="contained"
                  className="h-[42px] bg-orange-500 mx-4 rounded-md"
                >
                  <GrSend className="w-7 h-7 text-white" />
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-gray-600">
            <div className="h-[1px] w-full bg-gray-200 my-2"></div>
            <div className="max-w-[1200px] mx-auto px-4 ">
              <div className="w-full sm:flex sm:items-center sm:justify-between py-6 min-[320px]:flex min-[320px]:items-center min-[320px]:justify-between">
                <Footer.Copyright by="Thành Công™" href="#" year={2023} />
                <div className=" flex space-x-6 sm:mt-0 sm:justify-center min-[320px]:justify-center ">
                  <Footer.Icon href="#" icon={BsFacebook} />
                  <Footer.Icon href="#" icon={BsInstagram} />
                  <Footer.Icon href="#" icon={BsTwitter} />
                  <Footer.Icon href="#" icon={BsGithub} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between p-4 max-w-[1300px] mx-auto space-x-6">
            <div className="w-1/3">
              <h1 className="text-xl font-bold my-3">
                Công Ty TNHH TMDV Thành Công
              </h1>
              <h2 className="font-bold">Trụ sở chính:</h2>
              <div className="flex items-center">
                <LuLocateFixed className="w-5 h-5 m-2" />
                <span className="font-inter text-sm my-1">
                  240 - 242 Phạm Văn Đồng,P. Hiệp Bình Chánh, TP. Thủ Đức,
                  TP.HCM
                </span>
              </div>
              <h2 className="font-bold">Chi Nhánh 1:</h2>
              <div className="flex items-center">
                <LuLocateFixed className="w-5 h-5 m-2" />
                <span className="font-inter text-sm my-1">
                  240 - 242 Phạm Văn Đồng,P. Hiệp Bình Chánh, TP. Thủ Đức,
                  TP.HCM
                </span>
              </div>
            </div>

            <div className="w-1/3 ">
              <h1 className="text-xl font-bold my-3">About Us</h1>
              <span className="py-3 font-inter text-sm">
                Copyright @ Công Ty TNHH Dịch Vụ Và PT Công Nghệ Thành Nam
                Chuyên phân phối, lắp đặt định vị ô tô xe máy, camera hành
                trình, thiết bị dẫn đường, phụ kiện nội thất đồ chơi ô tô chính
                hãng Lắp đặt, giao hàng tận nhà trên toàn quốc. Nhận hàng Thanh
                Toán.
              </span>
            </div>
            <div className="w-1/3">
              <h1 className="text-xl font-bold my-3">Contact Us</h1>
              <div className="flex  items-center my-5 ">
                <BsFillTelephoneInboundFill className="w-6 h-6 mr-2" />
                +84373784746
              </div>
              <div className="flex items-center my-3">
                <MdOutgoingMail className="w-8 h-8 mr-2" />
                user@gmail.com
              </div>
              <div className="flex items-center">
                <div className="w-72 py-3">
                  <TextInput
                    icon={HiMail}
                    id="email4"
                    placeholder="name@flowbite.com"
                    required
                    type="email"
                  />
                </div>
                <Button
                  variant="contained"
                  className="h-[42px] bg-orange-500 mx-4 rounded-md"
                >
                  <GrSend className="w-7 h-7 text-white" />
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-gray-600">
            <div className="h-[1px] w-full bg-gray-200 my-2"></div>
            <div className="max-w-[1200px] mx-auto px-4 ">
              <div className="w-full sm:flex sm:items-center sm:justify-between py-6">
                <Footer.Copyright by="Thành Công™" href="#" year={2023} />
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                  <Footer.Icon href="#" icon={BsFacebook} />
                  <Footer.Icon href="#" icon={BsInstagram} />
                  <Footer.Icon href="#" icon={BsTwitter} />
                  <Footer.Icon href="#" icon={BsGithub} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
