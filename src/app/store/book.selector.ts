import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BookState, selectBooksState } from "./book.reducer";
import { Book } from "./model";


export const getBook = createSelector(
  selectBooksState,
  (state: BookState) => state.books
);
export const getLoader = (state: BookState) => state.loading;

export const getBookFilter =  (title: string) => createSelector(
 getBook,
 (books: Book[] = []) => {
  console.log( 'books' , books , title)
  return (books || []).filter( (el: Book) => el.title == title)
  })

export const getBookById = (id: string) => createSelector(
  getBook,
  (books: Book[]) => books.find((book: Book) => book.id === id)
);