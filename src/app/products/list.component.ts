import { Component, OnInit } from '@angular/core';
//import { TagsForProduct } from './tags.component';
import { Product, ProductsService } from './products.service';

@Component({
  selector: 'products-list',
  providers: [ ProductsService ],
  template: `<div class="other-items">
    <input type="text" #searchQuery placeholder="Szukaj..." (keyup)="searchProducts(searchQuery.value)">
    <ul>
      <li *ngFor="let product of products | async" [ngClass]="{'promoted': product.promoted }">{{ product.name }} Cena: {{ product.price }}zł</li>
    </ul>
  </div>`,
  styles: ['li { list-style: none; } ul { padding: 0px; } .promoted { background-color: darkgoldenrod; }']
})

export class ListOfProducts implements OnInit {
  products: Promise<Product[]>;

  constructor(
    // private tags: TagsForProduct,
    private service: ProductsService
  ) {}

  ngOnInit() {
    this.products = this.service.getProducts();
    console.log(this.products);
  }

  searchProducts(query) {
    this.products = this.service.getProductsByName(query);
  }

  // getCurrentTags(id) {
  //   console.log(this.tags.getTags(id));
  //   //return this.tags.getTags(id);
  // }
}
