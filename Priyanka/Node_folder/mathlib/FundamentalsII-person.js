
var person= {
  name:"Priyanka" ,

  distance_travelled:0,

  say_name:function(){console.log(person.name);},

  say_something:function(parameter){console.log(person.name,"says",parameter);}
  }

console.log(person.say_something("I am cool"));
