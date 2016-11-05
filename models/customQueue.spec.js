/**
 * Created by dcreey on 10/27/2016.
 */
'use strict';

const assert = require('assert');
const Queue = require('./customQueue');

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe('Queue Tests', function(){
  describe('Empty Initialization Tests', function(){
    it('add then remove same object', function(){
      const queue = new Queue();
      queue.enqueue(6);
      assert(queue.dequeue() === 6);
    });

    it('add one remove two throws Error', function(){
      const queue = new Queue();
      queue.enqueue(6);
      queue.dequeue();
      try {
        queue.dequeue();
      } catch (er){
        assert(er.message === 'Out Of Range')
      }
    });

    it('add then remove objects in order of queued', function(){
      const queue = new Queue();
      list.forEach((x) => { queue.enqueue(x); });
      for(let x = 0; x < list.length; x++){
        assert(list[x] === queue.dequeue());
      }
    });

    it('add then find one queued at end', function(){
      const queue = new Queue();
      list.forEach((x) => { queue.enqueue(x); });
      queue.find(10).then((x) => { assert(x === 10); });
      queue.find(112).then((x) => { assert(x === -1); });
    });

    it('add then enumerate', function(){
      const queue = new Queue();
      list.forEach((x) => { queue.enqueue(x); });
      const enumQueue = queue.getEnumerator();
      let eQueue;
      let cnt = 0;
      while (eQueue = enumQueue.next()){
        assert(list[cnt] === eQueue);
        cnt++;
      }
    });
  });

  describe('List Initialization Tests', function(){
    it('add then remove first two objects queued', function(){
      const queue = new Queue(list);
      queue.enqueue(6);
      assert(queue.dequeue() === 1);
      assert(queue.dequeue() === 2);
    });

    it('add then remove first object queued', function(){
      const queue = new Queue(list);
      for(let x = 0; x < list.length; x++){
        assert(list[x] === queue.dequeue());
      }
    });

    it('add then find one queued at end', function(){
      const queue = new Queue(list);
      queue.find(10).then((x) => { assert(x === 10); });
      queue.find(112).then((x) => { assert(x === -1); });
    });

    it('add then enumerate', function(){
      const queue = new Queue(list);
      const enumQueue = queue.getEnumerator();
      let eQueue;
      let cnt = 0;
      while (eQueue = enumQueue.next()){
        assert(list[cnt] === eQueue);
        cnt++;
      }
    });
  });

});
