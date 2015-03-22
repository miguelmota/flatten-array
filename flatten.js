(function(root) {

  function flatten(array) {
     return Array.isArray(array) ? [].concat.apply([], array.map(flatten)) : [array];
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = flatten;
    }
    exports.flatten = flatten;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return flatten;
    });
  } else {
    root.flatten = flatten;
  }

})(this);

