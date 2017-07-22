import {Component, Input} from '@angular/core';

export class Product {
    name: string;
    price: number;
    promoted: boolean;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
        this.promoted = false;
    }

    setPromoted() {
        this.promoted = true;
    }
}

@Component({
    selector: 'product',
    template: `
        <p>Product name: {{ item.name }}, price: {{ item.price }}
            <span *ngIf="item.promoted">, product is promoted</span>
        </p>
        
    `
})

export class ProductComponent {
    // To receive data we use Input annotation
    @Input() public item;
}
