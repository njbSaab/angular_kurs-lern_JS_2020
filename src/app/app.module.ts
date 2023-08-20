import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {InterpolationModule} from "./interpolation/interpolation.module";
import {EventsToggleModule} from "./events-toggle/events-toggle.module";
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    InterpolationModule,
    EventsToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
