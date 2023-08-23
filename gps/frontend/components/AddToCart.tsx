import { useRouter } from "next/navigation";
import { MdShoppingCart } from "react-icons/md";
import { useCart } from "../styles/CartContext";
import { Product } from "../types";

interface Props {
    product: Product;
  }

export const AddToCart = ({ product }: Props) => {
  
    const router = useRouter();

    const { addToCart } = useCart();
    const handleAddToCartClick = (product: Product) => {
        addToCart(product);
       
      };
    
      const handleBuyClick = (product: Product) => {
        addToCart(product);
        router.push("/CartPage");

      };

  return (
    <div className="flex gap-2">
      <button className="button_primary" onClick={() => handleBuyClick(product)}>Mua Ngay</button>
      <button className="button_icon" >
        <MdShoppingCart className="h-5 w-5" onClick={() => handleAddToCartClick(product)}/>
      </button>
    </div>
  );
};
