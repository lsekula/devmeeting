import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Product } from './products.service';

@Pipe({
  name: 'nameFilter'
})

@Injectable()
export class NameFilter implements PipeTransform {

  transform(product:Product[], args:any[]):any {
    return product.filter(product => product.name.toLowerCase().indexOf(args[0].toLowerCase()) !== -1);
  }

}
