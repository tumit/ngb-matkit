import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// model: TODO - should move to model file
export interface Todo {
  userId: number;
  id: number;
  title: string;
  computed: boolean;
}

// service
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  readonly apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  list(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiUrl}/todos`);
  }
}
