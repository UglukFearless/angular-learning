import { Component, Input } from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `<p>Имя пользователя: {{userName}}</p>
            <p>Возраст пользователя: {{userAge}}</p>`,
})
export class ChildComponent {
    @Input() userName: string;
    _userAge: number;

    @Input() 
    set userAge(age: number) {
        if (age < 0) {
            this._userAge = 0;
        } else if (age > 130) {
            this._userAge = 130;
        } else {
            this._userAge = age;
        }
    }
    get userAge():number {
        return this._userAge;
    }
}