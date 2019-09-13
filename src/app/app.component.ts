import { Component } from '@angular/core';
import {DatepickerOptions} from '../ngx-dates-picker/component/ngx-dates-picker.component';
import * as enLocale from 'date-fns/locale/en';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date: Date;
  options: DatepickerOptions = {
    locale: enLocale,
    selectRange: true,
  };
  constructor() {
    this.date = new Date();
  }
}
