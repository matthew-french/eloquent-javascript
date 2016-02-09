var x = returnRange(1,10,1);
x[1] = returnRange(15,20,1);
x[1][1] = returnRange(90,100,1);
console.log(x);

// Flattening
function flattenMultiArray(arr,out){
  out = (typeof out === 'object') ? out : [];
  arr.reduce(function(x,y,z){
    console.log(z);
    if (x === undefined){
      if (typeof y === 'number') {
        out.push(y);
      } else {
        flattenMultiArray(y,out);
      }
    } else {

    }
  });
  return out;
}

var arr = flattenMultiArray(x);
console.log(arr);
