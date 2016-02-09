// The Sum of a range
// Return array of numbers from start to end
// incremented by step
// must work for negative steps
function returnRange(start,end,step){
  var range = [];

  start = typeof start == 'number' ? start : 1;
  end = typeof end == 'number' ? end : 10;
  step = typeof step == 'number' ? step : 1;

  if (step < 0 ) {
    for (; start >= end; start+=step) {
      range.push(start);
    }
  } else {
    for (; start <= end; start+=step) {
      range.push(start);
    }
  }

  return range;
}

// Sum of the values in an array.
function sumArray(rangeArray){
  var sum = 0;

  for (var i = 0; i < rangeArray.length; i++) {
    sum += rangeArray[i];
  }

  return sum;
}

// Reversing An Array
// Take an array as arg and output an array in reverse.
function reverseArray(inputArr) {
  var outputArr = [];

  for (var i = inputArr.length-1; i >= 0; i--) {
    outputArr.push(inputArr[i]);
  }

  return outputArr;
}

// Reverse array inPlace
// Take an array as arg and modfy inPlace producing a new array in reverse.
function reverseArrayInPlace(arr){
  for (var i = 0; i < arr.length; i++) {
    arr.splice(i,0,arr.pop());
  }
  return arr;
}

// A list
// Array To List
// Build an object(list) from an array arg.
function arrayToList(arr) {
  var obj = {};

  for(var i = 0 ; i <= arr.length; i++) {
    if(i == arr.length) {
     return null;
    }

    obj.value = arr.splice(0,1)[0];
    obj.rest = arrayToList(arr);
  }

  return obj;
}

// List To Array
// Build an array from a object(list)
function listToArray(list) {
  var arr = [];

  while (list.rest) {
    arr.push(list.value);
    list = list.rest;
  }
  arr.push(list.value);

  return arr;
}

// Prepend a value to a list
function prepend(ele,list) {
  var out = listToArray(list);
  out.unshift(ele);
  out = arrayToList(out);
  return out;
}

// Return value from position x in the list object
function nth(list,position) {
  var arr = listToArray(list);
  return arr[position];
}

// Return value from position x in the list object using a recursive function
function rNth(list,position) {

  while (position > 0){
    if (list.rest === null) {
      return undefined;
    }
    list = list.rest;
    rNth(list,--position);
  }
  return list.value;
}

// deepEqual compare an object or value and return true id all value and nodes are identical.
function deepEqual(x, y) {
  if ((typeof x == "object" && x !== null) && (typeof y == "object" && y !== null)) {
    if (Object.keys(x).length != Object.keys(y).length)
      return false;

    for (var prop in x) {
      if (y.hasOwnProperty(prop))
      {
        if (! deepEqual(x[prop], y[prop]))
          return false;
      }
      else
        return false;
    }
    return true;
  }
  else if (x !== y)
    return false;
  else
    return true;
}
