import { Inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MainProducts } from './data';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {
  constructor(
    private http: HttpClient,
    @Inject('baseURL') private baseURL: string,
  ) {}
  public getProducts(): Observable<MainProducts | null> {
    return this.http.get<MainProducts>(`${this.baseURL}/products`).pipe(
      catchError(() => {
        return of(null); // В случае ошибки возвращаем пустой массив
      }),
    );
  }
}
