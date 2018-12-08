import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/userdata.model';

@Injectable()
export class UserdataService {

  constructor(private http: HttpClient) {}

  // function to return user data
  getUser(): Observable<User> {
    let githubUrl = 'https://api.github.com/users/eugene-robb'
    return this.http.get<User>(githubUrl);
  }
}