'use client'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { SiZalo } from "react-icons/si";

const SocialButtons = () => {
  const [showPopup, setPopup] = useState(false);
  const closePopup = () => {
    setPopup(false)
  };
  const handleclick = () => {
    setPopup(true)
  };
  return (
    <div>
      <div className="fixed bottom-[25%] right-0 p-4 z-10">
        <div className="flex flex-col space-y-3">
          <a
            href="#"
            className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-3 rounded-full flex items-center animate-custom-spin"
            onClick={() => handleclick()}
          >
            <FontAwesomeIcon
              icon={faPhone}
              className=" w-6 h-6"
              style={{ animationDuration: "1s" }}
            />
          </a>

          <a
            href="#"
            className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-3 rounded-full"
            onClick={() => handleclick()}
          >
            <FaFacebookMessenger className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-white bg-green-500 hover:bg-green-600 px-3 py-3 rounded-full"
            onClick={() => handleclick()}
          >
            <SiZalo className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-white bg-red-500 hover:bg-red-600 px-3 py-3 rounded-full"
            onClick={() => handleclick()}
          >
            <MdLocationOn className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="fixed bottom-[25%] max-[430px]:hidden left-4 z-20 ">
        <div className="w-44 h-12 flex bg-blue-600 rounded-full">
  
            <a href="#" className="text-white bg-red-500 hover:bg-blue-600 px-3 py-3 rounded-full flex items-center animate-ping" onClick={() => handleclick()}>
              <FontAwesomeIcon
                icon={faPhone}
                className="w-6 h-6"
                style={{ animationDuration: "0.8s" }}
              />
             
            </a>

          <span className="flex items-center pl-3 text-white font-bold">039955564</span>
        </div>
        
      </div>

                    {showPopup && (
                        <div className="popup z-20">
                          <div className="popup-content z-20">
                              <div className="w-[800px] h-[430px] max-[430px]:w-[400px] max-[430px]:h-[90%] max-[430px]:p-4 ">
                                <div className="xl:flex">
                                  <div className="w-2/3 max-[430px]:w-full">
                                    <div className="flex space-x-4 max-[430px]:justify-center max-[430px]:w-full">

                                        <Image
                                        src="/logo.png"
                                        alt=""
                                        width={300}
                                        height={150}
                                        className="object-contain rounded-full max-w-[100px] max-h-[100px] bg-amber-300" />
                                      
                                      <div className="max-[430px]:w-1/2 max-[430px]:text-left">
                                        <h1 className="text-2xl font-bold ">Thành Công</h1>
                                        <p className="xl:flex xl:justify-start text-sm">Ô tô & Xe máy</p>
                                      </div>

                                    </div>
                                    <div>
                                      <h1 className="text-2xl mt-6 flex justify-start font-bold">Hồ Sơ Kinh Doanh</h1>
                                      <div className="space-y-2 mt-5">
                                        
                                        <div className="flex items-center">
                                          <AiOutlineLink className="w-5 h-5 mr-2"/>
                                          <a href="http://Thanhconggps.com" className="text-blue-500">Thanhconggps.com</a>
                                        </div>
                                        
                                        <div className="flex items-center">
                                          <BsFillPhoneVibrateFill className="w-5 h-5 mr-2"/>
                                          <span className="flex">
                                            <p className="font-bold text-red-500">HOTLINE </p>
                                            <p className="font-bold text-red-500"> : 0938495767</p>
                                          </span>
                                          
                                        </div>

                                        <div className="flex items-center">
                                          <MdLocationOn className="min-w-[20px] min-h-[20px] mr-2"/>
                                          <p className="max-[430px]:text-left">Chi nhánh chính : 19 khu công nghiệp, đống đa thành phố thủ đưc</p>
                                        </div>
                                        
                                      </div>

                                    </div>
                                    <div className="h-[2px] w-full bg-gray-200 my-5"></div>
                                  </div>
                                  <div className="w-1/3 max-[430px]:w-full">
                                    <Image  src="/logo.png" alt="" width={200}height={200} className="object-contain rounded-md mx-auto max-w-[200px] max-h-[200px] bg-amber-300" />
                                    <p className="text-xs mt-2">Mở Zalo, bấm quét QR để quét<br/>và xem trên điện thoại</p>
                                  </div>
                                  
                                </div>

                                <div>
                                  <span className="flex justify-start max-[430px]:text-left">THÀNH NAM GPS chuyên gia giải pháp trong lĩnh vực Nội Thất Ôtô:</span>
                                  <span className="flex justify-start">- Thiết bị định vị ô tô, xe máy.</span>
                                  <span className="flex justify-start">- Camera hành trình ô tô.</span>
                                  <span className="flex justify-start">- Màn Hình Android</span>
                                  <span className="flex justify-start">- film cách nhiệt</span>
                                </div>

                              </div>
                              <button className="" onClick={closePopup}>
                                OK
                              </button>
                            </div>
                        </div>
                      )}
    </div>
  );
};

export default SocialButtons;
