import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TemplateDrivenForm';
  topics = ['Angular', 'React', 'Vue'];
  states = ['Open This Select Menu', 'Maharashtra', 'Karnataka', 'Goa', 'Kerala'];

  topicHasError = true;
  submitted = false;
  userModel = new User('', '', 0, 'default', '', false, '', '', '', 0);
  constructor(private _enrollmentService: EnrollmentService) { }
  validateTopic(value: any) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }
  onStateChange(event: any) {
    if (event.target.value === '') {
      alert('Please select a state');
    }
  }
  onSubmit() {
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data => console.log('Success!', data),
        error => console.error('Error!', error)
      );
  }
}
