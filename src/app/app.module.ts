import { NgModule } from '@angular/core';

import {AppComponent} from "./app.component";
import {BrowserModule } from '@angular/platform-browser';
import {HeaderComponent, ArmyPointsComponent} from "./shared";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArmyPointsComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule{}