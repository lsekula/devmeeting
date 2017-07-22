import { Component, OnInit, Input } from '@angular/core';
import { Item } from './../../mock/productList';
import { mainStyle } from './../../style/main';
import { ItemsRepository } from './../items.repository';

@Component({
  selector: 'w-list-item',
  templateUrl: './listItems.component.html',
  styles: [...mainStyle , `
      :host{

      }
      .filter {
        width:100%
      }
      input {
        width:100%
      }
  `]
})
export class ListItemsComponent implements OnInit {
    _items: Item[];
    @Input() items: Item[];
    @Input() sorted: boolean = false;

    constructor(private itemsRepository: ItemsRepository) {
        console.log('ListItemsComponent');
    }
    ngOnInit() {
      this._items = this.items;
    }
}
  