import { Component, EventEmitter, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop'; // Добавьте этот импорт

@Component({
  selector: 'app-list-likes',
  templateUrl: './list-likes.component.html',
  styleUrls: ['./list-likes.component.css'],
})
export class ListLikesComponent {
  @Output() listDropped = new EventEmitter<
    CdkDragDrop<{ title: string; poster: string }[]>
  >();

  public movies = [
    {
      title: 'Episode I - The Phantom Menace',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg',
    },

    {
      title: 'Episode IV - A New Hope',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg',
    },

    {
      title: 'Episode IV - A New Hope',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg',
    },

    {
      title: 'Episode IV - A New Hope',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg',
    },

    {
      title: 'Episode IV - A New Hope',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg',
    },
  ];

  public likesQuantity = this.movies.length;

  drop(event: CdkDragDrop<{ title: string; poster: string }[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    this.listDropped.emit(event);
  }
  constructor() {}
}
