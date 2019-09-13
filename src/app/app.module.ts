import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDatesPickerModule } from '../ngx-dates-picker/module/ngx-dates-picker.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxDatesPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
