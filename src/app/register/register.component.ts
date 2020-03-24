import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, FormControl } from '@angular/forms';
import { ProfessionalRegistrationField } from './professionalField';
import { ProfessionalService } from '../service/professional.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted: boolean = false;
  professionalRegistrationField: ProfessionalRegistrationField;
  display = 'none';
  public userFile: any = File;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private professionalService: ProfessionalService
  ) {
    this.professionalRegistrationField = {
      id: 1,
      userName: '',
      email: '',
      phoneNumber: '',
      panNumber: '',
      adharNumber: '',
      bankAccountNumber: '',
      confirmBankAccountNumber: '',
      ifscCode: '',
      password: '',
      confirmPassword: '',
      activeStatus: 0
    }
  }
  get f() {
    return this.professionalRegistrationForm.controls;
  }
  ngOnInit() {
    this.professionalRegistrationForm = this.formBuilder.group({
      id: [''],
      userName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      panNumber: ['', Validators.required],
      adharNumber: ['', Validators.required],
      bankAccountNumber: ['', Validators.required],
      confirmBankAccountNumber: ['', Validators.required],
      ifscCode: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      activeStatus: [0, Validators.required],
    })
  }



  professionalRegistrationForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required]),
    panNumber: new FormControl('', [Validators.required]),
    adharNumber: new FormControl('', [Validators.required]),
    bankAccountNumber: new FormControl('', [Validators.required]),
    confirmBankAccountNumber: new FormControl('', [Validators.required]),
    ifscCode: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });
  PostData(professionalRegistrationForm) {
    this.professionalRegistrationField = new ProfessionalRegistrationField();
    this.professionalRegistrationField.userName = this.userName.value;
    this.professionalRegistrationField.email = this.email.value;
    this.professionalRegistrationField.phoneNumber = this.phoneNumber.value;
    this.professionalRegistrationField.panNumber = this.panNumber.value;
    this.professionalRegistrationField.adharNumber = this.adharNumber.value;
    this.professionalRegistrationField.bankAccountNumber = this.bankAccountNumber.value;
    this.professionalRegistrationField.confirmBankAccountNumber = this.confirmBankAccountNumber.value;
    this.professionalRegistrationField.ifscCode = this.ifscCode.value;
    this.professionalRegistrationField.password = this.password.value;
    this.professionalRegistrationField.confirmPassword = this.confirmPassword.value;
    this.submitted = true;
    this.save();
  }

  save() {
    if (this.professionalRegistrationForm.valid) {

      this.professionalService.registration(this.professionalRegistrationField)
        .subscribe(data => console.log(data), error => console.log(error)

        );
      if (this.professionalRegistrationForm.valid) {
        this.router.navigate(['login'])
      }
      this.professionalRegistrationField = new ProfessionalRegistrationField();
    }

  }

  get userName() {
    return this.professionalRegistrationForm.get('userName');
  }
  get email() {
    return this.professionalRegistrationForm.get('email');
  }
  get phoneNumber() {
    return this.professionalRegistrationForm.get('phoneNumber');
  }
  get panNumber() {
    return this.professionalRegistrationForm.get('panNumber');
  }
  get adharNumber() {
    return this.professionalRegistrationForm.get('adharNumber');
  }
  get bankAccountNumber() {
    return this.professionalRegistrationForm.get('bankAccountNumber');
  }
  get confirmBankAccountNumber() {
    return this.professionalRegistrationForm.get('confirmBankAccountNumber');
  }
  get ifscCode() {
    return this.professionalRegistrationForm.get('ifscCode');
  }
  get password() {
    return this.professionalRegistrationForm.get('password');
  }
  get confirmPassword() {
    return this.professionalRegistrationForm.get('confirmPassword');
  }

  // PostData(_profesionalRegistrationForm: NgForm) {
  //   this.submitted = true;
  //   if (this.professionalRegistrationForm.get('password')?.value == this.professionalRegistrationForm.get('confirmPassword')?.value) {
  //     if (this.professionalRegistrationForm.get('bankAccountNumber')?.value == this.professionalRegistrationForm.get('confirmBankAccountNumber')?.value) {
  //       if (this.professionalRegistrationForm.valid) {
  //         this.professionalRegistrationField.userName = this.professionalRegistrationForm.get('userName')?.value;
  //         this.professionalRegistrationField.email = this.professionalRegistrationForm.get('email')?.value;
  //         this.professionalRegistrationField.phoneNumber = this.professionalRegistrationForm.get('phoneNumber')?.value;
  //         this.professionalRegistrationField.panCard = this.professionalRegistrationForm.get('panCard')?.value;
  //         this.professionalRegistrationField.adharCard = this.professionalRegistrationForm.get('adharCard')?.value;
  //         this.professionalRegistrationField.bankAccountNumber = this.professionalRegistrationForm.get('bankAccountNumber')?.value;
  //         this.professionalRegistrationField.confirmBankAccountNumber = this.professionalRegistrationForm.get('confirmBankAccountNumber')?.value;
  //         this.professionalRegistrationField.ifscCode = this.professionalRegistrationForm.get('ifscCode')?.value;
  //         this.professionalRegistrationField.activeStatus = this.professionalRegistrationForm.get('activeStatus')?.value;
  //         this.professionalRegistrationField.password = this.professionalRegistrationForm.get('password')?.value;
  //         this.professionalRegistrationField.confirmPassword = this.professionalRegistrationForm.get('confirmPassword')?.value;
  //         this.professionalService.registration(this.professionalRegistrationField).subscribe(_ProfessionalRegistrationForm => {
  //           console.log('Registration Success');
  //         }, _error => {
  //           console.log('Error');
  //         }
  //         )
  //       } else {
  //         alert('Password Not Match');
  //       }
  //     }

  //   }
  // }
}
