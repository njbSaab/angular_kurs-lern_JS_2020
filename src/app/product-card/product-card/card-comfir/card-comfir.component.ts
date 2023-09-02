import { Component, Input } from '@angular/core';
import { IProduct } from '../../../data';

@Component({
  selector: 'app-card-comfir',
  templateUrl: './card-comfir.component.html',
  styleUrls: ['./card-comfir.component.css'],
})
export class CardComfirComponent {
  @Input()
  public product!: IProduct;
  public save!: () => void;
  public close!: () => void;
}
