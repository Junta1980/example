import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { productActions } from './product.actions';
import { productService } from './products.service';
import { product } from './model';
@Injectable()
export class BookEffects {
  private service = inject(productService);
  private actions$ = inject(Actions);

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.load),
      switchMap(() =>
        this.service
          .getBooks()
          .pipe(
            map((result: product[]) => productActions.loadSuccess({product: result})),
            catchError( () => of(productActions.loadFailure({ error: 'load error' })))
            )
        )
      )
    )
}
