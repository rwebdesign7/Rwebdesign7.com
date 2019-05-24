import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent} from './navbar/navbar.component';
import { FormulesComponent } from './formules/formules.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AuthService} from './auth.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { WhoAmIComponent } from './who-am-i/who-am-i.component';
import { PaymentComponent } from './payment/payment.component';
import { CustomFormComponent } from './custom-form/custom-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import { StepperComponent } from './stepper/stepper.component';
import { WavesModule } from 'angular-bootstrap-md';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {DemoMaterialModule} from '../material-module';
import {MatButtonModule, MatNativeDateModule} from '@angular/material';
import {  MatIconModule, MatStepperModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [

    AppComponent,
    NavbarComponent,
    HomeComponent,
    FormulesComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    PortfolioComponent,
    WhoAmIComponent,
    PaymentComponent,
    CustomFormComponent,
    NotFoundComponent,
    StepperComponent,

],
  imports: [
    BrowserModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MDBBootstrapModule,
    MDBBootstrapModule.forRoot(),
    WavesModule,
    DemoMaterialModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCZht80k7ffavSoLuRM3y3yiTPptpsUxTM',
      authDomain: 'r-webdesign7.firebaseapp.com',
      databaseURL: 'https://r-webdesign7.firebaseio.com',
      projectId: 'r-webdesign7',
      storageBucket: 'r-webdesign7.appspot.com',
      messagingSenderId: '115861571765'
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
