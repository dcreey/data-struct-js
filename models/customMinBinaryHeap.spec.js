/**
 * Created by dcreey on 11/1/2016.
 */
'use strict';

const assert = require('assert');
const BinaryHeap = require('./customMinBinaryHeap');

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe('Heap Tests', function(){
  describe('Empty Initialization Tests', function(){
    it('add then remove same object', function(){
      const heap = new BinaryHeap();
      heap.push(6);
      assert(heap.popMin() === 6);
    });

    it('add one remove two throws Error', function(){
      const heap = new BinaryHeap();
      heap.push(6);
      heap.popMin();
      try {
        heap.popMin();
      } catch (er){
        assert(er.message === 'Out Of Range')
      }
    });

    it('add then remove objects in order of heap', function(){
      const heap = new BinaryHeap();
      list.slice().reverse().forEach((x) => { heap.push(x); });
      for(let x = 0; x < list.length; x++){
        assert(list[x] === heap.popMin());
      }
    });
  });

  describe('List Initialization Tests', function(){
    it('add then remove first two objects heapd', function(){
      const heap = new BinaryHeap(list);
      heap.push(0);
      assert(heap.popMin() === 0);
      assert(heap.popMin() === 1);
    });

    it('add then remove first object heapd', function(){
      const heap = new BinaryHeap(list);
      for(let x = 0; x < list.length; x++){
        assert(list[x] === heap.popMin());
      }
    });
  });

});
