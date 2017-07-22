import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent

{

  productTitle: string = 'Produkt testowy';

  products: {} = [
  {id: 1, name: 'Testowy', price: '121', productImage: '', promoted: true},
  {id: 2, name: 'Testowy', price: '321', productImage: '', promoted: false},
  {id: 3, name: 'Testowy', price: '311', productImage: '', promoted: false},
  {id: 4, name: 'Testowy', price: '125', productImage: '', promoted: false},
  {id: 5, name: 'Testowy', price: '221', productImage: '', promoted: false}
  ];

}
