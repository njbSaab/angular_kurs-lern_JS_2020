import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output()
  public openDialogHeader = new EventEmitter<void>();

  @Output()
  public loginPageActive = new EventEmitter<boolean>();

  @Input()
  public drawer!: MatDrawer;

  @Input()
  public myTitle = '';

  public showLoginComponent = false;

  toggleLoginComponent() {
    this.showLoginComponent = !this.showLoginComponent;
    this.router.navigate(['login']);
    this.loginPageActive.emit(this.showLoginComponent);
  }

  constructor(private router: Router) {}
  ngOnInit(): void {}
  navigateToLogin() {
    // Перенаправьте пользователя на страницу входа (app-login)
    this.router.navigate(['login']);
  }
}
