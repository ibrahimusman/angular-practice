import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-enrollmenttable',
  templateUrl: './enrollmenttable.component.html',
  styleUrls: ['./enrollmenttable.component.css']
})
export class EnrollmenttableComponent {
  enrollments: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Make an HTTP GET request to retrieve data from the server
    this.http.get<any[]>('http://localhost:3000/enrollments').subscribe(
      (data) => {
        this.enrollments = data; // Assign the retrieved data to the enrollments array
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
