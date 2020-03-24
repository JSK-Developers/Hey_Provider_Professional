import { Component, OnInit, Inject } from '@angular/core';
import { BookingServiceService } from '../../service/booking-service.service';
import { DialogOverviewExampleDialogComponent } from '../dialog/dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BookServicesByUserField } from '../bookServicesByUserFiled';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-lead',
  templateUrl: './new-lead.component.html',
  styleUrls: ['./new-lead.component.css']
})
export class NewLeadComponent implements OnInit {
  allBookingDetail: any[] = [];
  name: any;
  constructor(
    private bookingService: BookingServiceService,
    public dialog: MatDialog
  ) { }
  pendingStatus = 'pending';
  CompleteStatus = 'Done';
  ngOnInit() {
    this.refreshUser();
  }
  refreshUser() {
    this.bookingService.getAllUser().subscribe(
      response => {
        console.log(response);
        this.allBookingDetail = response
      }
    )
  }
  getDetail(id) {
    this.bookingService.id = id;
  }
  otp: any
  openDialog(): void {
    const dialogRef = this.dialog.open(OpenModelComponent, {
      width: '250px',
      data: { name: this.name, otp: this.otp }
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log('The dialog was closed');
      this.otp = result;
    });
  }

}
@Component({
  selector: 'app-open-model',
  template: `
  <form autocomplete="on" [formGroup]="myForm">
  <h1 mat-dialog-title>Hi {{data.name}}</h1>
<div mat-dialog-content>
  <p>Enter OTP</p>
    <input type="text" formControlName="aotp" tabindex="1">
</div>
<div mat-dialog-actions>
  <button mat-button type="submit" (click)="onSubmit()" [disabled]="!myForm.valid" tabindex="2">Ok</button>
  <button mat-button (click)="onNoClick()" tabindex="-1">No Thanks</button>
</div>
</form>
`
})
export class OpenModelComponent {
  constructor(
    private bookingService: BookingServiceService,
    private router: Router,
    public dialogRef: MatDialogRef<OpenModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  aotp: number;
  myForm = new FormGroup({
    aotp: new FormControl('', [
      Validators.required
    ]),
  });

  chotp: any;
  bookServicesByUserField: BookServicesByUserField;
  ngOnInit() {

  }

  onSubmit() {
    this.bookingService.getServiceDetailById(this.bookingService.id).subscribe(
      data => {
        this.bookServicesByUserField = data

        if (this.myForm.get('aotp').value == data.end_services_otp) {
          this.bookingService.updateActiveStatus(this.bookingService.id, this.bookServicesByUserField).subscribe(
            data => {
              console.log(data)
            }
          )
          this.router.navigate(['completed-lead'])
          this.dialogRef.close();
        }
      }
    )

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
