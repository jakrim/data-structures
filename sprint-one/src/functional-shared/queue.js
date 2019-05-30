var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try to not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.start = 0;
  instance.end = 0;
  instance.size = 0;

  _.extend(instance, queueMethods);
  
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
    this.storage[this.end] = value;
    this.end++;
  }

  queueMethods.dequeue = function() {
    let temp = this.storage[this.start];
    delete this.storage[this.start];
    this.start++
    return temp;
  }

  queueMethods.size = function() {
    this.size = 0;
    if (this.end > this.start) {
      this.size = this.end - this.start;
    } else if (this.start > this.end) {
      return 0;
    } else {
      this.start = this.end;
    }
    return this.size; 
  }




