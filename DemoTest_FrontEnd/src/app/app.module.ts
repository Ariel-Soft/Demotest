import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/services/authInterceptor';

import {AuthModule} from '../app/auth/auth.module';
import { AuthGuard } from '../app/auth/services/auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {DashboardComponent} from './Views/dashboard/dashboard.component';

import {DashboardService} from './services/dashboard.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AuthModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [AuthGuard,DashboardService,{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
