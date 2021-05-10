import { Component } from '@angular/core';
    
@Component({
    selector: 'my-app',
    template: `
    <div>
        <h2>Кастомные в Pipes</h2>
        <h3>Замена точки на запятую:</h3>
        <div>Без форматирования: {{ x }}</div>
        <div>С форматированием: {{ x | format }}</div>
        <h3>Соединение массива:</h3>
        <div>{{ users | join }}</div>
        <div>{{ users | join:2 }}</div>
        <div>{{ users | join:1:3 }}</div>
    </div>`,
})
export class AppComponent {
    x: number = 23.45;
    users: Array<string> = ['Dima', 'Vovo', 'Leon', 'Cap', 'Kosmo', 'Tyava', 'Turbo'];
}