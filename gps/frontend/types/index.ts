import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    
    title: string;
    containerStyles?: string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit" ;
}

export interface CardProps {
    product_name : string;
    group :number;
}

export interface ListBarProps {
    List_name : string;
}

export interface MediaProps {
    MediaUrl : string;
}

export interface CartItemPropos {
    name : string;
    price : number;
}

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    url: string;
  };
  
  export type CartItem = {
    product: Product;
    quantity: number;
  };


