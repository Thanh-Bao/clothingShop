"use client";
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
        className="flex justify-center items-center bg-sky-600 focus:outline-none shadow text-white rounded-none ring-gray-200 h-10"
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
          className="absolute top-full min-w-full w-max bg-white shadow-md rounde"
          onMouseEnter={handleDropdownOpen} // Để dropdown mở khi rê chuột vào danh sách
          onMouseLeave={handleDropdownClose} // Đóng dropdown khi chuột rời khỏi danh sách
        >
          <ul className="text-left border rounded">
            <li className="px-4 py-2 hover:bg-gray-100 border-b">
              thiết bị định vị
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 border-b">
              camera hành trình
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 border-b">
              camera nghị định 10
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 border-b">androidbox</li>
            <li className="px-4 py-2 hover:bg-gray-100 border-b">tin tức</li>
          </ul>
        </div>
      )}
    </div>
  );
};
