class Vehicle {
  constructor(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
  }

  honk() {
    return "Beep.";
  }

  toString() {
    "The vehicle is a Honda Monster Truck from 1999."
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
  }
}
class Car extends Vehicle{
  constructor(make, model, year){
    super(make, model, year);
    this.numWheels = 4;
  }

}

class Motorcycle extends Vehicle{
  constructor(make, model, year){
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine(){
    return "VROOM!!!";
  }
  

}

class Garage{
  constructor(num){
    this.Array = [];
    this.max = num;
  }
  add(veh) {
    if(!(veh instanceof Vehicle)){
      throw new Error("only vehicle accepted");
    }
    if(this.Array.length >= this.max){
      throw new Error("don't have enough space");
    }

    this.Array.push(veh);
    console.log("added");
  }
}
let garage = new Garage(2);


let myFirstVehicle = new Motorcycle("Honda", "Monster Truck", 1999);
console.log(myFirstVehicle.revEngine());

