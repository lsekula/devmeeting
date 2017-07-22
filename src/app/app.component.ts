import { Component } from '@angular/core';
import { Item, ItemsList } from './../mock/productList';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  itemsList = ItemsList;
  constructor () {
      console.log("AppComponent", this.itemsList);
  }

  getPromoItems() {
      let promoItems: Item[] = [];
      this.itemsList.forEach((value) => {
            if (value.promo) {
                promoItems.push(value);
            }
      })
      return promoItems;
  }
}
