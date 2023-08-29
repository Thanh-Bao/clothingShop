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
    products: Product[];
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
    createdAt: string;
    modifiedAt: string;
    ID: number;
    name: string;
    realPrice: number;
    fakePrice: number;
    guarantee_code: string;
    description: string | null;
    category: string;
    isActive: boolean;
    img: string;
    IsActiveEntity: boolean;
    HasActiveEntity: boolean;
    HasDraftEntity: boolean;
  };
  
  export type CartItem = {
    product: Product;
    quantity: number;
  };


  export type Category = {
    ID: string;
    name: string;
  };
