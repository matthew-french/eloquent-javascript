// Minimum - take 2 args and return min
function min(arg1, arg2){
  return (arg1 > arg2) ? arg2 : arg1;
}

console.log('\nmin <><>');
console.log(min(10,5));


// isEven - Recusive function return boolean
function isEven(num) {
  // convert negative to positive
  if (num < 0)
    num *= -1 ;

  if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  }

  return isEven(num - 2);
}

console.log('\nisEven <><>');
console.log(isEven(11));


// Bean Counting - countChar - return number of char in a string.
function countChar(string,chr){
  var count = 0;
  var numChr = 0;

  while (count <= string.length){
    if (string.charAt(count) == chr){
      numChr = numChr +1;
    }
    count = count + 1;
  }

  return numChr;
}

console.log('\ncountChar <><>');
console.log(countChar('Matthew going to ace this test', 'e'));

// Bean Counting - countBs - return number of B's in a string.
function countBs(string) {
  return countChar(string,'B');
}

console.log('\ncountBs <><>');
console.log(countBs('Matthew going to ace this test BBBBB'));
