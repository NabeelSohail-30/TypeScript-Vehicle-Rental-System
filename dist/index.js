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
            return `Sorry, this ${this._make} ${this._model} is already rented.`;
        }
        else {
            this._rented = true;
            return `You have rented a ${this._make} ${this._model}.`;
        }
    }
    return() {
        if (this._rented) {
            this._rented = false;
            return `You have returned the ${this._make} ${this._model}. Thank you for renting with us!`;
        }
        else {
            return `This ${this._make} ${this._model} is not currently rented.`;
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
        // Example implementation: $50/day for a car
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
        // Example implementation: $100/day for a truck
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
        // Example implementation: $25/day for a motorcycle
        return 25;
    }
    get engineSize() {
        return this._engineSize;
    }
}
const car = new Car('Toyota', 'Corolla', 2021, false, 4, 5);
console.log(car.rent()); // "You have rented a Toyota Corolla."
console.log(car.return()); // "You have returned the Toyota Corolla. Thank you for renting with us!"
console.log(car.rent());
//# sourceMappingURL=index.js.map