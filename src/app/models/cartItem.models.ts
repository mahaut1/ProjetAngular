import { Product } from "./product.models";

export class CartItem {
date: any;
    constructor (
       public id: number,
       public product: Product,
       public quantity: number
    ) {}
}