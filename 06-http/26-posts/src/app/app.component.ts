import { Component } from '@angular/core';
import { HttpService } from './services/http.service';
import { User } from './model/user';
    
@Component({
    selector: 'my-app',
    template: `
    <div class="form-group">
        <label>Имя</label>
        <input class="form-control" name="userName" [(ngModel)]="user.name" />
    </div>
    <div class="form-group">
        <label>Возраст</label>
        <input class="form-control" type="number" name="Age" [(ngModel)]="user.age" />
    </div>
    <div class="form-group">
        <button class="btn btn-default" (click)="submit(user)">Отправить</button>
    </div>
    <div *ngIf="done">
        <div>Получено от сервера:</div>
        <div>Имя: {{receivedUser.name}}</div>
        <div>Возраст: {{receivedUser.age}}</div>
    </div>
    `,
    providers: [HttpService]
})
export class AppComponent {

    user: User = new User();

    receivedUser: User;
    done: boolean = false;

    constructor(private httpService: HttpService) {}

    submit() {
        this.httpService.postData(this.user)
        .subscribe(
            (data:User) => { this.receivedUser = data; this.done = true; },
            error => console.log(error),
        );
    }
}