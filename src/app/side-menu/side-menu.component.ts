import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent implements OnInit {
  //menu
  @Output()
  public setSideNavControl: EventEmitter<MatDrawer> =
    new EventEmitter<MatDrawer>(true);

  @ViewChild('drawer', { static: true })
  public sideMenu!: MatDrawer;
  showFiller = false;
  //menu

  ngOnInit(): void {
    this.setSideNavControl.emit(this.sideMenu);
  }
}
