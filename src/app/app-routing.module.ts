import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './content/back-of/login/login.component';
import { SignupComponent } from './content/back-of/signup/signup.component';
import { AppComponent } from './app.component';
import { BackOfComponent } from './content/back-of/back-of.component';
import { ProductsComponent } from './content/back-of/content/products/products.component';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'app', component: AppComponent },
  {
    path: 'backOf',
    component: BackOfComponent,
    children: [
      {
        path: '',
        component: ProductsComponent,
      },
    ],
  },
  { path: '**', redirectTo: 'backOf' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
