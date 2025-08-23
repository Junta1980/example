import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home.component';

export const routes: Routes = [
    {path: 'home', loadComponent: () => import('./feature/home.component').then(x => x.HomeComponent)},
    {path: 'products', loadChildren: () => import('./feature/product/product.routes').then( m => m.PRODUCT_ROUTES)},
    {path: '**' , redirectTo: 'home', pathMatch: 'full'}
];
