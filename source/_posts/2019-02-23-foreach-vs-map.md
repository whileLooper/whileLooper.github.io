---
title: JavaScript forEach vs. map
date: 2019-02-22
layout: post
tags: 
  - JavaScript
author: Bo Chen
---

    Best way to remember thing is writing it down.

Forget about those fancy description, write this down with my own words: 
`forEach()` perform callback for each element in array, **THAT IS IT!** nothing is return, doing callback inplace.

`map()` **create a new array**, then do the callback for each element in the array, so it **does return a new array**.

that's it, now you can read official documentation from MDN.


## Array.prototype.forEach()

According to [JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

    forEach() executes the provided callback once for each element present in the array in ascending order. It is not invoked for index properties that have been deleted or are uninitialized (i.e. on sparse arrays).


## Array.prototype.map()

According to [JavaScript | MDN]([https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map))

    map calls a provided callback function once for each element in an array, in order, and constructs a new array from the results. callback is invoked only for indexes of the array which have assigned values, including undefined. It is not called for missing elements of the array (that is, indexes that have never been set, which have been deleted or which have never been assigned a value).