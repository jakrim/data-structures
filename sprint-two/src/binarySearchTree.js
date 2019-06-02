var BinarySearchTree = function(value) {
    var tree = Object.create(binarySearchTreeMethods);
    tree.root = value;
    tree.left = null;
    tree.right = null;

    return tree;
};

var binarySearchTreeMethods = {};


binarySearchTreeMethods.insert = function (value) {
// console.log('this', this.root);
// console.log('value', value);
var node = BinarySearchTree(value);
// node
var thisNode = this;
console.log('node outside',node);
console.log('thisNode outside',thisNode)
// console.log('thisNode', thisNode);
// console.log('node', node.root);
  var insertNode = function(node) {
    // is tree's root > newNode
    // if (thisNode.left === null & thisNode.right === null) {
    if (thisNode.root > node.root) { 
      thisNode.left = node;
      console.log('node INSIDE',node);
      console.log('thisNode INSIDE',thisNode.left)
    } else if (thisNode.root < node.root) {
      thisNode.right = node;
    }

  }
  insertNode(node);
}

binarySearchTreeMethods.contains = function () {

  var result;

  var checkNode = function () {

  }
  checkNode(this)
  return result;
}


binarySearchTreeMethods.depthFirstLog = function (callback) {


  // var executeCB = function() {



  // }

  // executeCB(this);

}
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