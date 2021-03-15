import { Component} from '@angular/core';
    
@Component({
    selector: 'my-app',
    template: `<div [ngClass] = "currentClasses"  [ngStyle] = "{'border':'1px solid black'}">
                    <h1 [ngClass]="{invisible: visibility}">Angular Directiveies</h1>
                    <p [ngClass] = "{segoePrintFont:isSegoe}">
                        Angular представляет модульную архитектуру приложения
                    </p>
               </div>
               <button (click)="toggle()">Toggle</button>`,
    styles: [
        `.verdanaFont{font-size:13px; font-family:Verdana;}
         .navyColor{color:navy;}
         .invisible{display:none;}
         .segoePrintFont{font-size:14px; font-family:"Segoe Print";}`
    ]
})
export class AppComponent {
    public isVerdana: boolean = true;
    public isSegoe: boolean = true;
    public isNavy: boolean = true;
    public visibility: boolean = false;

    public currentClasses = {
        verdanaFont: this.isVerdana,
        navyColor: this.isNavy
    }

    public toggle() {
        this.visibility =! this.visibility;
    }
}