import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ModalService {
  public control$ = new Subject();
  public open(data: any) {
    this.control$.next(data);
  }
  public close() {
    this.control$.next(null);
  }
  public get modalSequence$(): Observable<any> {
    return this.control$.asObservable();
  }
  public getControlStream(): Observable<any> {
    return this.control$;
  }
}
