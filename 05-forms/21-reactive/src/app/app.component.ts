import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
    
@Component({
    selector: 'my-app',
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
    template: `
    <div class="col-2"> 
        <form [formGroup]="myForm" novalidate (ngSubmit)="submit()">
            <div class="form-group">
                <label>Имя</label>
                <input class="form-control" name="name" formControlName="userName" />
                <div class="alert alert-danger"
                    *ngIf="myForm.controls['userName'].invalid && myForm.controls['userName'].touched">
                    Некорректное имя
                </div>
            </div>
            <div class="form-group">
                <label>Email</label>
                <input class="form-control" name="email" formControlName="userEmail" />
                <div class="alert alert-danger"
                    *ngIf="myForm.controls['userEmail'].invalid && myForm.controls['userEmail'].touched">
                    Некорректный email
                </div>
            </div>
            <div formArrayName="phones">
                <div class="form-group" *ngFor="let phone of myForm.controls['phones']['controls']; let i = index">
                    <label>Телефон</label>
                    <input class="form-control" formControlName="{{i}}" />
                    <div class="alert alert-danger"
                        *ngIf="myForm.controls['phones']['controls'][i].invalid 
                        && myForm.controls['phones']['controls'][i].touched">
                        Некорректный номер телефона
                    </div>
                </div>
            </div>
            <div class="form-group">
                <button type="button" class="btn btn-default" (click)="addPhone()" 
                    style="margin: 4px 0; border: 1px solid grey;">
                    Добавить телефон
                </button>
                <button [disabled]="myForm.invalid" class="btn btn-primary">
                    Отправить
                </button>
            </div>
        </form>
    </div>
    `,
})
export class AppComponent {

    myForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.myForm = this.formBuilder.group({
            "userName": ["Arman", [Validators.required, this.userNameValidator]],
            "userEmail": ["", [Validators.required, Validators.email]],
            "phones": this.formBuilder.array([
                ["+7", [Validators.required, Validators.pattern('[+0-9]{12}')]]
            ]),
        });
    }

    submit() {
        console.log(this.myForm);
    }

    userNameValidator(control: FormControl): {[s: string]: boolean} {
        if (control.value === 'Олег') {
            return {
                buggerNamr: true,
            };
        }
        return null;
    }

    addPhone() {
        (<FormArray>this.myForm.controls['phones']).push(new FormControl("+7", Validators.pattern('[+0-9]{12}')));
    }
}