[![Build Status](https://travis-ci.org/bafolts/typed-data-structures.svg?branch=master)](https://travis-ci.org/bafolts/typed-data-structures)
[![Coverage Status](https://coveralls.io/repos/github/bafolts/typed-data-structures/badge.svg?branch=master)](https://coveralls.io/github/bafolts/typed-data-structures?branch=master)

[documentation] (https://bafolts.github.io/typed-data-structures/)

# typed-data-structures
Data structures for TypeScript. The goal of this project is to provide data structures for javascript. This project utilizes typescript in order to create type safe data structures. The generated classes can be used just as well in javascript.

## Provided Structures

### [Binary Heap] (https://bafolts.github.io/typed-data-structures/classes/binaryheap.html)

```
import {BinaryHeap} from "typed-data-structures/dist/BinaryHeap";

let heap: BinaryHeap<number> = new BinaryHeap<number>();
heap.insert(1);
heap.insert(2);
heap.peek(); // now equals 1
```
