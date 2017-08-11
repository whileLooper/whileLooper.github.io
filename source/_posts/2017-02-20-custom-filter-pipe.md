---
title: Write a Custom Filtering Pipe
layout: post
date:   2017-02-20 18:00:00 
tags: 
  - Angular 2
  - filtering
  - pipe
  - how to
author: "Bo Chen"
---

#### Goal
Write your own custom filtering pipe

This pipe is be able: 
 - filtering data by a single input string 
 - filtering data by a single string with multi condition separating by space
 - treat all input as string

#### What is pipe in Angular 2
Pipes transform displayed values within a template.

Basically pipe is one kind of musk, transform data displayed in Agular 2 HTML template.

Angular comes with many build in pipes already, for basic usage: `DatePipe`, `UpperCasePipe`,
`LowerCasePipe`, `CurrencyPipe` and `PercentPipe`.

But for some cases, we need specific pipes for specific scenarios.

For example, currently I need a pipe can filter table data for me, with this pipe, 
I'm be able to filter table data by specific input, to narrow down the table data.

#### Custom Pipes
We can write our own custom pipes, by creating a pipe class, and imported this pipe module.


~~~js
import { Pipe, PipeTransform } from '@angular/core';

// # Filter Array of Objects

@Pipe ({ name: 'filter' })
export class FilterArrayPipe implements PipeTransform  {
  transform(value: Array<any>, arg1: any) {
    let result: any;

    // split input arg into array by space
    if (!arg1 || arg1.trim() === '') return value;

    // split input arg into array, filter out not valid string
    let argArr = arg1.split(' ').filter((item) => { return item !== ''; });

    // base on input arg array side return value
    if (argArr.length === 0) {
      return value;
    } else if (argArr.length === 1) {
      /**
       * one input string, through through data if match, return data
       */

      let filter = argArr[0];
      result = value.filter((item) => {
        let str = JSON.stringify(item);
        if (str.toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
          return true;
        }else {
          return false;
        }
      });

    } else if (argArr.length > 1) {
      /**
       * filter with multi column features
       */
      let i = 0;  // pointer for arg array
      let data = value;

      // literate arg array, keep filter result
      while (i < argArr.length) {
        result = data.filter((item) => {
          let str = JSON.stringify(item);
          if (str.toLowerCase().indexOf(argArr[i].toLowerCase()) !== -1) {
            return true;
          } else {
            return false;
          }
        });

        // update target array
        data = result;
        i++;
      }
    }

    return result;
  }
}
~~~

This pipe definition reveals the following key points:

- To tell Angular this pipe's name is `filter`, apply `{ name: 'filter' }` in @Pipe decorator.

- A pipe is a class decorated with pipe metadata, in my pipe module, meadata is `value`

- The pipe class implements the `PipeTransform` interface's transform method that accepts an input value followed by optional parameters and returns the transformed value. Basically we writting all the logic
in this method.

- There will be one additional argument to the transform method for each parameter passed to the pipe. Your pipe has one such parameter: the exponent. Also we can create as many argument as we want.

For example:

~~~js
transform(value: any, arg1: any, arg2: any, arg3: any) {

}
~~~

usage:

~~~html
<div *ngFor="let item of data | filter: arg1 : arg2 : arg3">
  {{item}}
</div>
~~~

- To tell Angular that this is a pipe, you apply the @Pipe decorator, which you import from the core Angular library. The @Pipe decorator allows you to define the pipe name that you'll use within template expressions.
It must be a valid JavaScript identifier.

#### Import Pipes module in app

At last, don't forget to **import** it in the module in order to use it.
