import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { SharedModule } from '../shared/shared.module';
import { CardComfirComponent } from './product-card/card-comfir/card-comfir.component';

@NgModule({
  declarations: [ProductCardComponent, CardComfirComponent],
  imports: [CommonModule, SharedModule],
  exports: [ProductCardComponent],
})
export class ProductCardModule {}
