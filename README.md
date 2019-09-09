# ngx-date-range-picker

Angular 2+ datepicker component with no JQuery dependency, forked from [bleenco/ng2-datepicker](https://github.com/bleenco/ng2-datepicker).

[![AbstruseCI](https://ci.bleenco.io/badge/6)](https://ci.bleenco.io/repo/6)

<p align="center">
  <img style="display: inline-block" src="https://user-images.githubusercontent.com/32035250/64512878-033faf00-d2f0-11e9-9fcb-5cbef6112cde.png" width="300">
  <img style="display: inline-block" src="https://user-images.githubusercontent.com/32035250/64523368-d4800380-d304-11e9-8ddf-528216634d98.png" width="300">
  <img style="display: inline-block" src="https://user-images.githubusercontent.com/32035250/64523552-38a2c780-d305-11e9-83ba-7833b2f51e4a.png" width="300">
 
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/32035250/64512970-384c0180-d2f0-11e9-9bc8-53a8cb77c615.png" width="300">
</p>

## Installation
1. Install package from `npm`.

```sh
npm install ngx-date-range-picker --save
```

2. Include NgxDateRangePickerModule into your application.

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDateRangePickerModule } from 'ngx-date-range-picker';

@NgModule({
  imports: [
    BrowserModule,
    NgxDateRangePickerModule
  ],
  declarations: [ AppComponent ],
  exports: [ AppComponent ]
})
export class AppModule {}
```

## Example
```html
  <ngx-date-range-picker [(ngModel)]="date" />
```

## NgModel
Accepted types are date `string`, javascript `Date` object and `DateRange` object (`{start: Date, end: Date}`).
If `selectRange` is `true` javascript `Date` object will be returned for selected date, else - `DateRange` object, 
where `range.start` will be equal to `range.end` if one day is selected. 

## Attributes
|Name|Type|Default|Description|
| --- | --- | --- | --- |
|`headless`|boolean|`false`|Disable datepicker's input|
|`isOpened`|boolean|`false`|Show or hide datepicker|
|`position`|string|`bottom-right`|Dropdown position (`bottom-left`, `bottom-right`, `top-left`, `top-right`)|
|`previousMonthButtonTemplate`|`TemplateRef`|`undefined`|Overrides left arrow used to go one month back.|
|`nextMonthButtonTemplate`|`TemplateRef`|`undefined`|Overrides right arrow used to go to next month.| 
|`options`|object|see [options](#options)||

## <a name="options"></a>Options
```ts
import { DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';

defaultOptions: DatepickerOptions = {
  closeOnClickOutside: true;
  closeOnSelection: true;
  selectRange: false,
  includeDays: 'previous-month'; // 'none', 'previous-month', 'next-month', 'all'. Should it render days outside current month.
  minYear: 1970,
  maxYear: 2030,
  displayFormat: 'MMM D[,] YYYY',
  barTitleFormat: 'MMMM YYYY',
  dayNamesFormat: 'dd',
  firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
  locale: frLocale,
  minDate: new Date(Date.now()), // Minimal selectable date
  maxDate: new Date(Date.now()),  // Maximal selectable date
  barTitleIfEmpty: 'Click to select a date',
  placeholder: 'Click to select a date', // HTML input placeholder attribute (default: '')
  addClass: 'form-control', // Optional, value to pass on to [ngClass] on the input field
  addStyle: {}, // Optional, value to pass to [ngStyle] on the input field
  fieldId: 'my-date-picker', // ID to assign to the input field. Defaults to datepicker-<counter>
  useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown 
};
```

For available `format` options check out [here](https://date-fns.org/docs/format).

In case you want to initialize with an empty value, just assign null to the model attribute you're storing the date and you can customize the message in the bar with the property `barTitleIfEmpty`.

## Run Included Demo

1. Clone this repository

```sh
git clone https://github.com/martre3/ngx-date-range-picker.git
cd ngx-date-range-picker
```

2. Install packages

```sh
npm install
```

3. Run Demo

```sh
npm start
```

## Licence

MIT
