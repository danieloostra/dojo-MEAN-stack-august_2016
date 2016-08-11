function isEven(num){
  return (num%2==0)
}

function Min(num){
  return
}


var _={
   map: function(name) { console.log(name)},

   findnew: function(arr,num){
     for (var i=0;i<arr.length;i++){
       if (num==arr[i]){
         console.log("Found it!");}
         else{("Oops!No luck...");}
       }
     },
    filter: function(arr,callback){
      var newArray=[];
      for (var i=0;i<arr.length;i++){
        if (callback(arr[i])){
          newArray.push(arr[i]);
        }
      }
      return newArray;
    }

   }

 _.map('Lance')
 _.findnew([1,5,7,9],5)
 console.log(_.filter([1,4,5,6], isEven));


 //   reduce: function() { // code here},
 //   find: function() {   // code here},
 //   filter: function() { // code here},
 //   reject: function() { // code here}
