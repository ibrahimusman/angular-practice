import { Injectable } from '@angular/core';
//1.4 import karna hay client ko or error handling k liye HttpErrorResponse ko
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import karna hay observable ko or error handling k liye throwError
import { Observable, throwError } from 'rxjs';

import { IEmployee } from './data/employee';
// error handling k liye import krna hay catchError ko
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  //1.5 url banao json ki file ka jis mn data hay employees ka _url variable mn store krna hay
  private _url = 'https://jsonplaceholder.typicode.com/posts';
// phir yahan pr bhi inject krna hoga http: yah variable hay jo HttpClient ko inject kr rha hay
  constructor(private http: HttpClient) {}
// return type observable hay
// made a function getEmployees which returns an Observable of type IEmployee array which is imported from the employee.ts file.
  getEmployees(): Observable<IEmployee[]> {
// In the getEmployees() function, we are making an HTTP call to the JSON file using the get() method of the HttpClient class. The get() method returns an Observable instance which we are storing in the employees variable of type IEmployee array. 
    return this.http.get<IEmployee[]>(this._url);
  }
// error handling function
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }
}