import { Component, OnInit } from '@angular/core';
import { BookingServiceService } from '../../service/booking-service.service';
import { ProfessionalService } from '../../service/professional.service';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-completed-lead',
  templateUrl: './completed-lead.component.html',
  styleUrls: ['./completed-lead.component.css']
})
export class CompletedLeadComponent implements OnInit {
  allBookingDetail: any[] = [];
  userName: any;
  constructor(private bookingService: BookingServiceService,
    private professionalService: ProfessionalService,
    private httpService: HttpService) {
    this.userName = httpService.userName;
    console.log(this.userName);
  }
  id: number = null;
  // loginUserId(userName) {
  //   this.professionalService.getRegistrationListByName(userName).subscribe(
  //     data => {
  //       this.id = data[0].id;
  //       this.professionalService.sid = data[0].id;
  //       console.log(this.id);
  //       console.log(data[0]);
  //       this.refreshUser();
  //     }
  //   )
  // }


  pendingStatus = 'pending';
  CompleteStatus = 'Done';
  ngOnInit() {
    // this.refreshUser();
    // this.loginUserId(this.userName);
    // this.httpService.sessonstorage();
    // this.httpService.getUserId();
    this.getUserId();
  }

  getUserId() {
    this.httpService.getUserId().subscribe(
      data => {
        console.log(data);
        this.refreshUser(data);
      }
    )
  }
  refreshUser(id) {
    this.bookingService.getAllCompletedLead(id).subscribe(
      response => {
        console.log(response);
        this.allBookingDetail = response
      }
    )
  }
}
