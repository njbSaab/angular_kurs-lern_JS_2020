import { Component, ViewChild } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ListLikesComponent } from '../list-likes/list-likes.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  @ViewChild(ListLikesComponent) listLikesComponent!: ListLikesComponent;

  constructor() {}

  public handleListDropped(event: CdkDragDrop<any[]>) {
    const previousIndex = event.previousIndex;
    const currentIndex = event.currentIndex;

    // Вы можете выполнить нужную вам логику с предыдущим и текущим индексами
    console.log(`Item moved from ${previousIndex} to ${currentIndex}`);
  }
}
