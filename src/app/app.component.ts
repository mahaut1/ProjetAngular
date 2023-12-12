import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductCardComponent } from "./product-card/product-card.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <h1>Welcome to {{title}}!</h1>
    <app-product-card></app-product-card>
    <router-outlet></router-outlet>
  `,
    styles: [],
    imports: [CommonModule, RouterOutlet, ProductCardComponent]
})
export class AppComponent {
  title = 'ProjetAngular';
}
