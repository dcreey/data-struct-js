/**
 * Created by dcreey on 10/27/2016.
 */
'use strict';

const Promise = require('bluebird');
const Enumerator = require('./enumerator');
const Node = require('./node');

class CustomStack{
  constructor(arr){
    this.head = null;
    this.size = 0;
    if (arr !== undefined) {
      if (arr.length === undefined) throw new Error ('Invalid Argument');

      for(let d of arr) {
        this.push(d);
      };
    }
  }

  push(data){
    if (data === null || data === undefined) throw new Error('Invalid Argument');
    this.size++;
    if (this.size-1 === 0) this._addFirst(data);
    else {
      const nextNode = new Node(data);
      nextNode.next = this.head;
      this.head = nextNode;
    }
  }

  pop(){
    //return new Promise((res) => {
    if (this.size === 0) throw new Error('Out Of Range');
    this.size--;
    const current = this.head;
    this.head = this.head.next;
    return current.data;
      //res(current.data);
    //});
  }

  find(data){
    return new Promise((res) => {
      if (this.size === 0) throw new Error('Out Of Range');
      let current = this.head;
      while (current.next != null){
        if (current.data === data) res(data);
        current = current.next;
      };
      res(-1);
    });
  }

  getEnumerator(){
    return new LinkedListEnumerator(this.head);
  }

  _addFirst(data){
    this.head = new Node(data);
  }
}

class LinkedListEnumerator extends Enumerator{
  next(){
    if (this.list.next === null) return false;
    const data = this.list.data;
    this.list = this.list.next;
    return data;
  }
}

module.exports = CustomStack;
