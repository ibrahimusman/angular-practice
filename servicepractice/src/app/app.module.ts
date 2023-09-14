import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeService } from './employee.service';
//1.1 api mn sb say phly import krna hoga
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, EmployeeListComponent, EmployeeDetailsComponent],
  //1.2 phir yahan pr bhi import krna hoga
  //1.3 phir hamay service ko inject krna hoga

  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
