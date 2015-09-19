# Data Structures and Algorithms in Javascript

[![Build Status](https://travis-ci.org/iwatakeshi/data-structures-and-algorithms-in-javascript.svg)](https://travis-ci.org/iwatakeshi/data-structures-and-algorithms-in-javascript)

This is a refresher of data structures/algorithms 
and a port from "Data Structures and Algorithms in Java"

## Chapters

* Chapter 2 - Arrays
	* Un-ordered Arrays
	* Ordered Arrays
	
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
