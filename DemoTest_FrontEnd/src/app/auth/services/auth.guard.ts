import { Injectable, Inject } from '@angular/core';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route } from '@angular/router';
import { AuthService } from './auth.service';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()

export class AuthGuard {

  constructor(
    private router: Router,
    private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    debugger
    let isActive = this.checkLogin(state.url);
    if (isActive) {
      return isActive;
    }
    else {
      this.router.navigate(['/auth']);
    }
  }

  checkLogin(Url): boolean {
    debugger
    let checkLogin = this.authService.isLoggedIn();
    if (checkLogin === true) {
      return true;
    } else {
      return false;
    }
  }
}
