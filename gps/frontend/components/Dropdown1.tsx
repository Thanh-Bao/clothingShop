
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
    <button className="px-5 flex justify-center items-center bg-gray-800 focus:outline-none rounded-none h-10 hover:bg-sky-600"
        onMouseEnter={handleDropdownOpen} // Mở dropdown khi rê chuột vào
        onMouseLeave={handleDropdownClose} // Đóng dropdown khi chuột rời khỏi
      >
        <h3 className="text-sm text-white ">Thiết Bị Định Vị</h3>
    </button>
    {isDropdownOpen && ( // Hiển thị nội dung dropdown nếu mở
    <div className="absolute top-full min-w-full w-max bg-white shadow-md rounded"
         onMouseEnter={handleDropdownOpen} // Để dropdown mở khi rê chuột vào danh sách
         onMouseLeave={handleDropdownClose} // Đóng dropdown khi chuột rời khỏi danh sách
          >
      <ul className="text-left border rounded">
        <li className="px-4 py-2 hover:bg-gray-100 bg-sky-600 ">Thiết Bị Định Vị Xe Máy</li>
        <li className="px-4 py-2 hover:bg-gray-100 bg-sky-600 ">Thiết Bị Định Vị Xe Hơi</li>
        <li className="px-4 py-2 hover:bg-gray-100 bg-sky-600 ">Thiết Bị Định Vị Xe Tải</li>
      </ul>
    </div>

  )}
  </div>
  )
}
