import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  HostListener,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @ViewChild('modalContent', { read: ViewContainerRef })
  private modalContent!: ViewContainerRef;

  public isOpen = false;
  public content!: any;
  public componentFactory!: ComponentFactory<any>;
  public modalRef!: ComponentRef<any>;

  constructor(
    private readonly modalService: ModalService,
    private readonly ctr: ComponentFactoryResolver,
  ) {}

  ngOnInit(): void {
    this.modalService.modalSequence$.subscribe((data) => {
      if (!data) {
        this.close();
        return;
      }
      this.isOpen = true;

      this.componentFactory = this.ctr.resolveComponentFactory(data.component);
      this.modalRef = this.modalContent.createComponent(this.componentFactory);

      Object.keys(data.context).forEach((key: string) => {
        this.modalRef.instance[key] = data.context[key];
      });

      this.modalRef.instance.close = data.context.close;
    });
  }

  @HostListener('window:keyup', ['$event.keyCode'])
  public close(code: number = 27) {
    if (code !== 27) {
      return;
    }
    this.isOpen = false;
    if (this.modalRef) {
      this.modalRef.destroy();
    }
  }
}
