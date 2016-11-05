/**
 * Created by dcreey on 11/1/2016.
 */
'use strict';

const assert = require('assert');
const BinaryHeap = require('./customMaxBinaryHeap');

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe('Heap Tests', function(){
  describe('Empty Initialization Tests', function(){
    it('add then remove same object', function(){
      const heap = new BinaryHeap();
      heap.push(6);
      assert(heap.popMax() === 6);
    });

    it('add one remove two throws Error', function(){
      const heap = new BinaryHeap();
      heap.push(6);
      heap.popMax();
      try {
        heap.popMax();
      } catch (er){
        assert(er.message === 'Out Of Range')
      }
    });

    it('add then remove objects in order of heap', function(){
      const heap = new BinaryHeap();
      const reverseList = list.slice().reverse();
      list.forEach((x) => { heap.push(x); });
      for(let x = 0; x < list.length; x++){
        assert(reverseList[x] === heap.popMax());
      }
    });
  });

  describe('List Initialization Tests', function(){
    it('add then remove first two objects heapd', function(){
      const heap = new BinaryHeap(list);
      heap.push(0);
      assert(heap.popMax() === 10);
      assert(heap.popMax() === 9);
    });

    it('add then remove first object heapd', function(){
      const heap = new BinaryHeap(list);
      const reverseList = list.slice().reverse();
      for(let x = 0; x < list.length; x++){
        assert(reverseList[x] === heap.popMax());
      }
    });
  });

});
