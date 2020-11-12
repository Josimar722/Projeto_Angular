import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, public auth: AuthService, private alert: AlertasService) { }

  ngOnInit(): void {
  }

  sair(){
    this.router.navigate(['/login'])
    localStorage.clear()
    this.alert.showAlertSuccess('Até mais, muito obrigado pela visita. Volte sempre!!!')


  }

}
