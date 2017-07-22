import { Injectable } from '@angular/core';


@Injectable()
export class ProductService {
    getApp(): string {
        return "Hello world";
    }
}