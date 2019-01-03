
import { Component, OnInit, Directive } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'vr-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerFormModel: any = {};

  constructor(private authService: AuthService,private router:Router) {}

  ngOnInit() {
   
  }

  register(registerFormModel) {
    debugger
    this.authService.register(registerFormModel).subscribe((result) => {
      var data = result;
      if (data.Succeeded) {
        registerFormModel={};
       
        this.router.navigate(['']);

      }
      else{
        
      }

    });
  }
  



}
