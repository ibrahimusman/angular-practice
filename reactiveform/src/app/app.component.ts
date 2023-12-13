import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { userNameValidator } from './user-name.validator';
import { PasswordValidator } from './password-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registrationForm!: FormGroup;
  get Password() {
    return this.registrationForm.get('password');
  }
  get subscribe() {
    return this.registrationForm.get('subscribe');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }
  addAlternateEmails() {
    this.alternateEmails.push(this.fb.control(''));
  }
  removeAlternateEmails(index: number) {
    this.alternateEmails.removeAt(index);
  }
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.registrationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3), userNameValidator]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', Validators.email],
      subscribe: [false],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      }),
      alternateEmails: this.fb.array([])
    }, { validator: PasswordValidator });
    this.registrationForm.get('subscribe')?.valueChanges
      .subscribe(checkedValue => {
        const email = this.registrationForm.get('email');
        if (checkedValue) {
          email?.setValidators(Validators.required);
        } else {
          email?.clearValidators();
        }
        email?.updateValueAndValidity();
      });
  }
  loadApiData() {
    this.registrationForm.patchValue({
      userName: 'Bruce',
      password: 'test',
      confirmPassword: 'test'
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      // Handle form submission logic here
      const formData = this.registrationForm.value;
      console.log('Form data submitted:', formData);
    }
  }
}
