# Data Structures and Algorithms in Javascript

[![Build Status](https://travis-ci.org/iwatakeshi/data-structures-and-algorithms-in-javascript.svg)](https://travis-ci.org/iwatakeshi/data-structures-and-algorithms-in-javascript) [![Greenkeeper badge](https://badges.greenkeeper.io/iwatakeshi/data-structures-and-algorithms-in-javascript.svg)](https://greenkeeper.io/)

This is a refresher of data structures/algorithms 
and a port from [Data Structures and Algorithms in Java](http://www.informit.com/store/data-structures-and-algorithms-in-java-9780672324536).

The source is written ES6 and can be found under `lib/`.

## Chapters

* Chapter 2 - Arrays
	* Un-ordered Arrays
	* Ordered Arrays
	* Person Array (from Storing Objects)
* Chapter 3 - Sorting
	* Bubble Sort
	* Selection Sort
	* Insertion Sort
* Chapter 4 - Stack, Queues, Priority Queues
	* Stack (with examples)
	* Queue
	* Priortiy Queues
* Chapter 5 - Linked List
	* Linked List
* Chapter 6 - Recursion
	* Examples (Factorial, Tower of Hanoi, Binary Search, etc)
	* Merge Sort
* Chapter 7 - Advanced Sorting
	* Shell Sort
	* Quick Sort

## Develop

```bash
# Install dependencies
npm install

gulp
```

In case of gulp screwing up the lib, 
gulp offers a task that automatically backs up the entire lib
and can be restored with the following command:

```bash
# To backup manually
gulp backup
# To restore the backup
gulp restore
```

## Build

```bash
gulp build
```

## Test

```bash
gulp test
```
