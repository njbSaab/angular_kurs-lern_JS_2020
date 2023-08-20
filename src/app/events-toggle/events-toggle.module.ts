import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventToggleComponentsComponent } from './event-toggle-components/event-toggle-components.component';



@NgModule({
  declarations: [
    EventToggleComponentsComponent
  ],
  exports: [
    EventToggleComponentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EventsToggleModule { }
