import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './PAGES/home/home.component';
import { LoginComponent } from './PAGES/login/login.component';
import { CheckoutComponent } from './PAGES/checkout/checkout.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent },
  {path:'checkout', component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
