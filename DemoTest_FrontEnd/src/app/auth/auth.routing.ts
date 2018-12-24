
import {Routes,RouterModule} from '@angular/router';
import { NgModule } from "@angular/core";

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

export const authRoutes:Routes=[
  {
   path:'',
   component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
   }
]

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }