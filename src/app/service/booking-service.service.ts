import { Injectable } from '@angular/core';
import { BookServicesByUserField } from '../material-component/bookServicesByUserFiled';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {
  ServicesUrl = 'http://localhost:8080/api/';
  constructor(private httpclient: HttpClient) { }
  public id;
  getAllUser() {
    let httpHeaders = new HttpHeaders().set('content-type', 'application/json');
    let options = {
      headers: httpHeaders
    };
    return this.httpclient.get<BookServicesByUserField[]>('http://localhost:8080/api/AllPendingServiceData', options);
  }
  getAllCompletedLead(id: any) {
    let httpHeaders = new HttpHeaders().set('content-type', 'application/json');
    let options = {
      headers: httpHeaders
    };
    return this.httpclient.get<BookServicesByUserField[]>(`http://localhost:8080/api/AllCompletedData/${id}`, options);
  }
  getServiceDetailById(id: any) {
    return this.httpclient.get<BookServicesByUserField>(`http://localhost:8080/api/serviceDetail/${id}`);
  }

  updateActiveStatus(id: any, BookServicesByUserField: any) {
    return this.httpclient.put(`http://localhost:8080/api/setActiveStatus//${id}`, BookServicesByUserField);
  }
}
