import { Component, OnInit, Input } from '@angular/core';
import { Item } from './../../mock/productList';
import { mainStyle } from './../../style/main';
import { FormControl } from '@angular/forms';

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
    directSort: number = 1;
    public classSort: string = "";
    directSortName:number = 1;
    public classSortName: string = "";
    @Input() items: Item[];
    @Input() sorted: boolean = false;

    public myInput = new FormControl();

    constructor() {
        console.log('ListItemsComponent');
    }
    ngOnInit() {
      this.myInput.valueChanges.subscribe(value => this.filersItem(value));
      this._items = this.items;
    }

    filersItem (value: string) {
      this._items = this.items.filter((item: Item) => {
        return item.name.toLowerCase().includes(value.toLowerCase()) || item.tags.includes(value) || item.price  == parseFloat(value)
      });
    }

    sortPrice() {
        if (this.directSort === 1) {
         this._items.sort((a, b) => {
            if (a.price < b.price) {
              return -1;
            } else if (a.price > b.price) {
              return 1;
            } else {
              return 0;
            }
          });
       } else {
         this._items.sort((a, b) => {
            if (a.price > b.price) {
              return -1;
            } else if (a.price < b.price) {
              return 1;
            } else {
              return 0;
            }
          });
       }
       this.directSort = (this.directSort === 1) ? 2 : 1;
       this.classSort =  (this.directSort === 1) ? 'fa-arrow-down' : 'fa-arrow-up';
       this.classSortName = '';
    }

    sortName() {
        if (this.directSortName === 1) {
         this._items.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            } else if (a.name > b.name) {
              return 1;
            } else {
              return 0;
            }
          });
       } else {
         this._items.sort((a, b) => {
            if (a.name > b.name) {
              return -1;
            } else if (a.name < b.name) {
              return 1;
            } else {
              return 0;
            }
          });
       }
       this.directSortName = (this.directSortName === 1) ? 2 : 1;
       this.classSortName =  (this.directSortName === 1) ? 'fa-arrow-down' : 'fa-arrow-up';
       this.classSort = '';
    }

}