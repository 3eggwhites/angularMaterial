import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isChecked = false;

  foods = [
    { value: 1, viewValue: 'Burger' },
    { value: 2, viewValue: 'Pizza' },
    { value: 3, viewValue: 'Taco' }
  ];

  food = 3;

  minDate = new Date(2019, 0, 1);
  maxDate = new Date(2019, 7, 1);

  onChnage($event) {
    console.log($event);
    this.isChecked = !this.isChecked;
  }
}
