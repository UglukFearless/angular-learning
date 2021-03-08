import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
    selector: 'child2-comp',
    template: `<ng-content></ng-content>
               <button (click)="change()">Изменить</button>`,
})
export class Child2Component {

    @ContentChild('headerContent', {static: false})
    header: ElementRef;

    change() {
        this.log(this.header + '');
        this.header.nativeElement.textContent = 'Какое-то странное это всё, меня настораживает';
    }

    private log(msg: string) {
        console.log('child2-comp :: ' + msg);
    }
}