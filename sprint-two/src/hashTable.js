var HashTable = function() {
  this._limit = 8;
  // Storage mechanism = array
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  index = 0;
  // this._storage.set
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // this._storage.get
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

};



/*
 * Complexity: What is the time complexity of the above functions?
 HashTable.prototype.insert - Constant time O(1)
 HashTable.prototype.retrieve - Constant time O(1)
 HashTable.prototype.remove - Constant time O(1)
 */
// stores a list of key value pairs
// Hashing function - parameters - string and max key

// storage - limited array
// buckets = array in associated key of storage
  // push (array) key value into bucket
// tuples - key value pairs in each bucket




