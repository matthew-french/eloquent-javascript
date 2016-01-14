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

  for (var i = 0; i < rangeArray.length; i++){
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

  for (var i = 0; i < arr.length; i++)
    arr.splice(i,0,arr.pop());

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

function prepend(ele,list) {
  var out = listToArray(list);
  out.unshift(ele);
  out = arrayToList(out);
  return out;
}

function nth(list,position) {
  var arr = listToArray(list);
  return arr[position];
}

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

console.log(returnRange());
var arr2 = returnRange(10,100,10);
console.log(arr2);
var list = arrayToList(arr2);
console.log(list);
console.log(nth(list,5))

function deepEqual(value1, value2){
  if (typeof value1 !== typeof value2 | value1 !== value2){
    return false;
  }

  if (typeof value1 === 'object') {

  }

}

var arr = returnRange(1,5,1);
var list = arrayToList(arr);

//console.log(list);
//console.log(listToArray(list));
// var list = {
//   value : 1,
//   rest : null
// }

// var test = list.rest !== null ? true : false;
// console.log(list.rest);
// console.log(test);
// console.log();
// console.log(returnRange(10,1,-1));
// console.log(returnRange(1,10,1));
// console.log(sumArray(testArr));
// console.log(countBs('how many B B B B B  are in this sentance'));
// console.log(reverseArray(testArr));
