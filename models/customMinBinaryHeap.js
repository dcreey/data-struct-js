/**
 * Created by dcreey on 10/30/2016.
 */
'use strict';

// Min-Sorted Binary Heap
// pop - removes value at heap root - lowest priority value
// Insert + remove order log(n)
class BinaryHeap{
  constructor(arr, comparator = this._defaultComparator){
    this.size = 0;
    this.heap = [null];
    this.comparator = comparator;
    if (arr !== undefined) {
      if (arr.length === undefined) throw new Error ('Invalid Argument');

      for(let d of arr) {
        this.push(d);
      };
    }
  }

  // (1) order
  getMin(){
    if (this._isEmpty()) throw new Error('Out Of Range');
    return this.heap[1];
  }

  // log(n) order - log(n) corresponds to the depth of the tree
  // Depth is derived in this way because it is a binary tree (2^n is the size, where n is the depth)
  push(data){
    if (data === null || data === undefined) throw new Error('Invalid Argument');
    this.heap.push(data);
    this.size++;
    this._swim(this.size);
  }

  // log(n) order - log(n) corresponds to the depth of the tree
  popMin(){
    if (this.size === 0) throw new Error('Out Of Range');
    this._swap(1, this.size);
    const min = this.heap.pop();
    this.size--;
    this._sink(1);

    return min;
  }

  _isEmpty(){
    return this.size === 0;
  }

  _swim(index){
    let i = index;
    while (i > 1 && this._compare(parseInt(i/2), i)) {
      this._swap(i, parseInt(i/2));
      i = parseInt(i/2);
    }
  }

  _sink(index){
    let i = index;
    while (2*i <= this.size) {
      let j = 2*i;
      if (j < this.size && this._compare(j, j+1)) j++;
      if (!this._compare(i, j)) break;
      this._swap(i, j);
      i = j;
    }
  }

  _compare(indexA, indexB){
    return this.comparator(this.heap[indexA], this.heap[indexB])
  }

  // in place swap
  _swap(indexA, indexB){
    [this.heap[indexA], this.heap[indexB]] = [this.heap[indexB], this.heap[indexA]];
  }

  _defaultComparator(x, y){
    return x > y;
  }
}

module.exports = BinaryHeap;
