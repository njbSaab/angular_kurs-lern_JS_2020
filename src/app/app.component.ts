import { Component, Injectable, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
// import { DialogComponent } from './dialog/dialog.component';
// import { MatDialog } from '@angular/material/dialog';
import { IProduct, products$ } from './data';
import { Unsubscribe } from './utils/unsubscribe';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
@Injectable()
export class AppComponent extends Unsubscribe implements OnInit {
  //json
  public products!: IProduct[];
  //menu
  public myDrawer!: MatDrawer;
  public title = 'LearnMe - Angular';
  public InputValue = '';
  public setSideNav(drawer: MatDrawer): void {
    this.myDrawer = drawer;
  }
  public searchText = '';
  //// menu

  //dialog
  // constructor(public dialog: MatDialog) {}

  // dialog
  // openDialog() {
  //   const dialogRef = this.dialog.open(DialogComponent);
  //
  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
  //// dialog

  //ng-content
  public onClick() {
    console.log('click');
  }
  //ng-content

  // search take input val
  public search(text: string): void {
    this.searchText = text;
  }
  // search products
  // public productsFilter(products: IProduct[]): IProduct[] {
  //   return products.filter((product) =>
  //     `${product.title} ${product.price}`
  //       .toLowerCase()
  //       .includes(this.searchText.toLowerCase()),
  //   );
  // }
  ngOnInit(): void {
    products$.pipe(takeUntil(this.unSubscriber$)).subscribe((prod) => {
      this.products = prod;
    });
  }
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
