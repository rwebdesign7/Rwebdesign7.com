import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {FormulesComponent} from './formules/formules.component';
import {ContactComponent} from './contact/contact.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { PortfolioComponent } from "./portfolio/portfolio.component";
import {WhoAmIComponent} from './who-am-i/who-am-i.component';
import {PaymentComponent} from './payment/payment.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
   { path: '', component : HomeComponent },
      { path: 'home', component : HomeComponent },
   {path : 'formule', component : FormulesComponent},
      {path : 'contact', component : ContactComponent},
  {path : 'login', component : LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'who', component : WhoAmIComponent},
  {path :'portfolio', component : PortfolioComponent},
  {path : 'payment' , component: PaymentComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
