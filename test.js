var Assert = require('assert');

var a2m = require('./index');

var arr = [
  {
    x: '',
  },
  {
    x: 'x',
  },
  {
    x: 'xx',
  },
  {
    x: 'xxx',
  },
  {
    x: 'xxxx',
  },
  {
    x: 'xxxxx',
  }
];

var attr = 'x';
var map = a2m(arr, attr);

for (var i = 0; i < arr.length; i++) {
  var el = arr[i];
  var key = el[attr];
  Assert.equal(map[key][attr].length, i);
}
