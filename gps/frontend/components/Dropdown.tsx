"use client";
import { Sidebar } from 'flowbite-react';
import { useState } from "react"; // Import useState hook
import { BsMenuUp } from "react-icons/bs";
import { TbSquareRoundedChevronsDown } from "react-icons/tb";

export const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State để theo dõi trạng thái mở/đóng dropdown

  const handleDropdownOpen = () => {
    setIsDropdownOpen(true); // Mở dropdown khi rê chuột vào danh sách
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false); // Đóng dropdown khi chuột rời khỏi danh sách
  };

  return (
    <div className="relative">
      <button
        className="flex justify-center items-center bg-orange-400 focus:outline-none shadow text-white rounded-none ring-gray-200 h-10 w-full"
        onMouseEnter={handleDropdownOpen} // Mở dropdown khi rê chuột vào
        onMouseLeave={handleDropdownClose} // Đóng dropdown khi chuột rời khỏi
      >
        <span className="p-2">
          <BsMenuUp className="w-5 h-5" />
        </span>
        <h3 className="text-xs text-white px-1">DANH MỤC SẢN PHẨM</h3>
        <span className="border-l p-2">
          <TbSquareRoundedChevronsDown className="w-5 h-5" />
        </span>
      </button>
      {isDropdownOpen && (
        <div
          className="absolute top-full w-full bg-white shadow-md "
          onMouseEnter={handleDropdownOpen} // Để dropdown mở khi rê chuột vào danh sách
          onMouseLeave={handleDropdownClose} // Đóng dropdown khi chuột rời khỏi danh sách
        >
          <Sidebar aria-label="Sidebar with multi-level dropdown example " className='w-full'>
            <Sidebar.Items>
              <Sidebar.ItemGroup>

                <Sidebar.Collapse label="THIẾT BỊ ĐỊNH VỊ">
                  <Sidebar.Item href ="#GPSMoto">
                    <p className="text-xs">THIẾT BỊ ĐỊNH VỊ XE MÁY</p>
                  </Sidebar.Item>
                  <Sidebar.Item href="#GPSCar">
                    <p className='text-xs'>THIẾT BỊ ĐỊNH VỊ Ô TÔ</p>
                    
                  </Sidebar.Item>
                </Sidebar.Collapse>

                <Sidebar.Item href="#Camera" >
                  <p>
                    CAMERA HÀNH TRÌNH
                  </p>
                </Sidebar.Item>
                
                <Sidebar.Item href="#Moniter" >
                  <p>
                    MÀN HÌNH HUD VIETMAP
                  </p>
         
                </Sidebar.Item>

                <Sidebar.Item href="#PCN">
                  <p>
                    PHIM CÁCH NHIỆT 3M
                  </p>
          
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>

        </div>
      )}
    </div>
  );
};
