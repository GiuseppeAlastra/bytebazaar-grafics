import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Login} from "../model/Login";
import {AuthUrl} from "../url/auth.url";
import {catchError, map, Observable, of} from "rxjs";
import {TokenDecoded} from "../model/TokenDecoded";
import {jwtDecode} from "jwt-decode";
import {Registration} from "../model/Registration";

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  token: string;
  user: TokenDecoded;
  constructor(private http: HttpClient) { }

  login(userCred: Login): Observable<boolean> {
    return this.http.post(AuthUrl.login(), userCred, {
      observe: "response",
    }).pipe(
      map(response => {
        this.token = response.headers.get('Authorization');
        if(this.token){
          this.user = jwtDecode(this.token);
          localStorage.setItem('jwt_bytebazaar', this.token);
        } else {
          return false;
        }
        return true;
      }),
      catchError((err: HttpErrorResponse) => {
        return of(false);
      })
    )
  }
  /*autologin
    1. leggo il token dal localstorage
    2. se il token non c'è mando l'utente sulla pagina di login
    3. se il token c'è controllo che non sia scaduto, lo decodifico e lo salvo nel service
    4. se il token c'è reindirizzo l'utente sulla pagina privata*/

  registration(userCred: Registration): Observable<boolean>{
    if(this.http.post(AuthUrl.registration(), userCred, {observe: "response"})){
      return of(true);
    }
    else{
      return of(false);
    }
  }
}
