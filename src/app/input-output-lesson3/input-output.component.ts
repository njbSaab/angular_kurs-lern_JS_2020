import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-output-lesson3',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css', '../app.component.css'],
})
export class InputOutputComponent {
  @Input()
  public title = '';

  @Input()
  public source = '';

  @Input()
  public textAlignCentre = '';

  @Input()
  public widthImg = 0;

  @Input()
  public color = '';

  @Input()
  public showText: any;

  @Input()
  public itemsArray: string[] = [];

  public deleteItem(): void {
    if (this.itemsArray.length <= 1) {
      this.itemsArray.slice(0, 1);
    }
    this.itemsArray = this.itemsArray.slice(0, length - 1);
  }
}
