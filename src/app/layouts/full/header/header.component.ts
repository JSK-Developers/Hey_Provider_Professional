import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../../service/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {
  checkToken = false;
  constructor(private router: Router,
    public loginService: HttpService, ) {

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


  // token = sessionStorage.getItem('TOKEN');
  // validateToken(token) {
  //   this.loginService.checkTokenValidate(token);
  // }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.validateToken(this.token);
    // if (this.validateToken) {
    //   this.checkToken = false;
    // } else {
    //   this.checkToken = true;
    // }
  }

}
