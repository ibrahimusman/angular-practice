import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}
  getEmployees() {
    return [
      { id: 1, name: 'John', age: 24, salary: 20000 },
      { id: 2, name: 'Brandon', age: 25, salary: 30000 },
      { id: 3, name: 'Christina', age: 26 },
      {
        id: 4,
        name: 'Elena',
        age: 28,
        contact: [
          { number: '123', name: 'hamza 1' },
          { number: '098', name: 'hamza 2', amount: 25000, salary: 20000 },
        ],
      },
    ];
  }
}
