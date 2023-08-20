import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpolationComponentComponent } from './interpolation-component/interpolation-component.component';



@NgModule({
  declarations: [
    InterpolationComponentComponent
  ],
  exports: [
    InterpolationComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InterpolationModule { }
