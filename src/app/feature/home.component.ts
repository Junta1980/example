import { Component, inject } from '@angular/core';
import { getBook, getBookFilter } from '../store/book.selector';
import { Store } from '@ngrx/store';
import { bookActions } from '../store/book.actions';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [JsonPipe],
  template: `
  <pre> {{ books()  | json}}</pre>
  <pre> {{ booksFilter() | json}}</pre>
  `,
  styles: ``
})
export class HomeComponent {

  private store = inject(Store)
  public books = this.store.selectSignal(getBook)
  public booksFilter = this.store.selectSignal(getBookFilter('title 4'))

  constructor(){
    this.store.dispatch(bookActions.load());
  }

}
