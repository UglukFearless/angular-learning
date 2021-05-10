import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { FormatPipe }   from './format.pipe';
import { JoinPipe }   from './Join.pipe';
   
@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, FormatPipe, JoinPipe ],
    bootstrap:    [ AppComponent ],
})
export class AppModule {}