import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Ibrahim Usman';
  // parent to child
  public names = 'Ibrahim Usman';
  // child to parent
  public message = '';
}
