import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSlimScrollModule } from 'ngx-slimscroll';
import { NgxDateRangePickerComponent } from '../component/ngx-date-range-picker.component';

@NgModule({
  declarations: [ NgxDateRangePickerComponent ],
  imports: [ CommonModule, FormsModule, NgSlimScrollModule ],
  exports: [ NgxDateRangePickerComponent, CommonModule, FormsModule, NgSlimScrollModule ]
})
export class NgxDateRangePickerModule { }
