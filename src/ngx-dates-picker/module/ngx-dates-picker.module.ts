import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSlimScrollModule } from 'ngx-slimscroll';
import { NgxDatesPickerComponent } from '../component/ngx-dates-picker.component';

@NgModule({
  declarations: [ NgxDatesPickerComponent ],
  imports: [ CommonModule, FormsModule, NgSlimScrollModule ],
  exports: [ NgxDatesPickerComponent, CommonModule, FormsModule, NgSlimScrollModule ]
})
export class NgxDatesPickerModule { }
