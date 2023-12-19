import { Injectable } from "@angular/core";
import { Product } from "../models/product.models";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    products : Product[]= [
        new Product (
            "Peluche Harry Potter",
        " Peluche certifié en coton bio issue du commerce équitable, taille 12cm",
        "https://media.auchan.fr/42f06d04-cd4f-4cf0-8d86-48c56c856e31_1200x1200/B2CD/",
        23,
        new Date('2023/12/17'),
        0,
        false,
        ['XL']
        ), new Product (
          "Peluche Ronald Weasley",
      " Peluche certifié en coton bio issue du commerce équitable, taille 12cm",
      "https://media.auchan.fr/7e19f127-18af-4550-a9d7-7fb796cc3df1_1200x1200/B2CD/",
      23,
      new Date('2023/12/19'),
      0,
      false
   
      ), new Product (
        "Peluche Hermione Granger",
    " Peluche certifié en coton bio issue du commerce équitable, taille 12cm",
    "https://media.auchan.fr/237b2ba0-a3b6-45b9-94a9-97d753624a12_1200x1200/B2CD/",
    23,
    new Date('2023/12/18'),
    0,
    false,
    ['XL','L']
    )
    ]
    getItems():Product[]{
        return this.products
    }

    onLikeProduct(product: Product):void {
        if(product.hasLiked) {
            product.likes--;
        } else {
            product.likes++;
        }
        product.hasLiked = !product.hasLiked
    }
}