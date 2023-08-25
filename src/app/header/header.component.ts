import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output()
  public openDialogHeader = new EventEmitter<void>();

  @Input()
  public drawer!: MatDrawer;

  @Input()
  public myTitle = '';

  constructor() {}
  ngOnInit(): void {}
}
