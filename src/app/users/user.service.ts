import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// model: TODO - should move to model file
export interface User {
  userId: number;
  id: number;
  title: string;
  computed: boolean;
}

// service
@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  list(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }
}
