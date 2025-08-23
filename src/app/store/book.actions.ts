import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Book } from "./model";

export const bookActions = createActionGroup({
  source: "Book",
  events: {
    "load": emptyProps(),
    "Load Success": props<{ books: Book[] }>(),
    "Load Failure": props<{ error: string }>(),
    "Add Book": props<{ book: Book }>(),
    "Remove Book": props<{ bookId: string }>(),
  }
});