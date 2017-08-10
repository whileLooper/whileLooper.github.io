---
title: Jasmine JavaScript Testing
layout: post
date:   2016-10-06 20:00:00 
tags: ['unit test', 'karma', 'jasmine']
author: "Bo Chen"
---
This post enlighten by [Jasmine JavaScript Testing](https://www.amazon.com/Jasmine-JavaScript-Testing-Paulo-Ragonha-ebook/dp/B00WQWY8S0/ref=sr_1_1?ie=UTF8&qid=1475802581&sr=8-1&keywords=jasmine+javascript+testing+-+second+edition)

##### unit test
a piece of code tests a functionality of unit of application code.

##### Jasmine
Jasmine: *behavior-driven development* test framework

##### TDD vs. BDD
`test-driven development` turns into `behavior-driven development` by `Dan North`

##### BDD
- Given: this provides an initial context
- When: this defines the event occurs
- Then: this ensures an outcome

##### Jasmine BDD example

~~~ js
describe("Player", function() {
    describe("when song has been paused", function() {
       it("should indicate that the song is paused", function() {
        }); 
    });
});
~~~

##### spec
each unit test call `spec`, short for `specification`

##### write a Jasmine test
`describe` function is a `global` Jasmine function, used to define test contest, it creates a new test suite(a collection of test cases), acceptes two params:
- `string`: name of test suite
- `function`: a function that will contains all its specs

~~~ js
describe("Investment", function() { });
~~~

`it`, another `golbal` Jasmine function, accepts two params:
- `string`: title of the spec
- `function`: a function that will contains the spec code

~~~ js
describe("Investment", function() {
    it("should be of a stock", function() {
    });
});
~~~

`expect`, an assertion or expectation is a comparison between two values, result of comparison is true means success, along with a `matcher` that indicates what comparison must be made with the values.

~~~ js
describe("Investment", function() { 
    it("should be of a stock", function() { 
        expect(investment.stock).toBe(stock);
    });
});
~~~

###### Setup and teardown
- `beforeEach`: setup function, runs from outside before every spec(`it`)
- run spec(`it`)
- `afterEach`: teardown function, runs from outside after every spec(`it`)

###### Write unit test in `*Spec.js` 

###### ⇅

###### Debug and write more unit test




