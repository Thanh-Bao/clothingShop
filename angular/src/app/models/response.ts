export interface Product {
  createdAt: Date;
  modifiedAt: Date;
  ID: string;
  name: string;
  price: number;
  material: string;
  shortDesc: string;
  longDesc: string;
  quantity: number;
  category: string;
  isActive: boolean;
  thumbnailURL: string;
  thumbnail_alt: string;
  hoverImageURL: string;
  hoverImage_alt: string;
  IsActiveEntity: boolean;
  HasActiveEntity: boolean;
  HasDraftEntity: boolean;
}
export interface Category {
    ID: string 
    name: string 
    description: string 
    IsActiveEntity: boolean 
    HasActiveEntity: boolean 
    HasDraftEntity: boolean 
}

export interface ODataResponse<T>{
    value: T
}