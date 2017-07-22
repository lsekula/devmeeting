import { Component, OnInit, Input } from '@angular/core';
import { Item } from './../../mock/productList';
import { mainStyle } from './../../style/main';

@Component({
  selector: 'w-list-item-promoted',
  templateUrl: './itemListPromoted.component.html',
  styles: [...mainStyle , `
      :host{

      }
  `]
})
export class ListItemsPromotedComponent implements OnInit {
    @Input() items: Item[];

    constructor() {
        console.log("ListItemsComponent");
    }


    ngOnInit() {
    }

  getPromoItems() {
      let promoItems: Item[] = [];
      this.items.forEach((value) => {
            if (value.promo) {
                promoItems.push(value);
            }
      })
      return promoItems;
  }
}