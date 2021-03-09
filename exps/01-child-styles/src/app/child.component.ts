import { Component, Input } from '@angular/core';


@Component({
    selector: 'child-comp',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
    counter: number = 0;

    @Input() bigFont: boolean = false;

    increment() {
        this.counter++;
    }

    decrement() {
        this.counter--;
    }

    private log(msg: string) {
        console.log('child-comp :: ' + msg);
    }
}