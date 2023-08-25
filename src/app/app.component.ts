import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //menu
  public myDrawer!: MatDrawer;
  public title = 'LearnMe - Angular';

  //dialog
  constructor(public dialog: MatDialog) {}

  public setSideNav(drawer: MatDrawer): void {
    this.myDrawer = drawer;
  }

  //// menu

  // dialog
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  //// dialog

  //ng-content
  public onClick() {
    console.log('click');
  }
  //ng-content
}

//for input-output-lesson3.component
// public title = 'angular course "learnJS-2020"';
// public image =
//   'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';
//
// public textCenter = 'center';
// public width = 50;
// public myColor = 'black';
// public shownAll = false;
// public items: string[] = [
//   'consectetur adipisicing elit. Alias consequatur doloremque esse expedita fugiat hic, magni molestiae nobis, odit praesentium, sapiente tenetur veniam! Consequatur, explicabo',
//   'consectetur adipisicing elit. Alias consequatur doloremque esse expedita fugiat hic, magni molestiae nobis, odit praesentium, sapiente tenetur veniam! Consequatur, explicabo',
//   'consectetur adipisicing elit. Alias consequatur doloremque esse expedita fugiat hic, magni molestiae nobis, odit praesentium, sapiente tenetur veniam! Consequatur, explicabo',
// ];
// public changeColorTitle() {
//   this.myColor = this.myColor === 'black' ? 'red' : 'black';
// }
//for input-output-lesson3.component
