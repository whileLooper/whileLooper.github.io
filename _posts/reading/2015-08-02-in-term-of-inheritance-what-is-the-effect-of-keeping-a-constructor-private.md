---
layout: post
title: In term of inheritance, what is the effect of keeping a constructor private?
date: 2015-08-2 19:34
summary: This has direct implications for inheritance, since a subclass calss its parents's constructor. The class can be inherited, but only by its own or it's inner classes.
categories: reading
---

>Declaring a constructor private on class A means that you can only access the (private) constructor if you could also access A's private methods. Who, other than A, can access A's private methods and constructor? A's inner classes can. Additionally, if A is an inner class of Q, then Q's other inner classes can.

>This has direct implications for inheritance, since a subclass calss its parent's constructor. The class A can be inherited, but only by its own or its parent's inner classes.