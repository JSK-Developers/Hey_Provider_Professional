import { Component, OnInit } from '@angular/core';
import { ProfessionalService } from '../../service/professional.service';
import { HttpService } from '../../service/http.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: number = null;
  username: any;


  constructor(
    private professionalService: ProfessionalService,
    private httpService: HttpService,
    private httpClient: HttpClient,
    private router: Router
  ) {
    this.username = httpService.username;
    console.log(this.username);
  }

  loginUserId(username) {
    this.professionalService.getRegistrationListByName(username).subscribe(
      data => {
        this.id = data[0].id;
        console.log(this.id);
        console.log(data[0]);
        this.refreshUser();
      }
    )
  }
  ngOnInit() {
    this.loginUserId(this.username);
  }

  userOrderDetail;
  userName: string;
  email: string;
  phoneNumber: string;
  panNumber: string;
  adharNumber: string;
  bankAccountNumber: string;
  ifscCode: string;
  uid: number;

  updateUser(id: any) {
    console.log(`update ${id}`)
    this.router.navigate(['/editProfile', id])
  }

  refreshUser() {
    this.professionalService.professionalDetailById(this.id).subscribe(
      response => {
        this.userOrderDetail = response;
        this.userName = response.userName;
        this.uid = response.id;
        this.email = response.email;
        this.phoneNumber = response.phoneNumber;
        this.panNumber = response.panNumber;
        this.adharNumber = response.adharNumber;
        this.bankAccountNumber = response.bankAccountNumber;
        this.ifscCode = response.ifscCode;
        console.log(this.userOrderDetail);
      }
    )
  }




}
