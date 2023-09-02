import { Component, Input } from '@angular/core';
import { IProduct } from '../../data';
import { ProductsService } from '../../products.service';
import { DialogComponent } from '../../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalService } from '../../modal/modal.service';
import { CardComfirComponent } from './card-comfir/card-comfir.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input()
  public productCard!: IProduct;

  constructor(
    private productsService: ProductsService,
    public dialog: MatDialog,
    private readonly modalService: ModalService,
  ) {}

  //dialog
  public openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  //// dialog
  public productAdded() {
    this.modalService.open({
      component: CardComfirComponent,
      context: {
        product: { ...this.productCard },
        save: () => {
          console.log('save');
          this.modalService.close();
        },
        close: () => {
          this.modalService.close();
        },
      },
    });
  }
}
