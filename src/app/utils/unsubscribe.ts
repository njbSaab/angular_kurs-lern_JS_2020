import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class Unsubscribe implements OnDestroy {
  public unSubscriber$ = new Subject();
  ngOnDestroy(): void {
    // @ts-ignore
    this.unSubscriber$.next();
    this.unSubscriber$.complete();
  }
}
