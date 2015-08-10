---
layout: post
title: Static Keyword
date: 2015-08-10 12:00
summary: Static keyword is like any other keyword a simple keyword which can be applied to Java method , nested class or member variable inside a class. static variable in Java belong to whole Class than individual Object
categories: reading
---

## What is static keyword in java
*static* keyword is like any other keyword a simple keyword which can be applied to Java method , nested class or member variable inside a class. *static variable in Java belong to whole Class than individual Object.* Which means if Class A has a static int variable counter and A has two instance a1 and a2 both will have a static variable counter whose value would be always same except race conditions. Remember class is a blueprint while objects are real instances. So a static variable no matter whether its int, char or String will always hold same value for all instances of that class. In other words there is only one copy of static variable will be present in *Java Heap memory*, which can be accessed or altered by any object. *When we make a method static means that method belongs to class* and you can call it without creating any instance of that class. Mostly utility methods are declared as static method, so that program can call them directly by using class name and not to wait for object to be ready. 

## Static vs. none-static variables
Java member variable can be static or non-static. Static variable belongs to **Java class** while non-static variable belongs to **object**. Static variable will keep **same** value for every object while value of non static variable varies from **object to object**. In other word one static variable is shared between all object in Java, which means in a multi-threading environment access to static variable must be **synchronized** other wise you will get unexpected behavior. Its not suggest to use static variable in multi-threading and concurrent application because some time it create subtle bugs which is hard to find and debug. In short main difference between static and non static variable is that former belongs to class and later belongs to object.

### 10 points 

   1. *Static* keyword can be applied with variable, method or nested class.static keyword can not be applied on top level class. Making a top level class static in Java will result in compile time error.
   2. Static variables are associated with **class** instead of object.
   3. Static variables in java keeps same value for every single object.
   4. Can not use non-static variable inside a static method , it will result in compilation error as shown below. See Why static variable can not be called from static method for more details.
   5. Static variables are bonded using static binding at compile time so they are comparatively faster than there non-static counter part which were bonded during runtime.
   6. Static fields are initialized at the time of class loading in Java, opposite to instance variable which is initialised when you create instance of a particular class.
   7. Static keyword can also be used to create static block in Java which holds piece of code to executed when class is loaded in Java. This is also known as static initialize block as shown in below example.
   8. Static method can not be overridden in Java as they belong to class and not to object. so if you have same static  method in subclass and super class , method will be invoked based on declared type of object instead of runtime for example. Can we override static method in Java is also a popular Java question asked in interviews.
   9. If you try to override a static method with a non-static method in sub class you will get compilation error.
   10. Be careful while using static keyword in multi-threading or concurrent programming because most of the issue arise of concurrently modifying a static variable by different threads resulting in working with stale or incorrect value if not properly synchronized. most common issue is race condition which occurs due to poor synchronization or no synchronization of static variable.

Source: [javarevisited](http://javarevisited.blogspot.com/2011/11/static-keyword-method-variable-java.html)

