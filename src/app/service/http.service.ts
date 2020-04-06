import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

export class User {
  constructor(
    public status: string,
  ) { }

}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl = "http://localhost:8080";
  AUTHENTICATED_USER: any;
  TOKEN: any;
  constructor(
    private httpclient: HttpClient,
    private router: Router,
  ) { }
  public userName;
  serviceUrl = 'http://localhost:8080/apiProviderRegisterAndLogin/';
  isUserLoggedIn() {
    let user = localStorage.getItem('UserName');
    return !(user === null);
  }
  logout() {
    localStorage.removeItem('UserName');
    this.router.navigate(['/logout']);
  }
  getUserId() {
    let name = localStorage.getItem('UserName');
    const headers = new HttpHeaders({ Authorization: `${sessionStorage.getItem('TOKEN')}` });
    return this.httpclient.get('http://localhost:8080/apiProvider/' + `${name}`, { headers });
  }



  User: any;
  authenticate(username, password) {
    return this.httpclient.post<any>(
      `${this.apiUrl}/authenticate`, {
      username,
      password
    }
    ).pipe(
      map(
        data => {
          localStorage.setItem('UserName', username);
          sessionStorage.setItem('AUTHENTICATED_USER', username);
          sessionStorage.setItem('TOKEN', `Bearer ${data.token}`);
        }
      )
    )
  }

  checkTokenValidate(token) {
    const headers = new HttpHeaders({ Authorization: `${sessionStorage.getItem('TOKEN')}` });
    return this.httpclient.get('http://localhost:8080/checkTokenExpireOrNot/' + `${token}`, { headers });
  }
}
