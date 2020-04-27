import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {RootUrl} from './rootUrl';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl: RootUrl;
  UserAdd: User;

  constructor(
    private http: HttpClient,
  ) {
    this.userUrl = new RootUrl('user/');
  }

  registerUser(UserAdd: User): Observable<any> {
    console.log('REGISTER NEW USER');
    const url = this.userUrl.rootUrl + 'addUser/';
    console.log(url);
    return this.http.post(url, {
      firstname: UserAdd.firstname,
      lastname: UserAdd.lastname,
      email: UserAdd.email,
      phoneNumber: UserAdd.phoneNumber,
      password:  UserAdd.password
    });
  }

  logUser(UserAdd: User): Observable<any> {
    console.log('Login  USER');
    const url = this.userUrl.rootUrl + 'login/';
    console.log(url);
    return this.http.post(url, {
      email: UserAdd.email,
      password:  UserAdd.password
    });
  }

  getUser(userId: string): Observable<User> {
    const url = this.userUrl.rootUrl + userId;
    return this.http.get<User>(url);
  }

  updateUser(user: User): Observable<any> {
    const url = this.userUrl.rootUrl + 'update';
    return this.http.put(url, user);
  }
}
