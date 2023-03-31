"use strict";
class Vehicle {
    constructor(make, model, year, rented = false) {
        this._make = make;
        this._model = model;
        this._year = year;
        this._rented = rented;
    }
    get make() {
        return this._make;
    }
    get model() {
        return this._model;
    }
    get year() {
        return this._year;
    }
    get rented() {
        return this._rented;
    }
    set rented(value) {
        this._rented = value;
    }
    rent() {
        if (this._rented) {
            return `Sorry, this vehicle is already rented.`;
        }
        else {
            this._rented = true;
            return `You have rented a ${this._make} ${this._model} ${this._year} with Rental Price of ${this.rentalRate()}$ USD per Day.`;
        }
    }
    return() {
        if (this._rented) {
            this._rented = false;
            return `You have rented a ${this._make} ${this._model} ${this._year} with Rental Price of ${this.rentalRate()}$ USD per Day. Thank you for renting with us!`;
        }
        else {
            return `This ${this._make} ${this._model} ${this._year} is not currently rented.`;
        }
    }
}
class Car extends Vehicle {
    constructor(make, model, year, rented, numDoors, numPassengers) {
        super(make, model, year, rented);
        this._numDoors = numDoors;
        this._numPassengers = numPassengers;
    }
    rentalRate() {
        return 50;
    }
    get numDoors() {
        return this._numDoors;
    }
    get numPassengers() {
        return this._numPassengers;
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, rented, payloadCapacity) {
        super(make, model, year, rented);
        this._payloadCapacity = payloadCapacity;
    }
    rentalRate() {
        return 100;
    }
    get payloadCapacity() {
        return this._payloadCapacity;
    }
}
class Motorcycle extends Vehicle {
    constructor(make, model, year, rented, engineSize) {
        super(make, model, year, rented);
        this._engineSize = engineSize;
    }
    rentalRate() {
        return 25;
    }
    get engineSize() {
        return this._engineSize;
    }
}
console.log('\n------------Car-------------\n');
const car = new Car('Toyota', 'Corolla', 2021, false, 4, 5);
console.log(car.rent());
console.log(car.return());
console.log('\n-------------Truck-----------------\n');
const truck = new Truck('Ford', 'F-150', 2021, false, 1000);
console.log(truck.rent());
console.log(truck.return());
console.log('\n-------------Bike---------------\n');
const bike = new Motorcycle('Honda', 'CBR', 2021, false, 1000);
console.log(bike.rent());
console.log(bike.return());
//# sourceMappingURL=index.js.map