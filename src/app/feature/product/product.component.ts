import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProducts } from './store/product.selector';
import { productActions } from './store/product.actions';
import { JsonPipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [JsonPipe, RouterOutlet, RouterLink],
  template: `
    <pre>{{product() | json }}</pre>
    <a [routerLink]="['drag']">Drag and Drop</a>
    <a [routerLink]="['product']">DrawFlow</a>
    <router-outlet></router-outlet>
  `,
  styles: ``
})
export class ProductComponent {
  store = inject(Store)
  product = this.store.selectSignal(getProducts);

  constructor(){
    this.store.dispatch(productActions.load())
  }

}
