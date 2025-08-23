import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { bookService } from './book.service';
import { catchError, map, of, switchMap } from 'rxjs';
import { bookActions } from './book.actions';
import { Book } from './model';
@Injectable()
export class BookEffects {
  private service = inject(bookService);
  private actions$ = inject(Actions);

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(bookActions.load),
      switchMap(() =>
        this.service
          .getBooks()
          .pipe(
            map((result: Book[]) => bookActions.loadSuccess({books: result})),
            catchError( () => of(bookActions.loadFailure({ error: 'Be error' })))
            )
        )
      )
    )
}
