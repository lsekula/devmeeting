import { Component, OnInit } from '@angular/core';
import { Item } from './../mock/productList';
import { ItemsRepository } from './items.repository';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  directSort: number = 1;
  public classSort: string = "";
  directSortName:number = 1;
  public classSortName: string = "";
  public myInput = new FormControl();

  public itemsPromise: Promise<Item[]>;
  constructor (private itemsRepository: ItemsRepository) {
      console.log('AppComponent');
  }

  ngOnInit() {
    this.itemsPromise = this.itemsRepository.getItems();
    this.myInput.valueChanges.subscribe(value => this.filersItem(value));
  }

    filersItem (value: string) {
      this.itemsPromise = this.itemsRepository.searchItems(value);
    }

    sortPrice() {
      this.itemsPromise = this.itemsRepository.sortPrice(this.directSort);
       this.directSort = (this.directSort === 1) ? 2 : 1;
       this.classSort =  (this.directSort === 1) ? 'fa-arrow-down' : 'fa-arrow-up';
       this.classSortName = '';
    }

    sortName() {
      this.itemsPromise = this.itemsRepository.sortName(this.directSortName);
      this.directSortName = (this.directSortName === 1) ? 2 : 1;
      this.classSortName =  (this.directSortName === 1) ? 'fa-arrow-down' : 'fa-arrow-up';
      this.classSort = '';
    }
}
