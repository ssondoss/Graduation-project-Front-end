import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserSessionService {
  toLoginPage() {
    this.router.navigate(['/login']);
  }
  isLoggedIn: boolean;
  user: any;

  constructor(public router: Router) {
    if (localStorage.getItem('userToken') == null) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
      this.user = JSON.parse(localStorage.getItem('userToken'));
    }
  }
  public login() {
    this.isLoggedIn = true;
    this.user = JSON.parse(localStorage.getItem('userToken'));
    this.router.navigate(['/']);
  }
  public logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('userToken');
    this.router.navigate(['/']);
  }
  public toHome() {
    this.router.navigate(['/']);
  }
}
