import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { product } from "./model";

export const productActions = createActionGroup({
  source: "product",
  events: {
    "load": emptyProps(),
    "Load Success": props<{ product: product[] }>(),
    "Load Failure": props<{ error: string }>(),
  }
});