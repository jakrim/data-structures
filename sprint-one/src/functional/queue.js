var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var start = 0;
  var end = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[end] = value;
    end++;
    
  };

  someInstance.dequeue = function() {
    let temp = storage[start];
    delete storage[start];
    start++;
    return temp;
  };

  someInstance.size = function() {
    var size = end - start;
      if (end > start) {
        return size
      } else if (start > end) {
        return 0;
      } else {
        start = end;
      }

      return size;
  };

  return someInstance;
};
