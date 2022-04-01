import { IProductsInBasket } from "../redux/reducers/basketSlice";

export const countTotalSum = (products: IProductsInBasket[]) => {
  let totalSum = products
    .map((prod) => prod.price.price * prod.countProdInBasket)
    .reduce((a, b) => a + b, 0);
  let totalCount = products
    .map((prod) => prod.countProdInBasket)
    .reduce((a, b) => a + b, 0);
  return { totalSum, totalCount };
};
