import { Component, OnInit, Input } from '@angular/core';
import { Item } from './../../mock/productList';
import { mainStyle } from './../../style/main';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'w-item',
  templateUrl: './item.component.html',
  styles: [...mainStyle , `
      :host{
        background-color:#97bacc;
        display:block;
        margin:5px
      }
      .tag {
        margin:5px
      }
  `]
})
export class ItemComponent implements OnInit {
    @Input() item: Item;
    constructor() {
        console.log('ItemComponent');
    }
    ngOnInit() {
    }
}
