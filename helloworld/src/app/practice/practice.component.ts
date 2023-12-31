import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css'],
})
export class PracticeComponent {
  public inputvalue = '';
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
  public color = 'red';
  public colors = ['red', 'blue', 'green', 'yellow'];
  date = new Date();
  public person = {
    firstName: 'Ibrahim',
    lastName: 'Usman',
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
    alert('value is ' + value);
    // console.log(value);
  }
  // input: parent ki value child ko pass karna
  @Input('ParentData') public names: string = '';
  // output: child ki value parent ko pass karna ismay EventEmitter use hota hai
  @Output() public childEvent = new EventEmitter();
  fireEvent() {
    this.childEvent.emit('Hey Ibrahim Usman');
  }
  public cars = [] as any;
  constructor(private _CarsService: CarsService) {}
  ngOnInit() {
    this.cars = this._CarsService.getcarsdetails();
  }
}
