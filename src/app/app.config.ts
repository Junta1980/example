import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { bookReducer } from './store/book.reducer';
import { provideEffects } from '@ngrx/effects';
import { BookEffects } from './store/book.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    provideStore({ booksState : bookReducer}),
    provideEffects([BookEffects]),
     provideStoreDevtools({
      maxAge: 25})
  ]
};
