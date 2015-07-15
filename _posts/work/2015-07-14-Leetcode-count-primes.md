---
layout: post
title: Leetcode - Count Primes
date: 2015-07-14 23:57
summary: Count the number of prime numbers less than a non-negative number, n
categories: work
---
Given an integer n, counting the numbers of primes less than n

There is a common way to solve this question without considering the time and space capacity, by using a simple isPrime() function to iterate through numbers from 0 - n.

{% highlight java %}
    public static int countPrimes(int n) {
        int count = 0;
        for (int i = 1; i < n; i++) {
            if (isPrime(i))
                count++;
        }
        return count;
    }
    
    static boolean isPrime(int num) {
        if (num <= 1)
            return false;
        for (int i = 2; i * i <= num; i++) {
            if (num % i == 0)
                return false;
        }
        return true;
    }
{% endhighlight %}

Here is an efficient way to solve this question also, by using [The Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) find all prime numbers up to n.

[The Sieve of Eratosthenes]:(/images/2015/july/Sieve_of_Eratosthenes_animation.gif)

>We start off with a table of n numbers. Let's look at the first number, 2. We know all multiples of 2 must not be primes, so we mark them off as non-primes. Then we look at the next number, 3. Similarly, all multiples of 3 such as 3 × 2 = 6, 3 × 3 = 9, ... must not be primes, so we mark them off as well. Now we look at the next number, 4, which was already marked off. What does this tell you? Should you mark off all multiples of 4 as well? 

>4 is not a prime because it is divisible by 2, which means all multiples of 4 must also be divisible by 2 and were already marked off. So we can skip 4 immediately and go to the next number, 5. Now, all multiples of 5 such as 5 × 2 = 10, 5 × 3 = 15, 5 × 4 = 20, 5 × 5 = 25, ... can be marked off. There is a slight optimization here, we do not need to start from 5 × 2 = 10. Where should we start marking off?

>In fact, we can mark off multiples of 5 starting at 5 × 5 = 25, because 5 × 2 = 10 was already marked off by multiple of 2, similarly 5 × 3 = 15 was already marked off by multiple of 3. Therefore, if the current number is p, we can always mark off multiples of p starting at p2, then in increments of p: p2 + p, p2 + 2p, ... Now what should be the terminating loop condition?

>It is easy to say that the terminating loop condition is p < n, which is certainly correct but not efficient. we only need to consider factors up to √n because, if n is divisible by some number p, then n = p × q and since p ≤ q, we could derive that p ≤ √n.

>Yes, the terminating loop condition can be p < √n, as all non-primes ≥ √n must have already been marked off. When the loop terminates, all the numbers in the table that are non-marked are prime.

>The Sieve of Eratosthenes uses an extra O(n) memory and its runtime complexity is O(n log log n). For the more mathematically inclined readers, you can read more about its algorithm complexity on [Wikipedia](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes#Algorithm_complexity).

```java
 public static int countPrimes(int n) {
        int count = 0;
        boolean[] isPrime = new boolean[n];

        // set default to true in boolean array
        for (int i = 0; i < n; i++) {
            isPrime[i] = true;
        }

        for (int i = 2; i * i < n; i++) {
            // when index been marked to false,
            // continue to outter loop
            if (!isPrime[i])
                continue;
            // mark off multiples of j starting at j^2,
            // then in increments of j: j2 + j, j2 + 2j...
            for (int j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
        
        // counting prime number in boolean array
        for (int i = 0; i < n; i++) {
            if (isPrime[i]) count++;
        }

        return count;
    }
```
Source: [Leetcode](https://leetcode.com/problems/count-primes/)
