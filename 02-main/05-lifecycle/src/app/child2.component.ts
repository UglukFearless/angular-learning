import { Component, 
         Input, 
         OnInit,
         DoCheck,
         OnChanges,
         AfterContentInit, 
         AfterContentChecked, 
         AfterViewChecked, 
         AfterViewInit 
        } from '@angular/core';

@Component({
    selector: 'child2-comp',
    template: `<p>Пока, грызи стул, {{name}}!</p>`,
})
export class Child2Component implements OnInit,
                                        DoCheck,
                                        OnChanges,
                                        AfterContentInit, 
                                        AfterContentChecked, 
                                        AfterViewChecked, 
                                        AfterViewInit  {

    @Input() name: string;
    count: number = 1;

    ngOnInit() {
       
        this.log(`ngOnInit`);
      }
      ngOnChanges() {
         
        this.log(`OnChanges`);
      }
      ngDoCheck() {
         
        this.log(`ngDoCheck`);
      }
      ngAfterViewInit() {
         
        this.log(`ngAfterViewInit`);
      }
      ngAfterViewChecked() {
         
        this.log(`ngAfterViewChecked`);
      }
      ngAfterContentInit() {
         
        this.log(`ngAfterContentInit`);
      }
      ngAfterContentChecked() {
         
        this.log(`ngAfterContentChecked`);
      }
   
      private log(msg: string) {
          console.log('child2-comp :: ' + this.count + ". " + msg);
          this.count++;
      }
}