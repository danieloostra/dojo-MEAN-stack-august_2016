//Find average:
var obj1={ avgFunc: function(arr){
var sum=0
for (var i=0; i<arr.length;i++){
  sum=sum+arr[i];
}
console.log (sum);
var avg=sum/arr.length;
console.log (avg); } }
console.log(obj1.avgFunc([1,3,4,5,]))


//Find sum of numbers btw (x,y):
var obj2={ addFunc: function(x,y){
  var sum=0;
  for(var i=x;i<=y;i++){
      sum=sum+i;
    }
    console.log(sum);
  }
}
console.log(obj2.addFunc(4,5))


//Find minimum:
var obj3={ minFunc: function(arr){
var min=arr[0];
for (var i = 1; i <arr.length-1; i++) {
  if (arr[i]<min){
    min=arr[i];
  }
}
  console.log(min);
}
}
console.log(obj3.minFunc([4,5,7,3,-1,-89,-900]))
