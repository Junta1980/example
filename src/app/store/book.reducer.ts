import { createFeatureSelector, createReducer, on } from "@ngrx/store";
import { Book } from "./model";
import { bookActions } from "./book.actions";

export interface BookState {
  books: Book[];
  favorites: Book[];
  loading: boolean;
  error: string | null;
}

const initialState: BookState = {
  books: [],
  favorites: [],
  loading: false,
  error: null,
};

export const bookReducer = createReducer(
    initialState,
    on(bookActions.load, (state) => ({ ...state, loading: true, error: null })),
    on(bookActions.loadSuccess, (state, { books }) => ({
      ...state,
      books,
      loading: false,
      error: null,
    })),
    on(bookActions.loadFailure, (state, { error }) => ({
      ...state,
      loading: false,
      error,
    }))    
)  

export const selectBooksState = createFeatureSelector<BookState>('booksState');

