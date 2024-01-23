import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UtenteService} from "../../service/utente.service";
import {Login} from "../../model/Login";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  formLogin: FormGroup;

  //Subscription
  loginSub: Subscription

  constructor(private utenteService: UtenteService, private router: Router) {
  }

  ngOnInit() {
    this.formLogin = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  login(): void {
    const userCred: Login = this.formLogin.value;
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
  NavRegistration(): void{
    this.router.navigateByUrl('registration');
  }
}
