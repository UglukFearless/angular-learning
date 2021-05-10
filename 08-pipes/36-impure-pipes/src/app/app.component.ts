import { Component } from '@angular/core';
    
@Component({
    selector: 'my-app',
    template: `
    <div>
        <h2>Кастомные в Pipes</h2>
        <h3>Замена точки на запятую:</h3>
        <input [(ngModel)]="num" name="fact" />
        <div>Результат без форматирования: {{ num }}</div>
        <div>Результат c форматированием: {{ num | format }}</div>
        <h3>Соединение массива пользователей:</h3>
        <input #user name="user" class="form-control">
        <button class="btn" (click)="users.push(user.value);">Add</button>
        <div>{{ users | join }}</div>
        <div>{{ users | join:2 }}</div>
        <div>{{ users | join:1:3 }}</div>
    </div>`,
})
export class AppComponent {
    num: number = 23.45;
    users: Array<string> = ['Dima', 'Vovo', 'Leon', 'Cap', 'Kosmo', 'Tyava', 'Turbo'];
}