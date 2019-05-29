var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};  // {0: 'a'}
  var top = 0; // 1

  // Implement the methods below
  someInstance.push = function(value) {
    storage[top] = value;
    top++;
  };

  someInstance.pop = function() {
    if (top > 0) {
      top--;
      var temp = storage[top]
      delete storage[top]
      return temp;
    }
  };

  someInstance.size = function() {
    return top;
  };

  return someInstance;
};
` `