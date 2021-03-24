import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

export class User {
    name: string;
    email: string;
    phone: string;
}
    
@Component({
    selector: 'my-app',
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
    template: `
    <div class="col-2"> 
        <div class="form-group">
            <label>Имя</label>
            <input class="form-control" name="name" 
                [(ngModel)]="user.name" #name="ngModel" 
                required />
            <div [hidden]="name.valid || name.untouched" class="alert alert-danger">
                Не указано имя
            </div>
        </div>
        <div class="form-group">
            <label>Email</label>
            <input class="form-control" name="email" [(ngModel)]="user.email" 
                #email="ngModel" required email />
            <div [hidden]="email.valid || email.untouched" class="alert alert-danger">
                Некорректный email
            </div>
        </div>
        <div class="form-group">
            <label>Телефон</label>
            <input class="form-control" name="phone" 
                [(ngModel)]="user.phone" #phone="ngModel" required pattern="[0-9]{10}">
            <div [hidden]="phone.valid || phone.untouched" class="alert alert-danger">
                Некорректный телефон
            </div>
        </div>
        <div class="form-group">
            <button [disabled]="name.invalid || email.invalid || phone.invalid" 
                class="btn btn-primary" (click)="addUser()">
                Добавить
            </button>
        </div>
    </div>
    `,
})
export class AppComponent {

    user: User = new User();
    addUser() {
        console.log(this.user);
    }
}