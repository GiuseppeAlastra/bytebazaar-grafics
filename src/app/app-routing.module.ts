import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {ErrorPageComponent} from "./components/error-page/error-page.component";
import {ListaUtentiComponent} from "./components/lista-utenti/lista-utenti.component";
import {ListaProdottiComponent} from "./components/lista-prodotti/lista-prodotti.component";
import {loggedGuard} from "./app.guards";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'private', canActivate: [loggedGuard], children: [
      {path: 'lista-utenti', component: ListaUtentiComponent},
      {path: 'lista-prodotti', component: ListaProdottiComponent}
  ]},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
