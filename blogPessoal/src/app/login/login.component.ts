import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(private authService: AuthService, private router: Router, private alert: AlertasService) { }

  ngOnInit() {
  }

  entrar(){
    this.authService.logar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp
      localStorage.setItem('token', this.userLogin.token)
      this.alert.showAlertSuccess('Seja bem vindo ao meu blog pessoal!')
      this.router.navigate(['/feed'])
    })

     }
  
   

}
