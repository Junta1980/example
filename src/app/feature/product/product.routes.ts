import { Routes } from "@angular/router";
import { ProductComponent } from "./product.component";
import { provideState } from "@ngrx/store";
import { productReducer } from "./store/product.reducer";
import { provideEffects } from "@ngrx/effects";
import { BookEffects } from "./store/product.effects";
import { provideAnimations, provideNoopAnimations } from "@angular/platform-browser/animations";

export const PRODUCT_ROUTES : Routes = [
    {
        path: '' , component: ProductComponent,
        children: [
            {path: 'drag', loadComponent: () => import('./drag-drop/drag-drop.component').then(m => m.DragDropComponent)},
            {path: 'drawFlow', loadComponent: () => import('./drag-flow/drag-flow.component').then(m => m.DragFlowComponent)},
        ],
        providers: [
            provideState('productState' ,productReducer ),
            provideEffects(BookEffects),
            provideAnimations(),
            provideNoopAnimations(),
            
        ],
        
    },
    
]