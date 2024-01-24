import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {UtenteService} from "./utente.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private utenteService: UtenteService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(req.url.includes('login') || req.url.includes('registration')){
      return next.handle(req);
    } else {
      const token = 'Bearer ' + this.utenteService.token;
      const copy = req.clone({
        headers: new HttpHeaders({'Authorization': token})
      });
      return next.handle(copy);
    }
  }
}
