import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../../service/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {

  constructor(private router: Router,
    public loginService: HttpService) {

  }
  navigateLogin(tag) {
    if (tag === 'Item1') {
      this.router.navigate(['login']);
    }
  }
  navigateLogOut(tag) {
    if (tag === 'Item1') {
      this.router.navigate(['logout']);
    }
  }

  navigateMenu(tag) {
    if (tag === 'Item1') {
      this.router.navigate(['profile']);
    }
  }
}
