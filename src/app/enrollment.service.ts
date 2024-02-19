import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  httpClient:HttpClient = inject(HttpClient);
  _url = 'http://localhost:3000/enroll';
  
  enroll(user:User){
    return this.httpClient.post<any>(this._url,user);
  }
  constructor() { 

  }
}
