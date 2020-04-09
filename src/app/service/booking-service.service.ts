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
  getAllPendingData(id:any) {
    const headers = new HttpHeaders({ Authorization: `${sessionStorage.getItem('TOKEN')}` });

    return this.httpclient.get<BookServicesByUserField[]>(`http://localhost:8080/api/AllPendingServiceData/${id}`, { headers });
  }
  getAllCompletedLead(id: any) {
    const headers = new HttpHeaders({ Authorization: `${sessionStorage.getItem('TOKEN')}` });
    return this.httpclient.get<BookServicesByUserField[]>(`http://localhost:8080/api/AllCompletedData/${id}`, { headers });
  }
  getServiceDetailById(id: any) {
    const headers = new HttpHeaders({ Authorization: `${sessionStorage.getItem('TOKEN')}` });
    return this.httpclient.get<BookServicesByUserField>(`http://localhost:8080/api/serviceDetail/${id}`, { headers });
  }

  updateActiveStatus(id: any, BookServicesByUserField: any) {
    const headers = new HttpHeaders({ Authorization: `${sessionStorage.getItem('TOKEN')}` });
    return this.httpclient.put(`http://localhost:8080/api/setActiveStatus/${id}`, BookServicesByUserField, { headers });
  }
}
