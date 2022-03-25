export interface IProductsType {
  category_id: number;
  description: string;
  id: number;
  name: string;
  images: IProductsImgType[];
  price: IProductsPriceType[];
}

export interface IProductsImgType {
  id: number;
  image_name: string;
  image_url: string;
  product_id: number;
}
export interface IProductsPriceType {
  id: number;
  product_id: number;
  price: number;
  stock: number;
}
