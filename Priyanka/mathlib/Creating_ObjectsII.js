function VehicleConstructor(name,number_of_wheels,number_of_passengers,speed){
  var distance_traveled=0;
  var updateDistanceTravelled = function(){
    console.log(distance_traveled += speed);
  }

  this.name = name;
  this.number_of_wheels=number_of_wheels;
  this.number_of_passengers=number_of_passengers;
  this.speed=speed;

  this.makeNoise = function() {
    console.log("Beep,Beep");
  }
  this.move = function() {
    updateDistanceTravelled();
    this.makeNoise();
  }

  this.checkMiles=function(){
    console.log(distance_travelled);
  }
}


var Hyundai = new VehicleConstructor("NightFury", 4, 5);
console.log(Hyundai);
Hyundai.makeNoise = function(){
  console.log("Honk","Honk");
}
Hyundai.makeNoise();

var Bike = new VehicleConstructor("Kawasaki",2,2);
console.log(Bike);
Bike.makeNoise =function(){
  console.log("Ring","Ring");
}
Bike.makeNoise();

var Bus = new VehicleConstructor("HopOn", 8, 100,30);
console.log(Bus);
Bus.add_passengers= function(number){
console.log(this.number_of_passengers+=number);
}
console.log(Bus.speed);
Bus.add_passengers(50);
Bus.add_passengers(30);
Bus.move();
// Bus.checkMiles();
