---
title: Function arguments (2 or fewer ideally)
layout: post
date:   2018-10-08
tags: 
  - monday clean code
author: "Bo Chen"
---

## Limiting the amount of function arguments

It is very important and useful to limit the amount of function arguments, because it makes testing your function easier. Having more than three leads to a combinatorial explosion where you have to test tons of different cases with each separate argument. Using a object if you can't avoid a situation requires more than 3 arguments.

**Bad:**
```javascript
function createMenu(title, body, buttonText, cancellable) {
  // ...
}
```

**Good:**
```javascript
function createMenu({ title, body, buttonText, cancellable }) {
  // ...
}

createMenu({
  title: 'Foo',
  body: 'Bar',
  buttonText: 'Baz',
  cancellable: true
});
```