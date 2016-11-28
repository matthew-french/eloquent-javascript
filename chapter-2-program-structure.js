// looping a triangle
function triangle(n) {
  for (var str = '#';str.length <= n;str += '#') {
      console.log(str);
  }
}
console.log('\ntriangle <><>')
triangle(5);

//Fizz Buzz
function fizzBuzz(n) {
  var str;

  for (var i = 1; i <= n; i++) {

    str = '';

    if (i % 3 == 0)
      str = 'Fizz';

    if (i % 5 == 0)
      str = str + 'Buzz';

    console.log(str || i);
  }
}

console.log('\nfizzBuzz <><>')
fizzBuzz(5);


// Create a Chess board grid
function chessBoard(size) {
  var out = '';
  var str = '';
  var chk = '#';

  for (var i = 1;i <= size;i++) {
    str = '';

    for (var j = 1;j <= size;j++) {
      str = str + chk;
      chk = (chk == '#') ? ' ' : '#';
    }

    out = out + str + '\n';
    chk = (chk == '#') ? ' ' : '#';
  }

  console.log(out);
}

console.log('\nchessBoard <><>')
chessBoard(5);
