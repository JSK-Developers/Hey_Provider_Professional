import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HttpService } from './http.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: HttpService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (sessionStorage.getItem('username') && sessionStorage.getItem('TOKEN')) {
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('TOKEN')
        }
      })
    }

    return next.handle(req);

  }
}