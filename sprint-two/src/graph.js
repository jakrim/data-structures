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
    console.log('this.storage[node', this.storage[node])
    console.log('this.storage', this.storage)
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
    // this.storage[fromNode] - this.storage[toNode] ? true : false;
    if (this.storage[fromNode].includes(toNode) && this.storage[toNode].includes(fromNode)) {
      return true;
    }
    return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.storage[fromNode].includes(toNode) && this.storage[toNode].includes(fromNode)) {
    this.storage[toNode].splice(this.storage[toNode].indexOf(fromNode), 1)
    this.storage[fromNode].splice(this.storage[fromNode].indexOf(toNode), 1)
    }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let key in this.storage) {
    cb(key);
  };
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// can have connection to any node in system
// GRAPH has nodes and edges that connect nodes

// the relationship of any 2 nodes connected 
// by an edge is a symmetrical relationship
