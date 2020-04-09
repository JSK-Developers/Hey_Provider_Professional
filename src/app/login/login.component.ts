import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfessionalService } from '../service/professional.service';
import { HttpService } from '../service/http.service';
import { error } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  islogin: boolean = false;
  loginForm: FormGroup;
  userName = "";
  password = "";
  submitted: boolean = false;
  registration = [];
  datauname;
  datapass;
  invalidLogin = false;

  constructor(private router: Router, private providerRegistrationServices: ProfessionalService,
    private httpService: HttpService,
  ) {



  }
  ngOnInit() {
  }



   check: any;
  checkError: any = false;
  checkLogin() {
    this.providerRegistrationServices.authenticate(this.userName, this.password).subscribe(
      data => {
        console.log(data);
        this.check = data;
        if (this.check == true) {
          localStorage.setItem('UserName', this.userName);
          sessionStorage.setItem('AUTHENTICATED_USER', this.userName);
          this.router.navigate(['dashboard']);
        } else {
          this.checkError = true;
        }

      },
      error => {
        console.log(error)
      }
    );
  }

  // getlist(name) {
  //   this.providerRegistrationServices.getRegistrationListByName(name).subscribe(
  //     data => {
  //       if (data[0] != null) {
  //         this.registration = data;
  //         this.datauname = data[0].userName;
  //         this.datapass = data[0].password;
  //         if (this.passwords == this.datapass && this.userNames == this.datauname) {
  //           this.httpService.sessonstorage(this.userNames)
  //           this.router.navigate(['dashboard']);
  //           // sessionStorage.setItem('authenticateUser', this.userNames);
  //         } else {
  //           alert("please try again");
  //         }
  //         console.log(data[0].userName);
  //       } else {
  //         alert("not valid")
  //       }
  //     }
  //   )
  // }
  // get f() {
  //   return this.loginForm.controls;
  // }
  // PostData(loginForm) {
  //   this.submitted = true;
  //   if (this.loginForm.valid) {
  //     this.userNames = this.loginForm.get('userNames').value;
  //     this.passwords = this.loginForm.get('passwords').value;
  //     this.getlist(this.loginForm.get('userNames').value);
  //     // console.log(this.registration.find('name').value)
  //   }


  // }
}
