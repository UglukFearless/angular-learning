import { Component} from '@angular/core';
    
@Component({
    selector: 'my-app',
    template: `<div>
                    <h1>Angular Struct Directive</h1>
                    <p *ngIf="condition">
                        Привет мир
                    </p>
                    <p *ngIf="!condition">
                        Пока мир
                    </p>
                    <hr />
                    <p *ngIf="condition;else unset">
                        Привет мир
                    </p>
                    <ng-template #unset>  
                        <p>Пока мир</p>  
                    </ng-template>
                    <hr />
                    <div *ngIf="condition; then thenBlock else elseBlock"></div>   
                    <ng-template #thenBlock>Then template</ng-template>  
                    <ng-template #elseBlock>Else template</ng-template>
                    <hr />
                    <ul>
                        <li *ngFor="let item of items; let i = index">{{ i + 1 }}.{{ ' ' + item }}</li>
                    </ul>
                    <hr />
                    <div [ngSwitch]="order">
                        <ng-template ngSwitchCase="1">{{count * 10}}</ng-template>
                        <ng-template ngSwitchCase="2">{{count * 100}}</ng-template>
                        <ng-template ngSwitchDefault>{{count * 1000}}</ng-template>
                    </div>
                    <hr />
                    <button (click)="toggle()">Toggle</button>
               </div>`,
})
export class AppComponent {

    condition: boolean=true;
    count: number = 0;
    order: number = 0;

    items = ["Гимли", "Глоин", "Траин", "Торин"];

    toggle() {
        this.condition = !this.condition;
        this.order = this.count++ % 3;
    }
}