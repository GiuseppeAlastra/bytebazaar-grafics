import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./service/auth.interceptor";
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { RegistrationComponent } from './components/registration/registration.component';
import { ListaUtentiComponent } from './components/lista-utenti/lista-utenti.component';
import { ListaProdottiComponent } from './components/lista-prodotti/lista-prodotti.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ListaUtentiComponent,
    ListaProdottiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, multi: true, useClass: AuthInterceptor}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
