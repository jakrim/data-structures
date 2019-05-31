var BinarySearchTree = function(value) {
    var binarySearchTree = Object.create(binarySearchTreeMethods);
    binarySearchTree.value = value;
    binarySearchTree.left = null;
    binarySearchTree.right = null;
    
    return binarySearchTree;

};

var binarySearchTreeMethods = {};


binarySearchTreeMethods.insert = function (value) {
  // var newNode = BinarySearchTree(value);
  
  // var insertNode = function(node, newNode) {



  // }
    
  //   if (this.value > newNode.value) {
  //     if (newNode.left === null) {
  //       newNode.left = this;
  //     }
  //   }
  //   if (this.value < newNode.value) {
  //     if (newNode.right === null) {
  //       newNode.right = this;
  //     } else {
  //       newNode.
      
  //   }
  //   // console.log('this.left ',this.left);
  //   console.log('newNode ', newNode);
  //   console.log('this ', this);
}

binarySearchTreeMethods.contains = function () {

}


binarySearchTreeMethods.depthFirstLog = function () {

}
// depth first search - manner - like GetELementsByClassName - children first
// How to keep track of depth as traversal? Track - increment vs. decrement





/*
 * Complexity: What is the time complexity of the above functions?
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