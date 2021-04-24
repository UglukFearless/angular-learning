import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import { HomeComponent }   from './home.component';
import { AboutComponent }   from './about.component';
import { NotFoundComponent }   from './not-found.component';
import { ItemComponent }   from './item.component';

// определение маршрутов
const appRoutes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item/:id', component: ItemComponent },
    { path: '**', component: NotFoundComponent },
];
   
@NgModule({
    imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent, HomeComponent, AboutComponent, NotFoundComponent, ItemComponent ],
    bootstrap:    [ AppComponent ],
})
export class AppModule { }