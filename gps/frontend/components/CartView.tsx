"use client";
import { CartItem } from "@/types";
import { Breadcrumb, Button, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaPhoneVolume } from "react-icons/fa";
import { HiHome, HiMail } from "react-icons/hi";
import { MdAddHomeWork, MdArrowBackIosNew } from "react-icons/md";
import { CartItemView, Popup } from ".";
import { useCart } from "../styles/CartContext";

export const CartView = () => {
  const router = useRouter();
  const { cartItems, cartTotal } = useCart();
  const [fullName, setFullName] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPopupVisible, setPopupVisible] = useState(false); // Thêm biến trạng thái cho hiển thị popup
  // const url = "http://localhost:4004/rest/api/SaleOrder";
  const url = "https:/thanhconggps.com/rest/api/SaleOrder";
  
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth <= 768);

  const data = {
    phone: phoneNumber,
    address: shippingAddress,
    name: fullName,
    SaleOrderItems: cartItems.map((item) => ({
      productID: item.product.ID,
      quantity: item.quantity,
      realPrice: item.product.realPrice,
    })),
  };

  const locale = "vi-VN";
  const options = {
    style: "currency",
    currency: "VND",
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


  const handlePlaceOrder = (cartItems: CartItem[]) => {
    if (!fullName || !shippingAddress || !phoneNumber) {
      setPopupVisible(true);
      return;
    }

    fetch(url, {
      method: "POST", // Hoặc GET hoặc phương thức khác nếu cần
      headers: {
        "Content-Type": "application/json", // Đảm bảo đặt đúng content-type
        // Các headers khác nếu cần
      },
      body: JSON.stringify(data), // Chuyển đổi dữ liệu thành chuỗi JSON nếu cần
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Đọc và xử lý phản hồi JSON nếu có
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra:", error);
      });
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="relative -z-10 mb-16">
      {isMobile ? (
        <div className="min-[768px]:max-w-[650px] min-[320px]:max-w-[280px] mx-auto grid grid-cols-1">
          {/* phần menu */}
          <div className="">
            <Breadcrumb
              aria-label="Solid background breadcrumb example"
              className="bg-gray-50 px-5 py-3 dark:bg-gray-900"
            >
              <Breadcrumb.Item href="#" icon={HiHome}>
                <p>Home</p>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#">Giỏ hàng</Breadcrumb.Item>
            </Breadcrumb>

            <h1 className="w-full items-center text-xl font-bold">
              <div className="h-[3px] w-24 bg-gray-500 my-2"></div>
              <span className="text-sky-400">GIỎ HÀNG CỦA TÔI</span>
              <div className="h-[1px] w-full bg-gray-200 my-2"></div>
            </h1>
          </div>

          {/* <div className="flex text-sm font-bold mt-5">
            <div className="flex w-5/12">Sản Phẩm</div>
            <div className="flex pl-12 w-1/5">Giá</div>
            <div className="flex pl-24">Số lượng</div>
          </div> */}
          {cartItems.length === 0 ? (
            <div>
              <div className="min-h-[200px] w-full flex justify-center items-center border my-5">
                <h1>Bạn chưa chọn sản phẩm nào</h1>
              </div>
              <div className="mb-5">
                <Button
                  className="w-60 border-orange-500 bg-white "
                  color="red"
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  <MdArrowBackIosNew className="mr-2 h-4 w-4 text-orange-500 pt-1" />
                  <p className="text-orange-500">Tiếp tục xem sản phẩm</p>
                </Button>
              </div>
            </div>
          ) : (
            <div className="relative w-full">
              {/* phần list cart */}
              <div className="w-full my-5 border px-5 pt-5">
                {cartItems.map((item: any) => (
                  <div key={item.product.ID}>
                    <CartItemView item={item} />
                  </div>
                ))}
              </div>

              <Button
                className="relative w-60 border-orange-500 bg-white"
                color="red"
                onClick={() => {
                  router.push("/");
                }}
              >
                <MdArrowBackIosNew className="mr-4 h-4 w-4 pt-1 text-orange-500" />
                <p className="text-orange-500">Tiếp tục xem sản phẩm</p>
              </Button>

              
                {/* phần thông tin thanh toán */}
                <div className="w-full my-5">
                  <div className="h-[2px] bg-gray-200 mb-2"></div>
                  <h2 className="text-lg font-bold my-4">
                    Thông tin thanh toán
                  </h2>

                  <div>
                    {/* Họ và tên */}
                    <div className="w-full pb-2">
                      <TextInput
                        icon={HiMail}
                        id="id1"
                        placeholder="Họ và Tên"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>

                    {/* địa chỉ giao hàng */}
                    <div className="w-full py-2">
                      <TextInput
                        icon={MdAddHomeWork}
                        id="id2"
                        placeholder="Địa chỉ giao hàng"
                        required
                        value={shippingAddress}
                        onChange={(e) => setShippingAddress(e.target.value)}
                      />
                    </div>

                    {/* số điện thoại */}
                    <div className="w-full py-2">
                      <TextInput
                        icon={FaPhoneVolume}
                        id="id3"
                        placeholder="Số điện thoại"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                {/* phần thanh toán */}
                <div className="w-full border-2 border-orange-500">
                  <div className="p-4">
                    <h1 className="text-sm font-bold pb-3">ĐƠN HÀNG CỦA BẠN</h1>
                    <div className="flex justify-between">
                      <span className="text-xs">SẢN PHẨM</span>
                      <span className="text-xs">TỔNG</span>
                    </div>
                    <div className="h-[2px] w-full bg-gray-200 my-2"></div>
                    {cartItems.map((item: any) => (
                      <div
                        key={item.product.ID}
                        className="flex justify-between"
                      >
                        <span className="text-xs py-1 pr-5">
                          {item.product.name} x {item.quantity}
                        </span>
                        <span className="text-xs text-red-500 font-bold">
                          {new Intl.NumberFormat(locale, options).format(
                            item.product.realPrice * item.quantity
                          )}
                        </span>
                      </div>
                    ))}
                    <div className="h-[1px] w-full bg-gray-200 my-2"></div>

                    <div className="flex justify-between">
                      <span className="text-xs">Tổng</span>
                      <span className="text-sm text-red-500 font-bold">
                        {new Intl.NumberFormat(locale, options).format(
                          cartTotal
                        )}
                      </span>
                    </div>
                    <div className="flex justify-end items-end mt-6">
                      <Button
                        gradientDuoTone="purpleToPink"
                        type="button"
                        onClick={() => handlePlaceOrder(cartItems)}
                      >
                        Đặt Hàng
                      </Button>

                      {/* Hiển thị popup nếu isPopupVisible là true */}
                      {isPopupVisible && (
                        <Popup
                          message="Vui lòng điền đầy đủ thông tin trước khi đặt hàng."
                          onClose={closePopup}
                        />
                      )}
                    </div>
                  </div>
                </div>
              
            </div>
          )}
        </div>
      ) : (
        <div className="max-w-[1150px] mx-auto px-4">
          {/* phần menu */}
          <div className="">
            <Breadcrumb
              aria-label="Solid background breadcrumb example"
              className="bg-gray-50 px-5 py-3 dark:bg-gray-900"
            >
              <Breadcrumb.Item href="#" icon={HiHome}>
                <p>Home</p>
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#">Giỏ hàng</Breadcrumb.Item>
            </Breadcrumb>

            <h1 className="w-full items-center text-xl font-bold">
              <div className="h-[3px] w-24 bg-gray-500 my-2"></div>
              <span className="text-sky-400">GIỎ HÀNG CỦA TÔI</span>
              <div className="h-[1px] w-full bg-gray-200 my-2"></div>
            </h1>
          </div>

          <div className="flex text-sm font-bold mt-5">
            <div className="flex w-5/12">Sản Phẩm</div>
            <div className="flex pl-12 w-1/5">Giá</div>
            <div className="flex pl-24">Số lượng</div>
          </div>
          {cartItems.length === 0 ? (
            <div>
              <div className="min-h-[200px] w-full flex justify-center items-center border my-5">
                <h1>Bạn chưa chọn sản phẩm nào</h1>
              </div>
              <div className="mb-5">
                <Button
                  className="w-60 border-orange-500 bg-white "
                  color="red"
                  onClick={() => {
                    router.push("/");
                  }}
                >
                  <MdArrowBackIosNew className="mr-2 h-4 w-4 text-orange-500 pt-1" />
                  <p className="text-orange-500">Tiếp tục xem sản phẩm</p>
                </Button>
              </div>
            </div>
          ) : (
            <div className="relative w-full">
              {/* phần list cart */}
              <div className="w-full my-5 border px-5 pt-5">
                {cartItems.map((item: any) => (
                  <div key={item.product.ID}>
                    <CartItemView item={item} />
                  </div>
                ))}
              </div>

              <Button
                className="relative w-60 border-orange-500 bg-white"
                color="red"
                onClick={() => {
                  router.push("/");
                }}
              >
                <MdArrowBackIosNew className="mr-4 h-4 w-4 pt-1 text-orange-500" />
                <p className="text-orange-500">Tiếp tục xem sản phẩm</p>
              </Button>

              <div className="flex my-5">
                {/* phần thông tin thanh toán */}
                <div className="w-3/5 ">
                  <div className="h-[2px] bg-gray-200 mb-2 mr-10"></div>
                  <h2 className="text-lg font-bold my-4">
                    Thông tin thanh toán
                  </h2>

                  <div>
                    {/* Họ và tên */}
                    <div className="w-full pr-10 pb-2">
                      <TextInput
                        icon={HiMail}
                        id="id1"
                        placeholder="Họ và Tên"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>

                    {/* địa chỉ giao hàng */}
                    <div className="w-full pr-10 py-2">
                      <TextInput
                        icon={MdAddHomeWork}
                        id="id2"
                        placeholder="Địa chỉ giao hàng"
                        required
                        value={shippingAddress}
                        onChange={(e) => setShippingAddress(e.target.value)}
                      />
                    </div>

                    {/* số điện thoại */}
                    <div className="w-full pr-10 py-2">
                      <TextInput
                        icon={FaPhoneVolume}
                        id="id3"
                        placeholder="Số điện thoại"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                {/* phần thanh toán */}
                <div className="w-2/5 border-2 border-orange-500">
                  <div className="p-4">
                    <h1 className="text-sm font-bold pb-3">ĐƠN HÀNG CỦA BẠN</h1>
                    <div className="flex justify-between">
                      <span className="text-xs">SẢN PHẨM</span>
                      <span className="text-xs">TỔNG</span>
                    </div>
                    <div className="h-[2px] w-full bg-gray-200 my-2"></div>
                    {cartItems.map((item: any) => (
                      <div
                        key={item.product.ID}
                        className="flex justify-between"
                      >
                        <span className="text-xs py-1 pr-5">
                          {item.product.name} x {item.quantity}
                        </span>
                        <span className="text-xs text-red-500 font-bold">
                          {new Intl.NumberFormat(locale, options).format(
                            item.product.realPrice * item.quantity
                          )}
                        </span>
                      </div>
                    ))}
                    <div className="h-[1px] w-full bg-gray-200 my-2"></div>

                    <div className="flex justify-between">
                      <span className="text-xs">Tổng</span>
                      <span className="text-sm text-red-500 font-bold">
                        {new Intl.NumberFormat(locale, options).format(
                          cartTotal
                        )}
                      </span>
                    </div>
                    <div className="flex justify-end items-end mt-6">
                      <Button
                        gradientDuoTone="purpleToPink"
                        type="button"
                        onClick={() => handlePlaceOrder(cartItems)}
                      >
                        Đặt Hàng
                      </Button>

                      {/* Hiển thị popup nếu isPopupVisible là true */}
                      {isPopupVisible && (
                        <Popup
                          message="Vui lòng điền đầy đủ thông tin trước khi đặt hàng."
                          onClose={closePopup}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
