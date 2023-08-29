import { Component } from '@angular/core';

@Component({
  selector: 'app-exechange-rates',
  templateUrl: './exechange-rates.component.html',
  styleUrls: ['./exechange-rates.component.css'],
})
export class ExechangeRatesComponent {
  public rates: { value: number; currency: string }[] = [
    { value: 12, currency: 'USD' },
    { value: 10, currency: 'EUR' },
    { value: 40, currency: 'UAH' },
  ];
  public mode: 'off' | 'on' = 'on';
  public ms = 2000;
}
