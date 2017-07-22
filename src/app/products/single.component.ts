import { Component } from '@angular/core';

@Component({
  selector: 'single-product',
  template: `<div class="item">
              <h2>{{ productTitle }}</h2>
             </div>`
})

export class SingleProduct {
  productTitle: string = 'Produkt testowy';
}
