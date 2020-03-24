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
  username: any;
  constructor(private bookingService: BookingServiceService,
    private professionalService: ProfessionalService,
    private httpService: HttpService) {
    this.username = httpService.username;
    console.log(this.username);
  }
  id: number = null;
  loginUserId(username) {
    this.professionalService.getRegistrationListByName(username).subscribe(
      data => {
        this.id = data[0].id;
        this.professionalService.sid = data[0].id;
        console.log(this.id);
        console.log(data[0]);
        this.refreshUser();
      }
    )
  }

  pendingStatus = 'pending';
  CompleteStatus = 'Done';
  ngOnInit() {
    this.refreshUser();
    this.loginUserId(this.username);
  }
  refreshUser() {
    this.bookingService.getAllCompletedLead(this.professionalService.sid).subscribe(
      response => {
        console.log(response);
        this.allBookingDetail = response
      }
    )
  }
}
