import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolationModule } from './interpolation-lesson/interpolation.module';
import { EventsToggleModule } from './events-toggle-lesson2/events-toggle.module';
import { InputOutputComponent } from './input-output-lesson3/input-output.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DialogComponent } from './dialog/dialog.component';
import { ListLikesComponent } from './list-likes/list-likes.component';
import { ProductCardModule } from './product-card/product-card.module';
import { ProductsFilterPipe } from './products-filter.pipe';
import { ExechangeRatesComponent } from './header/exechange-rates/exechange-rates.component';
import { ExchangeRatesDirective } from './header/exechange-rates/exchange-rates.directive';
import { HiddenDirective } from './header/exechange-rates/hidden.directive';
import { ProductsService } from './products.service';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ModalModule } from './modal/modal.module';

@NgModule({
  declarations: [
    AppComponent,
    InputOutputComponent,
    HeaderComponent,
    SideMenuComponent,
    DialogComponent,
    ListLikesComponent,
    ProductsFilterPipe,
    ExechangeRatesComponent,
    ExchangeRatesDirective,
    HiddenDirective,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InterpolationModule,
    EventsToggleModule,
    SharedModule,
    ProductCardModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  providers: [
    ProductsService,
    {
      provide: 'baseURL',
      useValue: environment.baseURL,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
