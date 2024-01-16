import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {path: '', component:ProductsListComponent},
    {path: 'cart', component: CartComponent},
    {path: 'product/:id', component: ProductDetailComponent },
    {path: '**', component: ErrorComponent}
];
