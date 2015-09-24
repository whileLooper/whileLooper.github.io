---
layout: post
title: Buble Sort-Python
date: 2015-09-24 16:08
summary: 
categories: reading
---

```python
array = [1, 2, 5, 3, 6, 8, 4]

for i in range(len(array) - 1, 0, -1):
	for j in range(0, i):
		if array[j] > array[j+1]:
			array[j], array[j+1] = array[j + 1], array[j]

print array
```
* _python for i in range(len(array) - 1, 0, -1)_ :		the real result is range(6, 1, -1), also the reverse case of range(2, 7, 1), then i = [6, 5, 4, 3, 2, 1]
* _for j in range(0, i)_ :		i = 6, j = [0, 1, 2, 3, 4, 5]
	i = 5, j = [0, 1, 2, 3, 4]
	i = 4, j = [0, 1, 2, 3]
	i = 3, j = [0, 1, 2]
	i = 2, j = [0, 1]
* _if array[j] > array[j + 1]_ :	compare each two value from index 0
* _array[j], array[j+1] = array[j + 1], array[j]_ :		swap two value push largest value til last index

