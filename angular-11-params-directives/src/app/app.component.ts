import { Component} from '@angular/core';
    
@Component({
    selector: 'my-app',
    template: `<div>
                    <h1>Angular Params Directive</h1>
                    <p [bold]="'28px'" [defaultSize]="'14px'">
                        Angular представляет модульную архитектуру приложения
                    </p>
               </div>`,
})
export class AppComponent {}