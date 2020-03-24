import { Component, OnInit } from '@angular/core';
import { ProfessionalRegistrationField } from '../../../register/professionalField';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessionalService } from '../../../service/professional.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  id: number;
  professionalRegistrationField: ProfessionalRegistrationField;
  constructor(
    private professionalService: ProfessionalService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.professionalRegistrationField = new ProfessionalRegistrationField();
    this.professionalService.professionalDetailById(this.id).subscribe(
      data => this.professionalRegistrationField = data
    )
  }

  saveUser() {
    this.professionalService.updateUser(this.id, this.professionalRegistrationField).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['dashboard'])
      }
    )
  }

}
