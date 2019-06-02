var BinarySearchTree = function(value) {
  var tree = {};
  tree.value = value;
  tree.left = null;
  tree.right = null;
  
  Object.assign(tree, binarySearchTreeMethods);
  return tree;
};

var binarySearchTreeMethods = {};


binarySearchTreeMethods.insert = function (value) {

  var node = BinarySearchTree(value);

    if (this.value > value) {
      if (this.left === null) {
        this.left = node;
      } else {
        this.left.insert(value);
      } 
    } else if (this.value < value) {
      if (this.right === null) {
        // console.log('this.right', this);
        this.right = node;
      } else {
        this.right.insert(value);
    }
  }
}


binarySearchTreeMethods.contains = function (target) {

  var node = BinarySearchTree(value);

  if (node = target) {
    return true;
  } else if (node > target) {
    node.left.contains(node);
    } else {
      node.right.contains(node);
    }
  }
  // var result = false;

  // var checkNode = function (node) {

  //   if (node.value = target) {
  //     return true;
  //   } else {
  //     if (node.right !== null) {
  //       checkNode(node.right);
  //     } else {
  //       checkNode(node.left);
  //     }
  //   }



  // }
  // checkNode(this)
  // return result;



binarySearchTreeMethods.depthFirstLog = function (callback) {


  // var executeCB = function(node) {
  //   callback(this.value);


  // }

  // executeCB(this);

}

var tree = BinarySearchTree(5);
tree.insert(2)
tree.insert(3)
tree.insert(7)
tree.insert(6)
// depth first search - manner - like GetELementsByClassName - children first
// How to keep track of depth as traversal? Track - increment vs. decrement





/*
 * Complexity: What is the time complexity of the above functions?
binarySearchTreeMethods.insert - linear O(n)
binarySearchTreeMethods.contains - Logrithmic O(log n)
binarySearchTreeMethods.depthfirstlog - Logrithmic O(log n)


 */
// only has access to it's touching node

// nodes are objects
// edges / connections property to other nodes
// Left = smaller, Right = greater

//Personal Notes
// for each search: If that node isn't target, and right
// node is bigger than target, go left

// O(log n) time - each subsequent operation removes
// size of input by half - constantly narrowing search
// depends on height of tree - number of nodes

// trees can re-balance (change root node) - if unbalanced

// Need array/collection, start end and midpoints