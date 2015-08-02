---
layout: post
title: final, finally, finalize
date: 2015-08-2 19:45
summary: Despite their similar sounding names, final, finally and finalize hasve very different purposes and meaning.
categories: reading
---

##### final
The final statement has a differnet meaning depending on its context.
* When applied to a variable(primitive): The value of the variable cannot change.
* When applied to a variable(reference): The reference variable cannot point to any other object on the heap.
* When applied to a method: The method cannot be overridden.
* When applied to a class: The class cannot be subclassed.

##### finally
There is an optional finally block after the try block or after the catch block. Statements in the finally block will always be executed (except if Java Virtual Machine exits from the try block). The finally block is used to write the clean-up code.

##### finalize()
The finalize() method is called by the garbage collector when it determines that no more references exist. It is typically used to clean up resources, such as closing file.