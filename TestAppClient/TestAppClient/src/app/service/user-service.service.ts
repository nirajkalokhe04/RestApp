import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private baseUrl = 'http://localhost:8080/TestApp';

  constructor(private http: HttpClient) { }

  getUserList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/app/usr/getUser`);
  }
}
