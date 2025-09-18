import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { User } from './users/types/types';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient);

  listUsers() {
    return this.http.get(`${environment.apiUrl}/users`);
  }

  getUser(cdUser: number) {
    return this.http.get(`${environment.apiUrl}/users/find?cdUser=${cdUser}`);
  }

  postUser(user: User) {
    return this.http.post(`${environment.apiUrl}/users`, user);
  }

  listTpUsers() {
    return this.http.get(`${environment.apiUrl}/users/listTpUsers`);
  }

  editUser(user: User) {
    return this.http.put(`${environment.apiUrl}/users`, user);
  }

  deleteUser(cdUser: number) {
    return this.http.delete(`${environment.apiUrl}/users?cdUser=${cdUser}`);
  }
}
