var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this._storage.hasOwnProperty(item)) {
    this._storage[item] = true
  } 
};

setPrototype.contains = function(item) {
    if (this._storage[item]) {
      return true;
    } else {
      return false;
    }
};

setPrototype.remove = function(item) {
  if (this._storage.hasOwnProperty(item)) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 setPrototype.add - Constant time O(1)
 setPrototype.contains - Constant time O(1)
 setPrototype.remove - Constant time O(1)
 */
// unique to set