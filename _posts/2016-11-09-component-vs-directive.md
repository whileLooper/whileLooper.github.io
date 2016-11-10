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
* **@Component decorator** that associates metadata with component class:
    * a *selector* 
    * a *template*
    * etc

* **Input and Output Properties**
* **Lifecycle**
* **Providers**
* **Host Element** - a component can interact with its hos DOM:
    * listen to host events
    * update host's properties
    * invoke methods on host DOM

* Components are **Self-describing**:
    * knows how to **interact** with host
    * know to **render** itself
    * **configure** dependency injection
    * well-**defined** input and output properties

Base on self-describing characteristic, any component can be bootstrapped as an application, can be loaded into router outlet, or be used in some other component directly.

#### Directives (source: [angular.io](https://angular.io/docs/ts/latest/guide/attribute-directives.html))
More precisely, it is attribute directives, it is used to change appearance and add behavior to DOM

Example:

~~~ts
import { Directive, ElementRef, Input, Renderer } from '@angular/core';
@Directive({ selector: '[myHighlight]' })
export class HighlightDirective {
    constructor(el: ElementRef, renderer: Renderer) {
       renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
    }
}
~~~
The import statement specifies symbols from the Angular core:

1. **Directive** provides the functionality of the @Directive decorator.
2. **ElementRef** injects into the directive's constructor so the code can access the DOM element. [api](https://angular.io/docs/ts/latest/api/core/index/ElementRef-class.html)
3. **Input** allows data to flow from the binding expression into the directive.
4. **Renderer** allows the code to change the DOM element's style. [api](https://angular.io/docs/ts/latest/api/core/index/Renderer-class.html)

`selector: '[myHighlight]'` is a CSS selector to identify the HTML in the template associate with directives, usage:
~~~html
<p myHighlight>Highlight me!</p>
~~~

It is hard to explain all the detail about directive, I prefer to read over the documentation from [angular.io](https://angular.io/docs/ts/latest/guide/attribute-directives.html). By creating a example directive will help you understand what attribute directives is.

#### Overall Comparison (source: [CODEANDYOU](http://www.codeandyou.com/2016/01/difference-between-component-and-directive-in-Angular2.html))

| Component  | Directive |
| ------------- | ------------- |
| For register component we use @Component meta-data annotation.  | For register directives we use @Directive meta-data annotation. |
| Component is a directive which use shadow DOM to create encapsulate visual behavior called components.  Components are typically used to create UI widgets.  | Directives is used to add behavior to an existing DOM element.  |
| Component is used to break up the application into smaller components.  | Directive is use to design re-usable components.  |
| Only one component can be present per DOM element.  | Many directive can be used in a per DOM element.  |
| @View decorator or template URL template are mandatory in the component.  | Directive don’t have View.  |
| Component is used to define pipes.  | You can’t define Pipes in directive.  |
| viewEncapsulation can be define in components because they have views.  | viewEncapsulation can be define in components because they have views.  |



