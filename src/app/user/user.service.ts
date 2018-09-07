import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { GlobalErrorHandler } from '../handlers/global-error.handler';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<User[]> {
    return this.http.get<User[]>('/users')
      .pipe(catchError(GlobalErrorHandler.handleError<User[]>('findAll', [])));
  }

  findOne(id: number): Observable<User> {
    return this.http.get<User>(`/users/${id}`)
      .pipe(catchError(GlobalErrorHandler.handleError<User>(`findOne: id=${id}`)));
  }
}
