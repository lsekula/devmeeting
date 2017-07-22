import { Component } from '@angular/core';
import { Product } from './app.product.component';
import { Tags } from './app.tags.component';
import { ProductService } from './app.product.service';

@Component({
    selector: 'app-root',
    providers: [ ProductService ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'app';

    public filtered_list:Array<Product>;

    constructor(private products: ProductService) {
        //this.list[0].setPromoted();
        // this.filtered_list = this.list;
        this.filtered_list = this.products.getProductList();
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

        this.filtered_list = this.products.getProductList().filter(elem => elem.name.includes(search))
    }
}
