---
title: Write a directive for charting library in Angular 2
layout: post
date:   2016-11-16 10:00:00 
tags: ['Angular 2', 'directive', 'chart', 'how to']
author: "Bo Chen"
---

#### Goal
Writing a Angular 2 attribute directive for one of popular charting libraries.

For example, **Flot directive** usage:

`*.component.html`
~~~html
<div flot-chart
    [data]="data"
    [options]="options" style="width: 100%; height: 260px;"></div>
~~~

`*.component.ts`
~~~ts
import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'something-cmp',
    templateUrl: './*.component.html'
})

export class SomethingComponent {
    this.data: any;

    constructor() {
        this.data = sampleData // setting data with correct format
    }
}
~~~

`*.module.ts`
~~~ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeComponent } from './path/to/SomeCompont';
import { FlotModule } from './path/to/FlotModule/index';

@NgModule({
    imports: [
        CommonModule,
        FlotModule
    ],
    declarations: [
        SomeComponent
    ],
    exports: [
        SomeComponent
    ]
})
~~~

---

#### Install Library
This part is not import in this article, everyone's project is different, all depends on different environment. Depending on the certain situation to choose a charting library, the concept is same for most of libraries.

For my current working situation, I need to use several different charting libraries, most of them are open source, free to use :

1. [jQuery](https://jquery.com/)  `npm install --save jquery`
2. [jquery-flot](https://www.npmjs.com/package/jquery-flot)  `npm install --save jquery-flot`
3. [D3](https://d3js.org/)  `npm install --save d3`
4. [C3](http://c3js.org/)  `npm install --save c3`
5. nvD3, MetricsGraphics.js, etc...

---

#### Project Directory
Create a folder to holds all directive for global usage:
~~~sh
_ src
  |_ app
    |_ chart_libraries
      |_ flot
        |_ flot.directive.ts
        |_ flot.module.ts
        |_ index.ts
      |_ D3
        |_ ...
      |_ C3
        |_ ...
      ...
~~~

---

#### Create Directive for *Flot*

##### Create directive.ts for Flot Directive

`flot.directive.ts`
~~~ts
import { Directive, ElementRef, Input } from '@angular/core';
declare var jQuery: any;

@Directive ({
  selector: '[flot-chart]'
})

export class FlotChart {
    $el: any
    @Input() data: any;
    @Input() options: any;

    constructor(el: ElementRef) {
        this.$el = jQuery(el.nativeElement);
    }

    render(): void {
        // set any default options you want for flot chart
        jQuery.plot(this.$el, this.data, this.options || {
            series: {
              lines: {
                show: true,
                lineWidth: 1,
                fill: false,
                fillColor: { colors: [{ opacity: .001 }, { opacity: .5}] }
              },
              points: {
                show: false,
                fill: true
              },
              shadowSize: 0
            },
            xaxis: {
              mode: 'time',
              timezone: 'browser'
            },
            legend: false,
            grid: {
              show: false,
              margin: 0,
              labelMargin: 0,
              axisMargin: 0,
              hoverable: true,
              clickable: true,
              tickColor: 'rgba(255,255,255,1)',
              borderWidth: 0
            }
        });
    }

    ngOnInit(): void {
        this.render();
    }
}
~~~

`declare var jQuery: any` is declaring the jQuery variable so that jQuery function can be used in this directive file, in order to `declare var` please set up inside the `webpack`.

`selector: '[flot-chart]'` inside the `@Directive` is very import, this is our HTML attribute selector, so that we can put this selector into HTML elements to use this directive.

`this.$el = jQuery(el.nativeElement)` is assigned current directive host DOM to `$el`. read more documentation about [ElementRef](https://angular.io/docs/ts/latest/api/core/index/ElementRef-class.html)

##### Create module.ts for Flot Directive

`flot.module.ts`
~~~ts
import { NgModule }      from '@angular/core';

import 'jquery-flot';
import 'jquery.flot.animator/jquery.flot.animator';
import 'jquery-flot/jquery.flot.time.js';

import { FlotChart } from './flot.directive';

@NgModule({
  declarations: [
    FlotChart
  ],
  exports: [
    FlotChart
  ]
})
export class FlotChartModule {
}
~~~

Import all the Flot dependencies inside the module file, so that Flot can be properly use without errors.
