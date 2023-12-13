import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  url = 'http://localhost:3000/enroll'
  constructor(private _http: HttpClient) { }
  enroll(user: any) {
    return this._http.post<any>(this.url, user)
      .pipe(catchError(this.errorHandler))
  }
  errorHandler(error: any) {
    return throwError(error);
  }
}
