import { Component } from '@angular/core';
import { DataService } from './data.service';
    
@Component({
    selector: 'my-app',
    template: `
        <div class="panel">
            <data-comp></data-comp>
            <data-comp></data-comp>
        </div>`,
})
export class AppComponent {

    items: string[] = [];
    name: string;

    constructor(private dataService: DataService) {}

    addItem(name: string) {
        this.dataService.addData(name);
    }

    ngOnInit() {
        this.items = this.dataService.getData();
    }
}