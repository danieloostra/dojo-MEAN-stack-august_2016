ffunction runningLogger(){
  console.log ("I am running");
}
runningLogger();

function multiByTen(num){
  var result= num*10;
  console.log(result);
}
multiByTen(5);

function stringReturnOne(){
  console.log("Be Funky");
}
stringReturnOne();


function stringReturnTwo(){
  console.log("Be Cool");
}
stringReturnTwo();

function caller(parameter){
  return 0;
}
caller(typeof("a"));

function myDoubleConsolelog(a,b){
  console.log(a);
  console.log(b);
}
myDoubleConsolelog(typeof("a"),typeof(5))


function caller2(parameter){
console.log("Starting");
setTimeout(function(){
  if(typeof someParam ==="function"){
    console.log("About to invoke function");
    someParam(stringReturnOne,stringReturnTwo);
  }
}, 3000);
console.log("Ending?");
return "Interesting";
}
caller2(myDoubleConsolelog);
