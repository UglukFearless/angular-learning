import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h2>Количество кликов: {{clicks}}</h2>
               <child-comp (onChanged)="onChanged($event)"></child-comp>
               <br />
               <child2-comp [(userName)]="name"></child2-comp>
               <div>Выбранное имя: {{name}}</div>`,
})
export class AppComponent {
    clicks: number = 0;
    name: string = 'Бзевчек';
    onChanged(increased: boolean) {
        increased === true ? this.clicks++ : this.clicks--;
    }
};