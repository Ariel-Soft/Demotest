import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../app/auth/services/auth.guard';

import {DashboardComponent} from './Views/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: null,
    children: [
      {
        path: '',
        loadChildren: '../app/auth/auth.module#AuthModule'
     
      }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
     canActivateChild: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
