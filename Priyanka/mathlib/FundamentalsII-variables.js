//Find sum of numbers btw x and y:
var sum=0;
var add=function(x,y){
  for(var i=x;i<=y;i++){
    sum=sum+i;
  }
  console.log(sum);
}
add(3,4);



//Find minimum value:
var find_minimum_number=function(arr){
var min=arr[0];
for (var i = 1; i <arr.length-1; i++) {
  if (arr[i]<min){
    min=arr[i];
  }
}
  console.log(min);
}
find_minimum_number([1, 5, 90, 25, -3, 0]);



//Fin Average:
var find_average=function(arr){
var sum=0
for (var i=0; i<arr.length;i++){
  sum=sum+arr[i];
}
console.log (sum);
var avg=sum/arr.length;
console.log (avg);
}
find_average([1, 5, 90, 25, -3, 0]);
