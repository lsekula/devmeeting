import {Component, Injectable} from '@angular/core';
import { Item, ItemsList } from './../mock/productList';

@Injectable()
export class ItemsRepository {
    getItems(): Promise<Item[]> {
        return new Promise((resolve) => {
            setTimeout(
                () => resolve(ItemsList),
                5000,
            );
        });
    }

    searchItems(value: string): Promise<Item[]> {
        return new Promise((resolve) => {
            let _items = ItemsList.filter((item: Item) => {
                return item.name.toLowerCase().includes(value.toLowerCase()) || item.tags.includes(value) || item.price  == parseFloat(value)
            });
            setTimeout(
                () => resolve(_items),
                500,
            );
        });
    }

    sortPrice(direct: number): Promise<Item[]> {
        return new Promise((resolve) => {
            let _items = ItemsList;
            if (direct === 1) {
                _items.sort((a, b) => {
                    if (a.price < b.price) {
                    return -1;
                    } else if (a.price > b.price) {
                    return 1;
                    } else {
                    return 0;
                    }
                });
            } else {
                _items.sort((a, b) => {
                    if (a.price > b.price) {
                    return -1;
                    } else if (a.price < b.price) {
                    return 1;
                    } else {
                    return 0;
                    }
                });
            }
            setTimeout(
                () => resolve(_items),
                500,
            );
        });
    }
    sortName(direct: number): Promise<Item[]> {
        return new Promise((resolve) => {
                let _items = ItemsList;
                if (direct === 1) {
                _items.sort((a, b) => {
                    if (a.name < b.name) {
                        return -1;
                    } else if (a.name > b.name) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
            } else {
                _items.sort((a, b) => {
                    if (a.name > b.name) {
                        return -1;
                    } else if (a.name < b.name) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
            }

            setTimeout(
                () => resolve(_items),
                500,
            );
        });
    }
}
