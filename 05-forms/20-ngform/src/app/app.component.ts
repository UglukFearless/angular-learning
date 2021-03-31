import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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
        <form #myForm="ngForm" novalidate (ngSubmit)="onSubmit(myForm)">
            <div class="form-group">
                <label>Имя</label>
                <input class="form-control" name="name" [(ngModel)]="name" required />
            </div>
            <div class="form-group">
                <label>Email</label>
                <input class="form-control" name="email" ngModel required email />
            </div>
            <div class="form-group">
                <label>Телефон</label>
                <input class="form-control" name="phone" ngModel required pattern="[0-9]{10}" />
            </div>
            <div class="form-group">
                <input type="submit" [disabled]="myForm.invalid" class="btn btn-primary" value="Отправить" />
            </div>
        </form>
        <div>Имя: {{myForm.value.name}}</div>
        <div>Email: {{myForm.value.email}}</div>
    </div>
    `,
})
export class AppComponent {

    name: string;
    email: string;
    phone: string;

    onSubmit(form: NgForm){
        console.log(form);
    }
}