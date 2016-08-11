function Vehicle (name, numberOfWheels, numberOfPassengers) {
  this.name = name;
  this.numberOfWheels = numberOfWheels;
  this.numberOfPassengers = numberOfPassengers;
  return this;
}

Vehicle.prototype.makeNoise = function () {
  console.log(this.name +' Beep,Beep');
  return this;
}

bike = new Vehicle('Bike', 2, 2);

bike.makeNoise();
console.log(bike);


// function VehicleConstructor(name,number_of_wheels,number_of_passengers,speed){
//   var distance_traveled=0;
//   var updateDistanceTravelled =function(){
//     console.log(distance_traveled += speed);
//   }
//
//   this.name=name;
//   this.number_of_wheels=number_of_wheels;
//   this.number_of_passengers=number_of_passengers;
//   this.speed=speed;
//   this.makeNoise= function(){
//     console.log("Beep,Beep");
//   }
//
//   this.move=function(){
//     updateDistanceTravelled();
//     this.makeNoise();
//   }
//   this.checkMiles=function(){
//     console.log(distance_travelled);
//   }
// }
//
// var Hyundai = new VehicleConstructor("NightFury", 4, 5);
// console.log(Hyundai);
// Hyundai.makeNoise=function(){
//   console.log("Honk","Honk");
// }
// Hyundai.makeNoise();
