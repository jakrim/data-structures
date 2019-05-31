

var HashTable = function() {
  this._limit = 8;
  // Storage mechanism = array
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
// stores a list of key value pairs
// Hashing function - parameters - string and max key

// storage - limited array
// buckets = array in associated key of storage
// tuples - key value pairs in each bucket




