/*
storage = {
  5: [2],
  2: [5. 3],
  3: [2]
}

storage = {
  5: {2, true},
  2: {5, true, 3: true}
  3: {2, true}
}
*/
// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
    this.storage[node] = [];
  };
  
  // Return a boolean value indicating if the value passed to contains is represented in the graph.
  Graph.prototype.contains = function(node) {
    if (this.storage.hasOwnProperty(node)) {
      return true;
    }
    return false;
    
  };
  
  // Removes a node from the graph.
  Graph.prototype.removeNode = function(node) {
    delete this.storage[node];  
  };
  
  // Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
  Graph.prototype.hasEdge = function(fromNode, toNode) {
    if (this.storage[fromNode] !== undefined && this.storage[toNode] !== undefined) {
      if (this.storage[fromNode].includes(toNode) && this.storage[toNode].includes(fromNode)) {
        return true;
      }
      return false;
    }
    return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
    this.storage[fromNode].push(toNode);
    this.storage[toNode].push(+fromNode);

    // COERSING FROMNODE FROM TYPE STRING TO NUMBER - WHY IS IT A STRING

    //
  
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.storage[toNode].splice(this.storage[toNode].indexOf(fromNode), 1)
  this.storage[fromNode].splice(this.storage[fromNode].indexOf(toNode), 1)
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let item in this.storage) {
      cb(item)
  };

};

/*
 * Complexity: What is the time complexity of the above functions?
 Graph.prototype.addNode - constant time O(1)
 Graph.prototype.contains - Constant time O(1)
 Graph.prototype.removeNode - Constant time O(1)
 Graph.prototype.hasEdge - Constant time O(1)
 Graph.prototype.addEdge - Constant time O(1)
 Graph.prototype.removeEdge - Linear Time O(n)
 Graph.prototype.forEachNode - Linear Time O(n)
 */
// can have connection to any node in system
// GRAPH has nodes and edges that connect nodes

// the relationship of any 2 nodes connected 
// by an edge is a symmetrical relationship
