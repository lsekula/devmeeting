import { Component, OnInit } from '@angular/core';
import { Item, ItemsList } from './../mock/productList';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public itemsPromise: Promise<Item[]>;
  constructor () {
      console.log('AppComponent');
  }

  ngOnInit() {
    this.itemsPromise = new Promise((resolve) => {
        setTimeout(
            () => resolve(ItemsList),
            5000,
        );
    });
  }
}
