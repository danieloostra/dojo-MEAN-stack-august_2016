function VehicleConstructor(name,number_of_wheels,number_of_passengers){
var vehicle ={};
vehicle.name=name;
vehicle.number_of_wheels=number_of_wheels;
vehicle.number_of_passengers=number_of_passengers;

vehicle.makeNoise= function(){
  console.log("Beep,Beep");
}
return vehicle;
}

var Hyundai = VehicleConstructor("NightFury", 4, 5);
console.log(Hyundai);
Hyundai.makeNoise=function(){
  console.log("Honk","Honk");
}
Hyundai.makeNoise();

var Bike = VehicleConstructor("Kawasaki",2,2);
console.log(Bike);
Bike.makeNoise =function(){
  console.log("Ring","Ring");
}
Bike.makeNoise()

var Bus = VehicleConstructor("HopOn", 8, 100);
console.log(Bus);
Bus.add_passengers= function(number){
console.log(Bus.number_of_passengers=+number);

}

Bus.add_passengers(50);
Bus.add_passengers(30);
Bus.makeNoise();
