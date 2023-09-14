import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FormService {
url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http:HttpClient) { }
  Users(){
    return this.http.get(this.url);
  }
  saveUser(data: any){
    return this.http.post(this.url, data);
  }
}
