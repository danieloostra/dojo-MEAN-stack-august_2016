//Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the average of all of the values, and then print it
var sum=0
var x=[1, 5, 90, 25, -3, 0];
for (var i=0; i<x.length;i++){
  sum=sum+x[i];
}
 console.log (sum);
var avg=sum/x.length;
console.log (avg);
