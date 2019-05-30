var BinarySearchTree = function(value) {
    // do in pseudoclassical style


};


/*
 * Complexity: What is the time complexity of the above functions?
 */
// only has access to it's touching nodes

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