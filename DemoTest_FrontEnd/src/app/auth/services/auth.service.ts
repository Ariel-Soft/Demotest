
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { ApiConfig } from '../../app-api.config';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  baseUrl: any;
  http: any;
  formData = new FormData();

  constructor(private httpClient: HttpClient) {
    this.baseUrl = ApiConfig.baseURL;
    this.http = httpClient;
  }

  // FOR REGISTRATION
  register(registerFormModel) {
    let body = registerFormModel;

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body
    };
    return this.http.post(this.baseUrl + 'api/Account/Register', body, httpOptions)
      .pipe(
        map(res => res),
        catchError(this.handleError));
  }

  // FOR Login
  login(loginFormModel: any): Observable<any> {

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('username', loginFormModel.email);
    urlSearchParams.append('password', loginFormModel.password);
    urlSearchParams.append('grant_type', 'password');
    let body = urlSearchParams.toString();

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }),
      body
    };
    //httpOptions.headers.set("Access-Control-Allow-Origin", "true");
    return this.http.post(this.baseUrl + 'token', body, httpOptions)
      .pipe(
        map(res => res),
        catchError(this.handleError));
  }

  isLoggedIn(): any {
    if (localStorage.getItem('status') == "true") {
      return true;
    } else {
      return false;
    }
  }

  private handleError(error: any): any {
    return throwError(error);
  }
}
