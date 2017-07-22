import { Injectable } from '@angular/core';

export class Product {
  constructor(public id: number, public name: string, public price: string, public productImage: string, public promoted: boolean) { }
}

let PRODUCTS = [
  new Product(11, 'Testowy produkt 1', '12.53', 'image.png', true),
  new Product(12, 'Testowy produkt 2', '12.53', 'image.png', false),
  new Product(13, 'Testowy produkt 3', '12.53', 'image.png', false),
  new Product(14, 'Testowy produkt 4', '12.53', 'image.png', false),
  new Product(15, 'Testowy produkt 5', '12.53', 'image.png', false),
  new Product(16, 'Testowy produkt 5', '12.53', 'image.png', false),
  new Product(17, 'Testowy produkt 5', '12.53', 'image.png', false),
  new Product(17, 'Testowy produkt 5', '12.53', 'image.png', false)
];

let productsPromise = Promise.resolve(PRODUCTS);

@Injectable()
export class ProductsService {

  getProducts() { return productsPromise; }

  // getProduct(id: number | string) {
  //   return productsPromise
  //     .then(products => products.find(product => product.id === +id));
  // }

  getProductsByID(id: number) {
    return productsPromise
      .then(products => products.filter(product => product.id === +id));
  }
}
