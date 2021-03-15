import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'child2-comp',
    template: `<input [ngModel]="userName" (ngModelChange)="onNameChange($event)" />`,
})
export class Child2Component {

    @Input() userName: string;
    @Output() userNameChange = new EventEmitter<string>();
    onNameChange(model: string){        
        this.userName = model;
        this.userNameChange.emit(model);
    }
}