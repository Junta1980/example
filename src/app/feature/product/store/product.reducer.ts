import { createFeatureSelector, createReducer, on } from "@ngrx/store";
import { product } from "./model";
import { productActions } from "./product.actions";


export interface ProductState {
  products: product[];
  favorites: product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  favorites: [],
  loading: false,
  error: null,
};

export const productReducer = createReducer(
    initialState,
    on(productActions.load, (state) => ({ ...state, loading: true, error: null })),
    on(productActions.loadSuccess, (state, { product }) =>{ 
      console.log(product)
      return {
      ...state,
      products : product,
      loading: false,
      error: null,
    }}),
    on(productActions.loadFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error,
    }))    
)  

export const getProductState = createFeatureSelector<ProductState>('productState');

