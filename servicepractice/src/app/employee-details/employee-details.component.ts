import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  public employees = [] as any;
  public errorMsg: any;
  constructor(private _employeeService: EmployeeService) {}
  ngOnInit() {
    // getEmployees function ko call krna hay jo employee.service.ts mn hay
    this._employeeService.getEmployees()
    // subscribe krna hay observable ko jo observable hay wo employee.service.ts mn hay 
    .subscribe((data: any) => { this.employees = data;console.log(this.employees) },
                    (error:any) => this.errorMsg = error);
  }
}
