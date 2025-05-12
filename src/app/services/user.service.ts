import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userLogin, userRegister } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://api.freeprojectapi.com/api/UserApp/';

  constructor(private http: HttpClient) {}

  register(user: userRegister): Observable<userRegister>{
    return this.http.post<userRegister>(this.apiUrl + 'CreateNewUser', user);
  }

  login(obj: userLogin): Observable<userLogin>{
    return this.http.post<userLogin>(this.apiUrl + 'Login', obj);
  }
}
