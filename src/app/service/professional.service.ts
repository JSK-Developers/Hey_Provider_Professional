import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfessionalRegistrationField } from '../register/professionalField';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {
  serviceUrl = 'http://localhost:8080/apiProvider/';
  baseUrl = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }
  public username;
  sid: any;
  registration(professionalRegistrationFiled: ProfessionalRegistrationField): Observable<any> {
    let httpHeaders = new HttpHeaders().set('content-type', 'application/json');
    let options = {
      headers: httpHeaders
    };
    return this.http.post(this.baseUrl + 'register', professionalRegistrationFiled, options)
  }

  public getRegistrationListByName(name: String): Observable<any> {
    const headers = new HttpHeaders({ Authorization: `${sessionStorage.getItem('TOKEN')}` });
    return this.http.get(`${this.serviceUrl}` + 'provider/' + `${name}`, { headers });
  }

  public professionalDetailById(id: any) {
    const headers = new HttpHeaders({ Authorization: `${sessionStorage.getItem('TOKEN')}` });
    return this.http.get<ProfessionalRegistrationField>(`${this.serviceUrl}` + 'singleProvider/' + `${id}`, { headers });
  }

  public saveImage(uploadImageData: FormData): Observable<any> {
    const headers = new HttpHeaders({ Authorization: `${sessionStorage.getItem('TOKEN')}` });
    return this.http.post(this.serviceUrl + 'saveUserProfile', uploadImageData, { headers });
  }

  updateUser(id: any, professionalRegistrationFiled: any) {
    const headers = new HttpHeaders({ Authorization: `${sessionStorage.getItem('TOKEN')}` });
    return this.http.put(`${this.serviceUrl}` + 'provider/' + `${id}`, professionalRegistrationFiled, { headers });
  }
}
