import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfessionalRegistrationField } from '../register/professionalField';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {
  serviceUrl = 'http://localhost:8080/apiProvider/';
  constructor(private http: HttpClient) { }
  public username;
  sid: any;
  registration(professionalRegistrationFiled: ProfessionalRegistrationField): Observable<any> {
    let httpHeaders = new HttpHeaders().set('content-type', 'application/json');
    let options = {
      headers: httpHeaders
    };
    return this.http.post(this.serviceUrl + 'provider', professionalRegistrationFiled, options)
  }

  public getRegistrationListByName(name: String): Observable<any> {
    let httpHeaders = new HttpHeaders().set('content-type', 'application/json');
    let options = {
      headers: httpHeaders
    };
    return this.http.get(`${this.serviceUrl}` + 'provider/' + `${name}`, options);
  }

  public professionalDetailById(id: any) {
    return this.http.get<ProfessionalRegistrationField>(`${this.serviceUrl}` + 'singleProvider/' + `${id}`);
  }

  public saveImage(uploadImageData: FormData): Observable<any> {
    return this.http.post(this.serviceUrl + 'saveUserProfile', uploadImageData);
  }

  updateUser(id: any, professionalRegistrationFiled: any) {
    return this.http.put(`${this.serviceUrl}` + 'provider/' + `${id}`, professionalRegistrationFiled);
  }
}
