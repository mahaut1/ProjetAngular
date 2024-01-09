import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductsListComponent } from './products-list/products-list.component';

export const routes: Routes = [
    {path: 'cart', component: CartComponent},
    {path: '**', component:ProductsListComponent}
];
