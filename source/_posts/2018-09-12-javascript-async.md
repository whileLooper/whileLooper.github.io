---
title: JavaScript's async 初步认识 (unfinished)
layout: post
date:   2018-09-12
tags: 
  - JavaScript
  - learning
author: "Bo Chen"
---

## JavsScript is Single Thread, CAN'T multitask

> 我们常说的JavaScript是单线程，所指的是JS引擎中负责解释和执行JavaScript代码的线程只有一个。不妨叫它**主线程**。

The basic and plain way to handle event in JavaScript:

```js
event.doFirstThing();

wait(1000); // wait 1 sec to let event complete

event.doSecondThing(); // do other things after 1 sec

wait(1000); // wait 1 sec to let event complete

...

output:
// first thing output
// second thing output
```

## Callback - When it becomes a HELL
为了解决日常中的问题，JavaScript 引入**callback**

>  A **callback** is just a plain old JavaScript function that can be called in response to an event.

```js
setTimeout(() => {
  event.doFirstThing();
}, 2000);

wait(1000);

event.doSecondThing();

...

output: 
// second thing output
// first thing output
```

When we call function `setTimeout()`, we usually pass a callback function in `setTimeout()`, in this case `event.doFirstThing()` is that callback function.

But in the real world, the shit will turn nasty as hell, that's why we call it **Callback Hell**, a callback in the another callback, and in the another callback, and in the another callback, and in the another...(something it goes forever)

```js
function aCallbackHell() {
  // ready for something nasty ?

  setTimeout(() => {
    // third thing is waiting first and second thing to be done.
    doThirdThing();
    setTimeout(() => {
      // second thing waiting for first thing to be done.
      doSecondThing();
      setTimeout(() => {
        // first thing need to be done.
        doFirstThing();
      }, 1000);
    }, 2000);
  }, 3000);

}

aCallbackHell();
```

  The nested setTimeout() statements would result in so much whitespace that you could build a pyramid.


## Promises - way to get out of HELL

>  The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

From MDN's JavaScript official [**documentation**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

base on my personal understand, consider **Promise** as a wrapper object around a callback function, and return an object called **promise**, this **promise** object gives your two callback function as result, success and fail.

> ```js
> const promise = createEvent(eventDetail); 
> promise.then(successCallback, failureCallback);
> ```

### Benefit of Promises
  - **Guarantees**
  - **Chaining**
  - **Error Propagation**
  - **Composition**