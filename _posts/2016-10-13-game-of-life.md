---
title: Game of Life Revisit
layout: post
date:   2016-10-13 22:00:00 
tags: ['game of life', 'leetcode', 'algorithm']
author: "Bo Chen"
---
[Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

##### Foreword
Back to college time, I had assignment about using `C++` game base on 'Game of Life', but I had completed forgot how I did it, although I did pass that course any way. While I did the practices on Leetcode, this question popped up. I didn't come up the good solution to pass all the test. I tried to get from discussion section, there is a top answer which provided by [@yavinci](https://discuss.leetcode.com/topic/29054/easiest-java-solution-with-explanation). I think his solution is brilliant with great explanation. 

##### Logic behind the code
Using 2 bit to store 'current' state and 'next' state
~~~
        [2nd bit  ,  1st bit] 
      [next state ,  current state]
- 00  dead (next) <- dead (current)
- 01  dead (next) <- live (current)  
- 10  live (next) <- dead (current)  
- 11  live (next) <- live (current)
~~~

1. Every cell is 0 or 1, in 2 bit it is either `00` or `01`
2. Notice that `1st` state is independent of `2nd` state.
3. All cells update at same time
4. count # neighbors from `1st` state and send `2nd` state bit
5. Since `2nd` state default to dead, no consideration for situation `01->00`
6. After update all cells, delete cell's `1st` state by `>>1`

For each cell's `1st` bit, check the 8 cells around itself, and set the cell's `2nd` bit.

1. Transition `01 -> 11`: when `board[i][j] == 1` and lives >= 2 && lives <= 3.
2. Transition `00 -> 10`: when `board[i][j] == 0` and lives == 3.

To get the current state, simply do
~~~js
board[i][j] & 1
~~~
To get the next state, simply do
~~~js
board[i][j] >> 1
~~~

##### Code break down
There are *three* main section in the code

###### update every cell base on neighbors conditions
~~~js
var m = board.length;
var n = board[0].length;
for (i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
        var lives = livesNeighbors(board, i, j, m, n);
        // in the beginning every 2nd bit should be 0
        // only check 2nd bit becomes 1
        if (board[i][j] === 1 && lives >=2 && lives <= 3) {
            board[i][j] = 3;    // Make the 2nd bit 1: 01 ---> 11
        }
        if (board[i][j] === 0 && lives < 2) {
            board[i][j] = 2;    // Make the 2nd bit 1: 00 ---> 10
        }
    }
}
~~~

###### transit all cell into next state (only keep `2nd` bit)
~~~js
for (i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
        board[i][j] >>= 1;
    }
}
~~~

###### check neighbors function
~~~js
function livesNeighbors(board, i, j, m, n) {
    var lives = 0;
    // when i, j is edge row or column, using Math.max and Math.min
    for (x = Math.max(i - 1, 0); x <= Math.min(i + 1, 0); x++) {
        for (y = Math.max(j - 1, 0); y <= Math.min(j + 1, 0); y++) {
            lives += board[x][y] & 1;
        }
    }
    // delete current cell
    lives -= board[i][j] & 1;
    return lives;
}
~~~
