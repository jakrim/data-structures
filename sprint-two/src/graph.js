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
  this._storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this._storage[node] = true;
  // console.log('this._storage', this._storage)
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this._storage) {
    if (node === key) {
      return true;
    }
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this._storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  this._storage[fromNode] - this._storage[toNode] ? true : false;

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// can have connection to any node in system
// GRAPH has nodes and edges that connect nodes

// the relationship of any 2 nodes connected 
// by an edge is a symmetrical relationship