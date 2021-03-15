import { Component, ViewChild, ElementRef } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
    selector: 'my-app',
    template: `<h2>Angular ViewChild</h2>
                <p #userName>{{name}}</p>
                <p>{{userName.textContent}}</p>
                <input type="text" [(ngModel)]="name" />
                <hr />
                <!-- <child-comp #counter></child-comp>
                <button (click)="counter.increment()">+</button>
                <button (click)="counter.decrement()">-</button>
                <hr /> -->
                <child-comp></child-comp>
                <button (click)="increment()">+</button>
                <button (click)="decrement()">-</button>
                <hr />
                <p #nameText>{{name}}</p>
                <p>{{nameText.textContent}}</p>
                <button (click)="change()">Изменить</button>
                <hr />
                <child2-comp>
                    <h3 #headerContent>Добро пожаловать, {{name}}!</h3>
                </child2-comp>`,
})
export class AppComponent {
    name: string = 'Питончик';

    @ViewChild(ChildComponent, {static: false})
    private counterComponent: ChildComponent;

    @ViewChild('nameText', {static: false})
    nameParagraph: ElementRef;
     
    increment() { this.counterComponent.increment(); }
    decrement() { this.counterComponent.decrement(); }

    change() {
        this.log(this.nameParagraph.nativeElement.textContent);
        this.nameParagraph.nativeElement.textContent = 'Бряньдизяблить!';
    }

    private log(msg: string) {
        console.log('my-app :: ' + msg);
    }
};