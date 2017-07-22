import { Component, Input} from '@angular/core';

export class Tags {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }
}

@Component({
    selector: 'tags',
    template: `
        <p>tags: {{ item.name }}</p>
    `
})

export class TagsComponent {
    // To receive data we use Input annotation
    @Input() public tags;
}

