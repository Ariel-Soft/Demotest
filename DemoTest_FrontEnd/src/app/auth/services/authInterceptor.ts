
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest, HttpEvent, HttpResponse
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
export const InterceptorSkipHeader = 'X-Skip-Interceptor';
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }
  // intercept request and add token
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.headers.has(InterceptorSkipHeader)) {
      const headers = request.headers.delete(InterceptorSkipHeader);
      return next.handle(request.clone({ headers }));
    }
    // modify request
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('Token')}`
      }
    });

    return next.handle(request)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            // http response status code
            console.log(event.status);
          }
        }, error => {
          // http response error
          console.error(error.message);
        })
      )
  };


}


