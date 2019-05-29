class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.start = 0;
    this.end = 0;
  }

  enqueue (value) {
    this.storage[this.end] = value;
    this.end++;
  }

  dequeue () {
    var temp = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return temp;
  }

  size () {
    var size = 0;
    if (this.end > this.start) {
      size = this.end - this.start;
    } else if (this.start > this.end) {
      return 0;
    } else {
      return size;
    }

    return size;
  }
}
