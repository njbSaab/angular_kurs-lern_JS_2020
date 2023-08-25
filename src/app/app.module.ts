import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolationModule } from './interpolation-lesson/interpolation.module';
import { EventsToggleModule } from './events-toggle-lesson2/events-toggle.module';
import { InputOutputComponent } from './input-output-lesson3/input-output.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DialogComponent } from './dialog/dialog.component';
import { ListLikesComponent } from './list-likes/list-likes.component';

@NgModule({
  declarations: [
    AppComponent,
    InputOutputComponent,
    HeaderComponent,
    SideMenuComponent,
    DialogComponent,
    ListLikesComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InterpolationModule,
    EventsToggleModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
