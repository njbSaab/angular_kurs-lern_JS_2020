import {
  Component,
  ContentChild,
  EventEmitter,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
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

  // ng-template content
  @ViewChild('contentBlock', { static: true, read: ViewContainerRef })
  public block!: ViewContainerRef;

  @ContentChild('contentTemplate', { static: true })
  public contentTmpl!: TemplateRef<any>;
  // ng-template content

  ngOnInit(): void {
    this.block.createEmbeddedView(this.contentTmpl);
    this.setSideNavControl.emit(this.sideMenu);
  }
}
