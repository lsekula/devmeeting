import { Injectable } from '@angular/core';
import { Product } from './app.product.component';
import { Tags } from './app.tags.component';


@Injectable()
export class ProductService {

  public tags:Array<Tags> = [
    new Tags('black'),
    new Tags('red'),
    new Tags('white')
  ];

  public list:Array<Product> = [
    new Product('ferst', 1),
    new Product('second', 2),
    new Product('third', 3),
    new Product('colorado', 3),
    new Product('inna', 3)
  ];

  getProductList() {
    return this.list;
  }
}
