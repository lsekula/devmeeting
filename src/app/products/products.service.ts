import { Injectable } from '@angular/core';

export class Product {
  constructor(public id: number, public name: string, public price: string, public productImage: string, public promoted: boolean) { }
}

let PRODUCTS = [
  new Product(11, 'Cebula', '12.53', 'image.png', true),
  new Product(12, 'Pomidory', '12.53', 'image.png', false),
  new Product(13, 'Banany', '12.53', 'image.png', false),
  new Product(14, 'Jabłka', '12.53', 'image.png', false),
  new Product(15, 'Ziemniaki', '12.53', 'image.png', false),
  new Product(16, 'Pomarańcze', '12.53', 'image.png', false),
  new Product(17, 'Szparagi', '12.53', 'image.png', false),
  new Product(17, 'Truskawki', '12.53', 'image.png', false)
];

let productsPromise = Promise.resolve(PRODUCTS);

@Injectable()
export class ProductsService {

  getProducts() { return productsPromise; }

  getProductsByID(id: number) {
    return productsPromise
      .then(products => products.filter(product => product.id === +id));
  }

  getProductsByName(name: string) {
    return productsPromise
      .then(products => products.filter(product => product.name.toLowerCase().indexOf(name.toLowerCase()) > -1));
  }

}
