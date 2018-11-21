import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent} from './navbar/navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormulesComponent } from './formules/formules.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule,  ReactiveFormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FormulesComponent,
    ContactComponent
  ],
  imports: [
      ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
