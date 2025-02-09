import { useCart } from "@/styles/CartContext";

import { Button } from 'flowbite-react';


export const Paytotal = () => {
    const { cartItems, cartTotal } = useCart();
   

    const locale = 'vi-VN';
  const options = {
    style: 'currency',
    currency: 'VND',
  };

  return (
    <div className="p-4">
        <h1 className="text-sm font-bold pb-3">ĐƠN HÀNG CỦA BẠN</h1>
        <div className="flex justify-between">
            <span className="text-xs">SẢN PHẨM</span>
            <span className="text-xs">TỔNG</span>
        </div>
        <div className="h-[2px] w-full bg-gray-200 my-2"></div>
        {cartItems.map((item: any) => (
              <div key={item.product.ID} className="flex justify-between">
                <span className="text-xs py-1 pr-5">{item.product.name} x {item.quantity}</span>
                <span className="text-xs text-red-500 font-bold">{new Intl.NumberFormat(locale, options).format(item.product.realPrice * item.quantity)}</span>
              </div>
            ))}
            <div className="h-[1px] w-full bg-gray-200 my-2"></div>

            <div className="flex justify-between">
            <span className="text-xs">Tổng</span>
            <span className="text-sm text-red-500 font-bold">{new Intl.NumberFormat(locale, options).format(cartTotal)}</span>
        </div>
        <div className="flex justify-end items-end mt-6">
    <Button gradientDuoTone="purpleToPink">
        Đặt Hàng
    </Button>
</div>


    </div>
  )
}
