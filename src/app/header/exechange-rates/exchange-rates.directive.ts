import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appExchangeRates]',
})

// carousel autoplay
export class ExchangeRatesDirective implements OnInit {
  @Input('appExchangeRatesFrom')
  public rates!: { value: number; currency: string }[];
  @Input('appExchangeRatesAutoplay')
  public set playAuto(mode: 'off' | 'on') {
    if (!mode) {
      return;
    }
    this.autoplay = mode;
  }
  @Input('appExchangeRatesInterval')
  public ms: number = 1000;

  public context: any;

  private interval: number = 0;

  private index: number = 0;

  public autoplay = 'on';
  constructor(
    private readonly tpl: TemplateRef<any>,
    private readonly vcr: ViewContainerRef,
  ) {}

  public ngOnInit(): void {
    this.context = {
      $implicit: this.index,
      controller: {
        next: () => this.next(),
        prev: () => this.prev(),
      },
    };

    this.vcr.createEmbeddedView(this.tpl, this.context);
    this.resetInterval();
  }

  public next(): void {
    this.resetInterval();
    this.index++;
    if (this.index >= this.rates.length) {
      this.index = 0;
    }
    this.context.$implicit = this.rates[this.index];
  }

  public prev(): void {
    this.resetInterval();
    this.index--;
    if (this.index < 0) {
      this.index = this.rates.length - 1;
    }
    this.context.$implicit = this.rates[this.index];
  }

  private initInterval(): void {
    this.interval = setInterval(() => {
      this.next();
    }, this.ms);
  }

  private resetInterval(): void {
    if (this.autoplay !== 'on') {
      return;
    }
    this.clearInterval();
    this.initInterval();
  }

  private clearInterval(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
