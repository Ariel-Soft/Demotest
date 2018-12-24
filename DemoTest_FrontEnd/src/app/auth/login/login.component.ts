
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.Component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginFormModel: any = {};

  constructor( private authService: AuthService,) {
  

  }
  loginForm(loginFormModel){
    
    this.authService.login(loginFormModel).subscribe((result) => {

      var data=result;
    });
  }

  
}
