import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product.models';
import { ProductCardComponent } from '../product-card/product-card.component';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [ProductCardComponent],
  template: `
    <p>
      The id of the product is {{this.id}}
    </p>
    
     <app-product-card [myProduct]="product" ></app-product-card>

  `,
  styles: ``
})
export class ProductDetailComponent implements OnInit {
  id: number = 0;
  product!: Product;

  constructor(private route:ActivatedRoute, private router : Router, private productService: ProductsService){}
  ngOnInit(): void {
    let idTmp = this.route.snapshot.paramMap.get('id')
    if (idTmp) {
      this.id = parseInt(idTmp)
      try{
        this.product= this.productService.getOneProduct(this.id)
        console.log(this.product)
      } catch(e){
        this.router.navigate(['404'])
      }

    } else {
      this.router.navigate(['404'])
    }
  }
  addtoCart(product:Product){
    let panier= localStorage.getItem("panier")
    if(panier){
      let enP=JSON.parse(panier)
      enP.push({id:product.id, size:product.size})
      localStorage.setItem('panier', JSON.stringify(enP))
    }
  }
}
