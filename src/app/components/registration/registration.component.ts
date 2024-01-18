import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UtenteService} from "../../service/utente.service";
import {Registration} from "../../model/Registration";
import {Subscription} from "rxjs";
import {Login} from "../../model/Login";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  formRegistration: FormGroup;
  //Subscription
  registrationSub: Subscription
  constructor(private utenteService: UtenteService) {
  }
  ngOnInit() {
    this.formRegistration = new FormGroup({
      nome: new FormControl(null, Validators.required),
      cognome: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      passwordRipetuta: new FormControl(null, Validators.required),
      ruolo: new FormControl(null, Validators.required),
    })
  }

  registration(): void {
    const userCred: Registration = this.formRegistration.value;
    this.registrationSub = this.utenteService.registration(userCred).subscribe({
      next: (esito) => {
        if (esito) {
          console.log(this.utenteService.user);
          // redirect alla pagina privata
        } else {
          // messaggio di errore
        }
      }
    });
  }
}
