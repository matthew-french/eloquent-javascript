// looping a triangle
function triangle() {
  for (var str = '#';str.length <= 7;str += '#') {
      console.log(str);
  }
}
// #
// ##
// ###...

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
