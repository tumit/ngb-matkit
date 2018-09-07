import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandler {
  static handleError<T>(operation = 'operation', result?: T) {
    return (error: Error | HttpErrorResponse): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      // console.log('error', error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
