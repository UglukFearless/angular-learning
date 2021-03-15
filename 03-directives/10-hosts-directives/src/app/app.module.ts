import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { BoldDirective } from './bold.directive';
import { BoldDirective2 } from './bold2.directive';
import { BoldDirective3 } from './bold3.directive';
   
@NgModule({
    imports:      [ BrowserModule],
    declarations: [ AppComponent, BoldDirective, BoldDirective2, BoldDirective3],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }