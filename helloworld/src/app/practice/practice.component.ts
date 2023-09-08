import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css'],
})
export class PracticeComponent {
  public name: string = 'Ibrahim Usman';
  public siteurl = window.location.href;
  public myid = 'testid';
  public number = +921234567890;
  public isdisabled = true;
  public successclass = 'text-color6';
  public hasError = true;
  public isSpecial = false;
  public messageClasses = {
    'text-color6': !this.hasError,
    'text-color7': this.hasError,
    'text-color8': this.isSpecial,
  };
  public purplecolor = 'purple';
  public lotsOfStyles = {
    color: 'purple',
    fontStyle: 'italic',
  };
  sayhytouser() {
    return 'Hy ' + this.name;
  }
  site() {
    return this.siteurl;
  }
  onClick() {
    alert('Hy ' + this.name);
    window.location.href = 'https://www.google.com';
  }
  logMessage(value: string | number) {
    // alert('value is ' + value);
    console.log(value);
  }
}
