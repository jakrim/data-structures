var LinkedList = function() {
  var list = {};
  list.head = null; // head points to first node 
  list.tail = null;// tail points to last node

  list.addToTail = function(value) {  // LOOK AT HOW TREE CREATED NEW TREE

    var newNode = Node(value);

    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    }
      list.tail.next = newNode;
      list.tail = newNode;
  };

  list.removeHead = function() {
    // move head reference to next item in list
    var current = list.head.value;
    list.head = list.head.next;
    return current;
  };

  list.contains = function(target) {
    // while loop
    var node = this.head;
    // console.log('list ' , list);
    while (node) {
      if (node.value === target) {
        return true;
      } 
        node = node.next;
    }
    return false;
    // return false;
    // Check if element is not NULL
    // if not - print it's data
    // Change the element to the element stored in 'next'
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
 list.addToTail - Constant time O(1)
 list.removeHead - Constant time O(1)
 list.contains - Linear (traversal of list) O(n)
 */
// Value and Pointer to another node

//  0 : ___ -> 1 : ___ -> 2 : ___ -> 3 : ___ -> 4 : ___