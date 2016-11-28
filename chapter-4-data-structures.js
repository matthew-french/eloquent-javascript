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

console.log('\nreturnRange <><>');
console.log(returnRange(-10,100,10));


// Sum of the values in an array.
function sumArray(rangeArray){
  var sum = 0;

  for (var i = 0; i < rangeArray.length; i++) {
    sum += rangeArray[i];
  }

  return sum;
}

console.log('\nsumArray <><>');
console.log(sumArray([1,2,3,4,5]));


// Reversing An Array
// Take an array as arg and output an array in reverse.
function reverseArray(inputArr) {
  var outputArr = [];

  for (var i = inputArr.length-1; i >= 0; i--) {
    outputArr.push(inputArr[i]);
  }

  return outputArr;
}

console.log('\nreverseArray <><>');
console.log(reverseArray([1,2,3,4,5]));


// Reverse array inPlace
// Take an array as arg and modfy inPlace producing a new array in reverse.
function reverseArrayInPlace(arr){
  for (var i = 0; i < arr.length; i++) {
    arr.splice(i,0,arr.pop());
  }
  return arr;
}

console.log('\nreverseArrayInPlace <><>');
console.log(reverseArrayInPlace([1,2,3,4,5]));

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

console.log('\narrayToList <><>');
console.log(arrayToList([1,2,3,4,5]));

function arrayToObject2(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; ++i)
    obj[i] = arr[i];
  return obj;
}

console.log('\narrayToObject2 <><>');
console.log(arrayToObject2([1,2,3,4,5]));

function arrayToObject3(arr) {

  var obj = arr.reduce(function(o, v, i) {
    o[i] = v;
    return o;
  }, {});

  return obj;
}

console.log('\narrayToObject3 <><>');
console.log(arrayToObject3([1,2,3,4,5]));

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

console.log('\nlistToArray <><>');
console.log(listToArray(arrayToList([1,2,3,4,5])));


// Prepend a value to a list
function prepend(ele,list) {
  var out = listToArray(list);
  out.unshift(ele);
  out = arrayToList(out);
  return out;
}

console.log('\nprepend <><>');
console.log(prepend(0,arrayToList([1,2,3,4,5])));



// Return value from position x in the list object
function nth(list,position) {
  var arr = listToArray(list);
  return arr[position];
}

console.log('\nnth <><>');
console.log(nth(arrayToList([1,2,3,4,5]),4));


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

console.log('\nrNth <><>');
console.log(rNth(arrayToList([1,2,3,4,5]),4));


// deepEqual compare an object or value and return true if all value and nodes are identical.
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

console.log('\ndeepEqual <><>');
console.log(deepEqual(arrayToList([1,2,3,4,5]),arrayToList([1,2,3,4,5])));
console.log(deepEqual(arrayToList([1,2,3,4]),arrayToList([1,2,3,4,5])));
