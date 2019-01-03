import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ApiConfig } from '../app-api.config';
import { catchError, map } from 'rxjs/operators';


@Injectable()
export class DashboardService {
  baseUrl: any;
  getVendors: any;
  http: any;
  formData = new FormData();
  
  constructor(httpClient: HttpClient) {
    this.baseUrl = ApiConfig.baseURL;
    //this.getVendors = ApiConfig.vendorsApi;
    this.http = httpClient;
  }

  public getVendorList(): Observable<any> {

   // let body: any = getStartdFormModel;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
 //   httpOptions.headers.set("Access-Control-Allow-Origin", "true");
    return this.http.get(this.baseUrl + 'api/Vendor/GetVendors', httpOptions)
      .pipe(
        map(res => res),
        catchError(this.handleError)
      );
  }

 public getProductByVendorId(vendorId):any{
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  return this.http.get(this.baseUrl + 'api/Product/GetProductByVendorId?vendorId=' + vendorId, httpOptions)
    .pipe(
      map(res => res),
      catchError(this.handleError)
    );
 }

  
  private handleError(error: any): any {
    return throwError(error);
  }
}
