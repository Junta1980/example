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
    <div  class="p-2 navbar">
    <a [routerLink]="['drag']" >drag</a>
    <a [routerLink]="['drawFlow']">DrawFlow</a>
     </div>
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
