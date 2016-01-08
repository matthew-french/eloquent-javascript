// looping a triangle
function triangle() {
  for (var str = '#';str.length <= 7;str += '#') {
      console.log(str);
  }
}

//Fizz Buzz
function fizzBuzz() {
  var str;

  for (var i = 1; i <= 100; i++) {

    str = '';

    if (i % 3 == 0)
      str = 'Fizz';

    if (i % 5 == 0)
      str = str + 'Buzz';

    console.log(str || i);
  }
}


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

triangle();
fizzBuzz();
chessBoard(8);
