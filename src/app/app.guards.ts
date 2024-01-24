import {CanActivateFn} from "@angular/router";
import {inject} from "@angular/core";
import {UtenteService} from "./service/utente.service";

export const loggedGuard: CanActivateFn = (route, state) => {
  return inject(UtenteService).user != null;
}
