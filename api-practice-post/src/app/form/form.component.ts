import { Component } from '@angular/core';
import {FormService} from '../form.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
users: any;
showUser: any;
constructor(private userData:FormService) { 
  this.userData.Users().subscribe((data:any)=>{
    this.users = data;
  });
}
getUserFormData(payload: any){
  this.userData.saveUser(payload).subscribe((response:any)=>
  {
   console.log(response)   
  })}
}
