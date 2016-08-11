// var MyObjConstructor = function(name){
//   var myPrivateVar = "Hello"; // just to show that it is hard to see this private var easily
//   this.name = name; // but you can see the name!
//   this.method = function(){
//     console.log( "I am a method");
//   };
// }
// var obj1 = new MyObjConstructor('object1');
// var obj2 = new MyObjConstructor('object2');
// console.log(obj1);
//
//
// obj1.newProperty = "newProperty!";
// obj1.__proto__.anotherProperty = "anotherProperty!";
// console.log(obj1.anotherProperty); // newProperty!
// console.log(obj1.newProperty); // anotherProperty!
// // What about obj2?
// console.log(obj2.newProperty); // undefined
// console.log(obj2.anotherProperty);

// function Cat( cat_name ) {
//   var name = cat_name;
//   this.getName = function() {
//     return name;
//   };
// }
// //adding a method to the cat prototype
// Cat.prototype.sayHi = function(){
//   console.log('meow');
// };
// //adding properties to the cat prototype
// Cat.prototype.numLegs = 4;
// var muffin = new Cat('muffin');
// var biscuit = new Cat('biscuit');
// console.log(muffin, biscuit);
// //we access prototype properties the same way as we would access 'own' properties
// muffin.sayHi();
// biscuit.sayHi();
// console.log(muffin.numLegs);

function Ninja(name){
  this.name = name;   // creating instance variables
  this.distance_traveled = 0;
}
// creating an instance method
Ninja.prototype.walk = function() {
    console.log(this.name + ' is walking');
    this.distance_traveled += 1;
    return this;      // have this method return its own object
  };
// creating an instance method
Ninja.prototype.run = function() {
    console.log(this.name + ' is running');
    this.distance_traveled += 5;
    this.displayDistanceTraveled();
    return this;      // have this method return its own object
  };
//another instance method
Ninja.prototype.displayDistanceTraveled = function() {
    console.log('distance traveled: ', this.distance_traveled);
}


// creating instances/objects
ninja1 = new Ninja('Jay');
ninja2 = new Ninja('Michael');
ninja3 = new Ninja('Andrew');


ninja1.walk().run().walk().run().run();  // because walk/run returns itself, we can chain these methods


// you can also log ninja1 and study it
console.log(ninja1);
