import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h2>Angular Lifecycle</h2>
                <child-comp [name]="name"></child-comp>
                <input type="text" [(ngModel)]="name" />
                <input type="number" [(ngModel)]="age" />
                <br />
                <child2-comp [name]="name"></child2-comp>`,
})
export class AppComponent implements OnInit, OnDestroy, OnChanges {
    name: string = 'Бзевчек';
    age: number = 22;

    constructor() {
        this.log('constructor');
    }

    ngOnInit() {
        this.log('ngOnInit');
    }

    ngOnDestroy() {
        this.log('ngOnDestroy');
    }

    ngOnChanges(changes: SimpleChanges): void {
        for (let propName in changes) {
            let chng = changes[propName];
            let cur  = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            this.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
    }

    private log(msg: string) {
        console.log('my-app :: ' + msg);
    }
};