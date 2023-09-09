"use client";
import { useCart } from "@/styles/CartContext";
import Badge from "@mui/material/Badge";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { TbHomeSignal } from "react-icons/tb";
import { Dropdown, Dropdown1 } from ".";
import { Searchbar } from "./Searchbar";




export const Navibar = () => {

  const { cartCount } = useCart();
  const router = useRouter();
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(process.browser && window.innerWidth <= 768);

  const handleScroll2 = () => {
    if (window.scrollY >= 120) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const handleResize = () => {
    console.log(window.innerWidth);
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll2);
    return () => {
      window.removeEventListener("scroll", handleScroll2);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // đây là phần logo và searchbar
    <header className="w-full bg-white relative">
        {isMobile ? (
          
          <div className="max-w-[650px] mx-auto flex justify-between items-center my-3">

            <div className="w-1/3">
              <AiOutlineMenuUnfold className="w-10 h-10" onClick={toggleMenu}/>
            </div>

            {isMenuOpen && (
        <div className="w-2/3 flex justify-end">
          {/* Danh sách danh mục sản phẩm */}
          <div className="menu-container">
          
          </div>
        </div>
      )}

            <div className="w-1/3">
              <Image
                src="/logo5.png"
                alt="clothes shop logo"
                width={300}
                height={150}
                className="object-contain"
              />
            </div>

            <div className="w-1/3 flex justify-end">
              <button className="relative" onClick={() => {router.push("/CartPage");}}>
                <Badge badgeContent={cartCount} color="error">
                  <BsCart4 className="w-10 h-10" />
                </Badge>
              </button>
            </div>
          </div>

        ) : (
          <div>
            <div className="max-w-[1120px] mx-auto flex justify-between items-center py-4">

              <div className="w-1/4">
                <Image
                  src="/logo5.png"
                  alt="clothes shop logo"
                  width={300}
                  height={150}
                  className="object-contain"
                />
              </div>

              <div className="w-[55%] ml-5">
                <Searchbar />
                <p className="text-xs text-gray-500 italic pt-1">
                  Để tìm kiếm sản phẩm mời quý khách nhập từ khóa vào ô bên trên sau
                  đó kích vào tìm kiếm để dẫn tới sản phẩm
                </p>
              </div>

              <div className="w-1/6 flex justify-center">
                <button className="relative" onClick={() => {router.push("/CartPage");}}>
                  <Badge badgeContent={cartCount} color="error">
                    <BsCart4 className="w-10 h-10" />
                  </Badge>
                </button>
              </div>
            </div>
              
              <div className={`bg-gray-800 ${isSticky ? "fixed top-0 w-full" : "sticky top-[60px]"}`}>
                <div className="max-w-[1250px] mx-auto flex px-16">
                  <div className="min-w-[270px]">
                    <Dropdown />
                  </div>
                  <div className="flex ml-9 w-[1000px] items-center ">
                    <div>
                      <button className="h-10 px-5 bg-orange-400 text-white flex justify-between items-center text-sm">
                        <span className="px-1">
                          <TbHomeSignal className="w-5 h-5" />
                        </span>
                        Trang Chủ
                      </button>
                    </div>
                    <div>
                      <Dropdown1 />
                    </div>
                    <button className="h-10 px-5 bg-gray-800 text-white flex justify-between items-center text-sm hover:bg-orange-400">
                      Camera Hành Trình
                    </button>
                    <button className="h-10 px-5 bg-gray-800 text-white flex justify-between items-center text-sm hover:bg-orange-400">
                      Màn hình HUD VIETMAP
                    </button>
                    <button className="h-10 px-5 bg-gray-800 text-white flex justify-between items-center text-sm hover:bg-orange-400">
                      Phim cách nhiệt 3M
                    </button>
                  </div>
                </div>
              </div>
            </div>
        )}
    </header>
  );
};
