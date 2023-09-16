
'use client'
import { useState } from 'react'; // Import useState hook
export const Dropdown1 = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State để theo dõi trạng thái mở/đóng dropdown

    const handleDropdownOpen = () => {
        setIsDropdownOpen(true); // Mở dropdown khi rê chuột vào danh sách
      };
    
      const handleDropdownClose = () => {
        setIsDropdownOpen(false); // Đóng dropdown khi chuột rời khỏi danh sách
      };

  return (
<div className="relative">
    <button className="px-5 flex justify-center items-center bg-gray-800 focus:outline-none rounded-none h-10 hover:bg-orange-400"
        onMouseEnter={handleDropdownOpen} // Mở dropdown khi rê chuột vào
        onMouseLeave={handleDropdownClose} // Đóng dropdown khi chuột rời khỏi
      >
        <h3 className=" text-xs text-white ">THIẾT BỊ ĐỊNH VỊ</h3>
    </button>
    {isDropdownOpen && ( // Hiển thị nội dung dropdown nếu mở
    <div className="absolute top-full min-w-full w-max bg-white shadow-md rounded"
         onMouseEnter={handleDropdownOpen} // Để dropdown mở khi rê chuột vào danh sách
         onMouseLeave={handleDropdownClose} // Đóng dropdown khi chuột rời khỏi danh sách
          >
      <ul className="text-left font-medium">
        <li className="px-4 py-2 hover:bg-gray-100 bg-orange-400 ">
          <a href="#GPSMoto">Thiết Bị Định Vị Xe Máy</a>
          </li>
        <li className="px-4 py-2 hover:bg-gray-100 bg-orange-400 ">
          <a href="#GPSCar">Thiết Bị Định Vị Ô tô</a>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 bg-orange-400 ">
          <a href="#GPSCar">Thiết Bị Định Vị Xe Tải</a>
        </li>
      </ul>
    </div>

  )}
  </div>
  )
}
