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
  productVariationPropertyValues: IProductVariationPropertyValuesType[];
}
export interface IProductVariationPropertiesType {
  id: number;
  name: string;
  type: number;
}
export interface IProductVariationPropertiesListType {
  id: number;
  product_variation_property_id: number;
  title: string;
  value: string;
}
export interface IProductVariationPropertyValuesType {
  id: number;
  product_variation_id: number;
  product_variation_property_id: number;
  value_string: string;
  value_int: number;
  value_float: number;
  product_variation_property_list_value_id: number;
}
