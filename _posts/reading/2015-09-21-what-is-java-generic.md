---
layout: post
title: Generic in Java
date: 2015-09-21 20:53
summary: Generics allows Java programmers to write more robust and type-safe code.
categories: reading
---

## What is Generic?
Generic in Java is added to provide compile time type-safety of code and removing risk of *ClassCastException* at runtime which was quite frequent error in Java. Java Generic methods and generic classes enable programmers to specify, with a single method declaration, a set of related methods or, with a signle class declartion, a set of related types, respectively.

## How Generics works in Java? What is type erasure?
Generics is implemented using *Type erasure*, compiler erases all type related information during compile time and no type related information is available during runtime. For example, _List<String>_ is represented by only *List* at runtime. This was done to ensure binary compatibility with the libraries which were developed prior to Java 5. You don't have to access to Type argument at runtime and Generic type is translated to Raw type by compiler during runtime.

## What is Bounded and Unbounded wildcards in Generics?
*Bounded* wildcards are those which impose bound on Type, there are two kinds of Bounded wildcards *<? extend T>* which impose an upper bound by ensuring that type must be sub class of T and *<? super T>* where its imposing lower bound by ensuring Type must be super class of T. This Generic Type must be instantiated with Type within bound otherwise it will result in compilation error. On the other hand *<?>* represent and unbounded type because *<?>* can be replace with any Type.

[Source: Javarevisited](http://javarevisited.blogspot.com/2011/04/top-20-core-java-interview-questions.html)
