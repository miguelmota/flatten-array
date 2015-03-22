# flatten-array

Recursively flatten an array.

# Install

```bash
npm install flattenarray
```

```bash
bower install flatten-array
```

# Usage

```javascript
var flatten = require('flatten');

console.log(flatten('a')); // ["a"]
console.log(flatten([[['b']]])); // ["b"]
console.log(flatten(['a',['b'],['c']])); // ["a","b","c"]
console.log(flatten([['a'],'b',['c',['d']]])); // ["a","b","c","d"]
```

# License

MIT
