import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  todos = [
    'to do 1',
    'to do 2',
    'to do 3',
    'to do 4',
    'to do 5'
  ];
}
