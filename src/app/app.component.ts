import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { IProduct, MainProducts } from './data';
import { Unsubscribe } from './utils/unsubscribe';
import { Observable } from 'rxjs';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends Unsubscribe implements OnInit {
  public myDrawer!: MatDrawer;
  public title = 'LearnMe - Angular';
  public InputValue = '';
  public onlyFavorites = false;
  public setSideNav(drawer: MatDrawer): void {
    this.myDrawer = drawer;
  }
  public products$!: Observable<MainProducts | null>;
  public searchText = '';
  //// menu

  //ng-content
  public onClick() {}
  //ng-content

  // search take input val
  public search(text: string): void {
    this.searchText = text;
  }
  // search products
  public productsFilter(products: IProduct[]): IProduct[] {
    return products.filter((product) =>
      `${product.title} ${product.price}`
        .toLowerCase()
        .includes(this.searchText.toLowerCase()),
    );
  }

  // favorite
  public toggleOnlyFavorites(event: MatCheckboxChange) {
    this.onlyFavorites = event.checked;
  }

  constructor(private productService: ProductsService) {
    super();
  }

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
    //  .subscribe((res) => {
    // console.log(res.products);});
  }

  //utils pattern async subscribe
  // products$.pipe(takeUntil(this.unSubscriber$)).subscribe((prod) => {
  //   this.products = prod;
  // });
  // }
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
