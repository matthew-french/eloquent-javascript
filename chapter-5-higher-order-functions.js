
// var isArray = Array.isArray || function(o) {
//     var ts = Object.prototype.toString;
//     return typeof o === "object" &&
//  	   ts.call(o) === "[object Array]";
// };

function flattenArray(array) {
  var result = [];
  flatten(array, result);
  return result;
}

function flatten(array, result) {
  var length = array.length;
  var ii = 0;

  while (length--) {
    var current = array[ii++];
    if (Array.isArray(current)) {
      flatten(current, result);
    } else {
      result.push(current);
    }
  }
}

function every(com, arr){
  var flatArr = flattenArray(arr);
  var res = true;

  flatArr.forEach(function(v) {
    if (v !== com)
      res = false;
  });

  return res;
}

function some(com, arr){
  var flt = flattenArray(arr);
  var res = false;

  flt.forEach(function(v) {
    if (v === com)
      res = true;
  });

  return res;
}

var arrays = [1, 1, 1, 1, [1, 1, [1, 2, 1]]];
console.log(every(1, arrays));
console.log(some(1, arrays));
