import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpclient: HttpClient,
    private router: Router
  ) { }
  public username;
  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }
  logout() {
    sessionStorage.removeItem('authenticateUser');
    this.router.navigate(['/logout']);
  }
  sessonstorage(name) {
    sessionStorage.setItem('authenticateUser', name);
    this.username = name;
  }
}
