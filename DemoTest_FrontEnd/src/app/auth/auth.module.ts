
import { NgModule } from '@angular/core';
//import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {AuthRoutingModule } from './auth.routing';
import { AuthService } from './services/auth.service';
// import { AuthInterceptor } from './services/authInterceptor';

import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';


@NgModule({
  imports: [AuthRoutingModule, HttpModule, CommonModule, FormsModule],
  providers: [AuthService],
  declarations: [LoginComponent,RegisterComponent],
  entryComponents: []
})


export class AuthModule {

}
