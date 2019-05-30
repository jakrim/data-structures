var LinkedList = function() {
  var list = {};
  list.head = null; // head points to first node 
  list.tail = null;// tail points to last node

  list.addToTail = function(value) {
    // create new node
    // adjust tailNode's last reference
    // adjust tail reference to refer to new value
  };

  list.removeHead = function() {
    // move head reference to next item in list 
  };

  list.contains = function(target) {
    // while loop
    // temp node start at head - traverse look at node
    // 
  };

  return list;
};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
