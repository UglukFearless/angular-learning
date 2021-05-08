import { Component } from '@angular/core';
    
@Component({
    selector: 'my-app',
    template: `
    <div>
        <h2>Встроенные в Pipes</h2>
        <h3>Дата:</h3>
        <div>Без форматирования: {{ myDate }}</div>
        <div>С форматированием: {{ myDate | date:"dd/MM/yyyy" }}</div>
        <h3>Всякое:</h3>
        <div>{{ welcome | uppercase }}</div>
        <div>{{ welcome | lowercase }}</div>
        <div>{{ percentage | percent }}</div>
        <div>{{ percentage | currency }}</div>
        <h3>Обрезание строк:</h3>
        <div>{{ welcome | slice:3 }}</div>
        <div>{{ welcome | slice:3:6 }}</div>
        <h3>Числа:</h3>
        <div>{{ pi | number: '2.1-2' }}</div>
        <div>{{ pi | number: '1.1-5' }}</div>
        <h3>Валюты:</h3>
        <div>{{ money | currency:'RUB':'code' }}</div>
        <div>{{ money | currency:'RUB':'symbol-narrow' }}</div>
        <div>{{ money | currency:'RUB':'symbol':'1.1-1' }}</div>
        <div>{{ money | currency:'RUB':'symbol-narrow':'1.1-1' }}</div>
        <div>{{ money | currency:'RUB':'Только сегодня по цене ' }}</div>
        <h3>Цепочка:</h3>
        <div>{{ welcome | slice:6:12 | uppercase }}</div>
    </div>`,
})
export class AppComponent {

    myDate = new Date(1989, 3, 15);
    welcome = "Hello, World!";
    percentage = 0.14;
    pi = Math.PI;
    money: number = 23.45;
 }