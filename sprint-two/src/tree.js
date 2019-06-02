var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; 

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // takes value
  // sets value as target of a node
  var newChild = Tree(value);
  // adds node as child of tree
  this.children.push(newChild);
  // console.log(this.children);
};

treeMethods.contains = function(target) {
  // takes an input 
  var result = false;
  var containsTarget = function (node) {
    // If node.value = target
    if (node.value === target) {
      // return true;
      result = true;
    } else {
      // If the node has children (arr !== undefined)
      if(node.children.length !== undefined) {
        for (var i = 0; i < node.children.length; i++) {
          // for each child - call ContainsTarget
          containsTarget(node.children[i]);
        }
      }
      return false;
    }
  }
  
  containsTarget(this);
  return result;
};

  // returns a boolean reflecting if target is value in tree
  var testTree = Tree(3);

  testTree.addChild(3)
  testTree.addChild(5)
  testTree.addChild(7)
  
  testTree.children[1].addChild(3);
  testTree.contains(9);
  


/*
* Complexity: What is the time complexity of the above functions?
 treeMethods.addChild - Constant Time O(1)
 treeMethods.contains - Linear TIme O(n)
*/

//Personal Notes
// contains - is recursive
//  var testTree = new Tree(4);
//  testTree.addChild(5);
//  testTree.addChild(8);

 
//  testTree.children[0].addChild(7);

