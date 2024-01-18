import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UtenteService} from "../../service/utente.service";
import {UserLogin} from "../../model/user-login";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  formLogin: FormGroup;

  //Subscription
  loginSub: Subscription

  constructor(private utenteService: UtenteService) {
  }

  ngOnInit() {
    this.formLogin = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  login(): void {
    const userCred: UserLogin = this.formLogin.value;
    this.loginSub = this.utenteService.login(userCred).subscribe({
      next: (esito) => {
        if(esito){
          console.log(this.utenteService.user);
          //redirect su pagina privata
        } else {
          //messaggio di errore
        }
      }
    })
  }
}
