var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.start = 0;
  obj.end = 0;

  return obj;
};

var queueMethods = {
  enqueue: function (value) {
    this.storage[this.end] = value;
    this.end++;
  },

  dequeue: function() {
    // this.end--;
    var temp = this.storage[this.start];
    delete this.storage[this.start];
    this.start++
    return temp;
  },

  size: function() {
    var size = 0;
    if (this.end >  this.start) {
      size = this.end - this.start;
    } else if (this.start > this.end) {
      return 0;
    } else {
      return size;
    }

    return size;
  }


};


