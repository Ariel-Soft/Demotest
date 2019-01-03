
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.Component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginFormModel: any = {};

  constructor(private authService: AuthService,private router:Router ) {


  }
  loginForm(loginFormModel) {
    debugger
    this.authService.login(loginFormModel).subscribe((result) => {
      var data = result;
      if (data) {
        localStorage.setItem("UserName", data.UserName);
        localStorage.setItem("Token", data.access_token);
        this.router.navigate(['/', 'dashboard']);

      }

    });
  }


}
