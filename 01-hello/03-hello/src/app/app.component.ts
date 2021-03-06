import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<child-comp [userName]="name" [userAge]="age" ></child-comp>
        <input type="text" [(ngModel)]="age" />`,
})
export class AppComponent {
    name: string = 'Гильминт';
    age: number = 1.5;
};