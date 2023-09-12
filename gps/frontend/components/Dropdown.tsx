"use client";
import { Badge, Sidebar } from 'flowbite-react';
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
        className="flex justify-center items-center bg-orange-400 focus:outline-none shadow text-white rounded-none ring-gray-200 h-10"
        onMouseEnter={handleDropdownOpen} // Mở dropdown khi rê chuột vào
        onMouseLeave={handleDropdownClose} // Đóng dropdown khi chuột rời khỏi
      >
        <span className="p-2">
          <BsMenuUp className="w-5 h-5" />
        </span>
        <h3 className="text-sm text-white px-1 pr-11">DANH MỤC SẢN PHẨM</h3>
        <span className="border-l p-2">
          <TbSquareRoundedChevronsDown className="w-5 h-5" />
        </span>
      </button>
      {isDropdownOpen && (
        <div
          className="absolute top-full min-w-full w-max bg-white shadow-md "
          onMouseEnter={handleDropdownOpen} // Để dropdown mở khi rê chuột vào danh sách
          onMouseLeave={handleDropdownClose} // Đóng dropdown khi chuột rời khỏi danh sách
        >
           <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
      
          <Sidebar.Collapse
            label="Thiết Bị Định Vị"
          >
            <Sidebar.Item href ="#GPSMoto">
              Thiết bị định vị xe máy
            </Sidebar.Item>
            <Sidebar.Item href="#GPSCar">
              Thiết bị định vị Ô tô
            </Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item
            href="#"
          >
            <p>
              Camera Hành Trình
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
          >
            <p>
              Màn Hình HUD VIETMAP
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
          >
            <p>
              Phim Cách Nhiệt 3M
            </p>
          </Sidebar.Item>

          <Sidebar.CTA>
        <div className="mb-3 flex items-center">
          <Badge color="warning">
            Thành Công
          </Badge>
          <button
            aria-label="Close"
            className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-gray-100 p-1 text-cyan-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
            type="button"
          >
            
          </button>
        </div>
        <div className="mb-3 text-sm text-cyan-900 dark:text-gray-400">
          <p>
            chuyên cung cấp thiết bị định vị ô tô xe gắng máy và phụ tùng linh kiện ô tô.
          </p>
        </div>
        <a
          className="text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300"
          href="#"
        >
          <p>
              
          </p>
        </a>
      </Sidebar.CTA>
 
  
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
        </div>
      )}
    </div>
  );
};
