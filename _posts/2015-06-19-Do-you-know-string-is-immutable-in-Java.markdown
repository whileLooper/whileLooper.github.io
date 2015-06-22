---
layout: default
tiltle: Do you know string is immutable in java?
date: 2015-06-19
---



String is immutable in Java because String objects are cached in String pool, and this cached string pool is shared between multiple client there is always a risk, where one client action would affect all other client. String pool is created in Java Heap, if there are too many String, there is a good change of OutOfMemoryErro because garbage collection doesn't happen in Java Heap area. Security and String pool being primary reason of making String immutable.<!--more-->
<blockquote>1) Imagine String pool facility without making string immutable , it's not possible at all because in case of string pool one string object/literal e.g. "Test" has referenced by many <a href="http://javarevisited.blogspot.sg/2012/02/difference-between-instance-class-and.html">reference variables</a> , so if any one of them change the value others will be automatically gets affected i.e. lets say

String A = "Test"
String B = "Test"

Now String B called "Test".toUpperCase() which change the same object into "TEST" , so A will also be "TEST" which is not desirable.

2)String has been widely used as parameter for many Java classes e.g. for opening network connection, you can pass hostname and port number as string , you can pass database URL as string for opening database connection, you can <a href="http://javarevisited.blogspot.sg/2012/07/read-file-line-by-line-java-example-scanner.html">open any file in Java</a> by passing name of file as argument to File I/O classes.

In case, if String is not immutable, this would lead serious security threat , I mean some one can access to any file for which he has authorization, and then can change the file name either deliberately or accidentally and gain access of those file. Because of immutability, you don't need to worry about those kind of threats. This reason also gel with, <b>Why String is final in Java</b>, by making java.lang.String final, Java designer ensured that no one overrides any behavior of String class.

3)Since String is immutable it can safely shared between many threads ,which is very important for multithreaded programming and to avoid any synchronization issues in Java, Immutability also makes String instance thread-safe in Java, means you don't need to synchronize String operation externally. Another important point to note about String is <a href="http://javarevisited.blogspot.sg/2011/10/how-substring-in-java-works.html">memory leak caused by SubString</a>, which is not a thread related issues but something to be aware of.

4) Another reason of <b>Why String is immutable in Java</b> is to <b>allow String to cache its hashcode</b> , being immutable String in Java caches its hashcode, and do not calculate every time we call hashcode method of String, which makes it very fast as hashmap key to be used in hashmap in Java.  This one is also suggested by  Jaroslav Sedlacek in comments below. In short because String is immutable, no one can change its contents once created which guarantees hashCode of String to be same on multiple invocation.

5) Another good reason of Why String is immutable in Java suggested by Dan Bergh Johnsson on comments is: The absolutely most important reason that String is immutable is that it is used by the <a href="http://javarevisited.blogspot.sg/2012/07/when-class-loading-initialization-java-example.html">class loading mechanism</a>, and thus have profound and fundamental security aspects. Had String been mutable, a request to load "java.io.Writer" could have been changed to load "mil.vogoon.DiskErasingWriter"

Source: <a href="http://javarevisited.blogspot.com/2010/10/why-string-is-immutable-in-java.html#ixzz3dWHhYAt9">JavaRevisited</a></blockquote>