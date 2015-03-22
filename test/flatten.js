var test = require('tape');
var flatten = require('../flatten');

test('flatten', function (t) {
  t.plan(12);

  t.deepEqual(flatten(''), ['']);
  t.deepEqual(flatten(0), [0]);
  t.deepEqual(flatten(null), [null]);
  t.deepEqual(flatten(undefined), [undefined]);
  t.deepEqual(flatten(1), [1]);
  t.deepEqual(flatten({}), [{}]);
  t.deepEqual(flatten([]), []);
  var fn = function() {};
  t.deepEqual(flatten(fn), [fn]);

  t.deepEqual(flatten('a'), ['a']);
  t.deepEqual(flatten([[['b']]]), ['b']);
  t.deepEqual(flatten(['a',['b'],['c']]), ['a','b','c']);
  t.deepEqual(flatten([['a'],'b',['c',['d']]]), ['a','b','c','d']);
});
