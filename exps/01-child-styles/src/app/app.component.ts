import { Component } from '@angular/core';
    
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    condition: boolean=true;
    count: number = 0;
    order: number = 0;
    bigFont = true;

    items = ["Гимли", "Глоин", "Траин", "Торин"];

    toggle() {
        this.condition = !this.condition;
        this.order = this.count++ % 3;
    }
}