"use client";
import Button from "@mui/material/Button";
import { Footer, TextInput } from "flowbite-react";
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
  
  return (
    <div className="bg-black text-white relative -z-10 ">
          <div className="grid xl:grid-cols-3 xl:max-w-[1200px] max-[430px]:max-w-[390px] mx-auto xl:space-x-6 xl:h-[270px] pt-4">
            <div className="">
              <h1 className="text-xl font-bold my-3">
                Thiết bị định vị và camera hành trình Thành Công
              </h1>
              <h2 className="font-bold">Trụ sở chính:</h2>
              <div className="flex items-center">
                <LuLocateFixed className="w-5 h-5 m-2" />
                <span className="font-inter text-sm my-1">
                  14C Đường số 30, Phường Linh Đông, Thành Phố Thủ Đức
                </span>
              </div>
              <h2 className="font-bold">HOTLINE1 : 0866844225</h2>
              <h2 className="font-bold mt-2">HOTLINE2 : 0867874371</h2>
              
            </div>

            <div className="">
              <h1 className="text-xl font-bold my-3">About Us</h1>
              <span className="py-3 font-inter text-sm">
                Copyright @ Công Ty TNHH TM DV KT HÀN PHONG
                Chuyên phân phối, lắp đặt định vị ô tô xe máy, camera hành
                trình, thiết bị dẫn đường, phụ kiện nội thất đồ chơi ô tô chính
                hãng Lắp đặt, giao hàng tận nhà trên toàn quốc. Nhận hàng Thanh
                Toán.
              </span>
              <h1 className="mt-2">MÃ SỐ THUẾ : 0317482440</h1>
            </div>
            <div className="">
              <h1 className="text-xl font-bold my-3">Contact Us</h1>
              <div className="flex  items-center my-5 ">
                <BsFillTelephoneInboundFill className="w-6 h-6 mr-2" />
                <span>0866844225</span>
              </div>
              <div className="flex items-center my-3">
                <MdOutgoingMail className="w-8 h-8 mr-2" />
                thanh.tran@hanphong.com
              </div>
              <div className="flex items-center space-x-3 mx-auto">
                
                <div className="w-72 py-3 max-[430px]:w-2/3">
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
                  className="h-[42px] bg-orange-500 mx-4 rounded-md max-[430px]:w-1/3"
                >
                  <GrSend className="w-7 h-7 text-white" />
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-gray-600">
            <div className="h-[1px] w-full bg-gray-200 my-2"></div>
              <div className="xl:max-w-[1200px] max-[430px]:px-4 flex items-center justify-between w-full mx-auto py-6">
                <Footer.Copyright by="Thành Công™" href="#" year={2023} />
                <div className="mt-4 flex space-x-6 max-[430px]:mt-0 max-[430px]:justify-center">
                  <Footer.Icon href="#" icon={BsFacebook} />
                  <Footer.Icon href="#" icon={BsInstagram} />
                  <Footer.Icon href="#" icon={BsTwitter} />
                  <Footer.Icon href="#" icon={BsGithub} />
                </div>
              </div>
          </div>
        </div>
  );
};
