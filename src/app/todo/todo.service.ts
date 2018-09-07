import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { GlobalErrorHandler } from '../handlers/global-error.handler';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>('/todos')
      .pipe(catchError(GlobalErrorHandler.handleError<Todo[]>('findAll', [])));
  }

  findOne(id: number): Observable<Todo> {
    return this.http.get<Todo>(`/todos/${id}`)
      .pipe(catchError(GlobalErrorHandler.handleError<Todo>(`findOne: id=${id}`)));
  }

}
