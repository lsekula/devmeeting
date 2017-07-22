import { Component } from '@angular/core';
import { Product} from './app.product.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  
  public list: Array<Product> = [
      new Product('ferst', 1),
      new Product('second', 2),
      new Product('third', 3)
  ];

  constructor() {
      this.list[0].setPromoted();
  }
}
