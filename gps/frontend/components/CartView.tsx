"use client";
import { Breadcrumb, Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { MdArrowBackIosNew } from "react-icons/md";
import { CartItemView, PayInfor } from ".";
import { useCart } from "../styles/CartContext";
import { Paytotal } from "./Paytotal";

export const CartView = () => {
  const { cartItems, cartTotal } = useCart();
  const router = useRouter();
  return (
    <div className="max-w-[1150px] mx-auto px-4 relative -z-10 mb-16">
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
              <Button className="w-60 border-orange-500 bg-white " color="red"  onClick={() => {
              router.push("/");
            }} >
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

          <Button className="relative w-60 border-orange-500 bg-white" color="red"  onClick={() => {
              router.push("/");
            }} >
              <MdArrowBackIosNew className="mr-4 h-4 w-4 pt-1 text-orange-500" />
              <p className="text-orange-500">Tiếp tục xem sản phẩm</p>
            </Button>

          <div className="flex my-5">
            {/* phần thông tin thanh toán */}
            <div className="w-3/5 ">
              <div className="h-[2px] bg-gray-200 mb-2 mr-10"></div>
              <h2 className="text-lg font-bold my-4">Thông tin thanh toán</h2>
              <PayInfor />
            </div>
            {/* phần thanh toán */}
            <div className="w-2/5 border-2 border-orange-500">
              <Paytotal />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
