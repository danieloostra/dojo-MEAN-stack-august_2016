var x=[1, 5, 90, 25, -3, 0];
var min=x[0];
for (var i = 1; i <x.length-1; i++) {
  if (x[i]<min){
    min=x[i];
  }
}
  console.log(min);
