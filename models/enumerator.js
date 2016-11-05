/**
 * Created by dcreey on 10/27/2016.
 */
'use strict';

class Enumerator{
  constructor(list){
    this.list = list;
    this.index = 0;
  }

  next(){
    if (this.index == this.list.length) throw new RangeException();
    this.index++;
    return this.list[this.index - 1];
  }
}

module.exports = Enumerator;
