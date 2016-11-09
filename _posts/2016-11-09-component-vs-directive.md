---
title: Component vs Directive in Angular 2
layout: post
date:   2016-10-25 16:00:00 
tags: ['component', 'directive', 'angular 2']
author: "Bo Chen"
---

#### Overview (source: [angular.io](https://angular.io/docs/ts/latest/guide/attribute-directives.html))
Let's look at the documentations from Angular.io, there are total three kinds of directives in Angular 2:

* **Component** - directives with a template
* **Structural directives** - change the DOM layout by adding and removing DOM elements, such as *ngIf, *ngFor
* **Attribute directives** - change the appearance or behavior of an element

Component actually is one kind of directives in Angular 2, it is a directive with template. This post is going to focus on **Component** and **Attribute Directives**. Let me dive into each kind of directives, and find out what are their characteristics.

#### Component (source: [angular.io](https://angular.io/docs/ts/latest/quickstart.html#!#root-component))
Every Angular application has at least one component: the root component, also can has children component.

~~~ts
import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<h1>Hello Angular!</h1>'
})
export class AppComponent { }
~~~

Each component comes with:

* **An Import statement** import { Component }
* **@Component decorator** that associates metadata with component class
    * a *selector* 
    * a *template*
    * etc
* Input and Output Properties
* Lifecycle
* Providers
* Host Element - a component can interact with its hos DOM
    * listen to host events
    * update host's properties
    * invoke methods on host DOM
* Components are Self-describing
    * knows how to interact with host
    * know to render itself
    * configure dependency injection
    * well-defined input and output properties

Base on self-describing characteristic, any component can be bootstrapped as an application, can be loaded into router outlet, or be used in some other component directly.


