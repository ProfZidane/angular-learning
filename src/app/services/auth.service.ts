import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Observable, range} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
loginURL = environment.endPoind + "api/auth/login";
registerURL = environment.endPoind + "api/user";

  constructor(private http: HttpClient) { }

  login(data:any):Observable<any> {
    return this.http.post(this.loginURL, data);
  }

  register(data: any): Observable<any> {
    return this.http.post(this.registerURL, data);
  }
  
}
