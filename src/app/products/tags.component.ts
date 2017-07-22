import { Component } from '@angular/core';

@Component({
  selector: 'tags',
  template: `<div class="tags">
              <ul><li></li></ul>
             </div>`,
  styles: ['li { dispaly: inline-block }']
})


export class TagsForProduct {

  tags: Array<any> = [
    {id: 1, tags: ['1test','asd','ftsa']},
    {id: 2, tags: ['2test','asd','ftsa']},
    {id: 3, tags: ['3test','asd','ftsa']},
    {id: 4, tags: ['4test','asd','ftsa']},
    {id: 5, tags: ['5test','asd','ftsa']},
  ];

  getTags(id: number) {
    this.tags.forEach(element => {
      if (element.id == id) {
        return element.tags;
      }
    });
  }

}
