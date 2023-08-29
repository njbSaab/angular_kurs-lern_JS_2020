import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHidden]',
  exportAs: 'hiddenControl',
})
export class HiddenDirective {
  @HostBinding('style.visibility')
  public visibility: 'visible' | 'hidden' = 'visible';

  public show(): void {
    this.visibility = 'visible';
  }
  public hide(): void {
    this.visibility = 'hidden';
  }

  // @HostListener('click', ['$event'])
  // public onClick(event: MouseEvent) {
  //   this.visibility = this.visibility === 'visible' ? 'hidden' : 'visible';
  //   console.log(event);
  // }

  constructor() {}
}
