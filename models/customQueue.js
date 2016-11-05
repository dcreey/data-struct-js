/**
 * Created by dcreey on 10/27/2016.
 */
'use strict';

const Promise = require('bluebird');
const Enumerator = require('./enumerator');
const Node = require('./node');

class CustomQueue{
  constructor(arr){
    this.head = null;
    this.tail = null;
    this.size = 0;
    if (arr !== undefined) {
      if (arr.length === undefined) throw new Error ('Invalid Argument');

      for(let d of arr) {
        this.enqueue(d);
      };
    }
  }

  enqueue(data){
    if (data === null || data === undefined) throw new Error('Invalid Argument');
    this.size++;
    if (this.size-1 === 0) this._addFirst(data);
    else {
      const prevNode = new Node(data);
      this.tail.prev = prevNode;
      prevNode.next = this.tail;
      this.tail = prevNode;
    }
  }

  dequeue(){
    //return new Promise((res) => {
    if (this.size === 0) throw new Error('Out Of Range');
    this.size--;
    const current = this.head;
    this.head = this.head.prev;
    return current.data;
    //res(current.data);
    //});
  }

  find(data){
    return new Promise((res) => {
      if (this.size === 0) throw new Error('Out Of Range');
      let current = this.head;
      while (current != null){
        if (current.data === data) res(data);
        current = current.prev;
      };
      res(-1);
    });
  }

  getEnumerator(){
    return new LinkedListEnumerator(this.head);
  }

  _addFirst(data){
    this.head = new Node(data);
    this.tail = this.head;
  }
}

class LinkedListEnumerator extends Enumerator{
  next(){
    if (this.list.next === null) return false;
    return this.list.next;
  }
}

module.exports = CustomQueue;
