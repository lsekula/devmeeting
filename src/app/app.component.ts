import { Component } from '@angular/core';
import { Product } from './app.product.component';
import { Tags } from './app.tags.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'app';


    public tags:Array<Tags> = [
        new Tags('black'),
        new Tags('red'),
        new Tags('white')
    ];

    public list:Array<Product> = [
        new Product('ferst', 1),
        new Product('second', 2),
        new Product('third', 3),
        new Product('colorado', 3),
        new Product('inna', 3)
    ];

    public filtered_list:Array<Product>;

    constructor() {
        this.list[0].setPromoted();
        // this.filtered_list = this.list;
        this.filtered_list = this.list;
    }

    filterIt() {
        // this.list.forEach(function (elem) {
        //     let filtered = elem.name.indexOf('e');
        //
        //     if (filtered != -1 && !this.filtered_list.includes(elem)) {
        //         // console.log(elem.name);
        //         this.filtered_list.push(elem);
        //     }
        // })
    }

    onKey(filtr) {
        let search = filtr.target.value;

        this.filtered_list = this.list.filter(elem => elem.name.includes(search))
    }
}
