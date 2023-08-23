import { useCart } from "@/styles/CartContext";
import { CartItem } from "@/types";
import { Add, DeleteOutlineOutlined, Remove } from "@mui/icons-material";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

interface Props {
  item: CartItem;
}
export const CartItemView = ({ item }: Props) => {
  const { removeFromCart, updateCartItemQuantity } = useCart();

  const handleQuantityChange = (qty: number) => {
    const quantity = Number(qty);
    if (quantity >= 1) {
      updateCartItemQuantity(item.product.id, quantity);
    }
  };

  const handleRemoveClick = () => {
    removeFromCart(item.product.id);
  };

  const locale = 'vi-VN';
  const options = {
    style: 'currency',
    currency: 'VND',
  };

  const formattedPrice = new Intl.NumberFormat(locale, options).format(item.product.price * item.quantity);


  return (
    <div className="flex">
      {/* Product Image and Title */}
      <div className="flex items-center w-6/12">
        <div>
          <Image
            src={item.product.url}
            alt={item.product.title}
            width={150}
            height={150}
          />
        </div>
        <div>
          <div>{item.product.title}</div>
        </div>
      </div>

      {/* Prooduct Quantity */}
      <div className="flex justify-between items-center w-2/5">
        <div className="mr-5 text-red-500 font-bold">
            {formattedPrice}
        </div>
        <div className="flex justify-between items-center border">
          {/* Icreasing/Deacreasing Product Quantity Button  */}
          <div className="px-2">
            <FaMinus class=""
              onClick={() => {handleQuantityChange(item.quantity - 1); }}>
              <Remove fontSize="medium" htmlColor="#000" />
            </FaMinus>
          </div>
          <div className="px-5 text-black text-lg bg-gray-100">
            &nbsp;{item.quantity}&nbsp;
          </div>

          <div className="px-2">
            <FaPlus class=""
              onClick={() => {handleQuantityChange(item.quantity + 1);}}>
              <Add fontSize="medium" htmlColor="#000" />
            </FaPlus>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-1/5">
        <RiDeleteBin6Line onClick={handleRemoveClick}>
          <DeleteOutlineOutlined />
        </RiDeleteBin6Line>
      </div>
    </div>
  );
};
