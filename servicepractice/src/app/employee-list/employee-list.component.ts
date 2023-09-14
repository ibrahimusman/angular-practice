import { Component, OnInit } from '@angular/core';
// emloyee service ko import krna hay
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  public employees = [] as any;
  public errorMsg: any;
  constructor(private _employeeService: EmployeeService) {}
  ngOnInit() {
    // getEmployees function ko call krna hay jo employee.service.ts mn hay
    this._employeeService.getEmployees()
    // subscribe krna hay observable ko jo observable hay wo employee.service.ts mn hay 
    .subscribe((data: any) => this.employees = data,
                    (error:any) => this.errorMsg = error);
  }
}
