import { createSelector } from "@ngrx/store";
import { ProductState, getProductState } from "./product.reducer";
import { product } from "./model";


export const getProducts = createSelector(
  getProductState,
  (state: ProductState) => state.products
);

export const getLoader = createSelector(
  getProductState,
  (state: ProductState) => state.loading
);

export const getProductFilter =  (title: string) => createSelector(
 getProducts,
 (item: product[] = []) => {
  return (item || []).filter( (el: product) => el.title == title)
})