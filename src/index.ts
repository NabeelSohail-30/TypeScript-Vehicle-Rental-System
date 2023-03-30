abstract class Vehicle {
  private _make: string;
  private _model: string;
  private _year: number;
  private _rented: boolean;

  constructor(make: string, model: string, year: number, rented: boolean = false) {
    this._make = make;
    this._model = model;
    this._year = year;
    this._rented = rented;
  }

  get make(): string {
    return this._make;
  }

  get model(): string {
    return this._model;
  }

  get year(): number {
    return this._year;
  }

  get rented(): boolean {
    return this._rented;
  }

  set rented(value: boolean) {
    this._rented = value;
  }

  abstract rentalRate(): number;

  rent(): string {
    if (this._rented) {
      return `Sorry, this ${this._make} ${this._model} is already rented.`;
    } else {
      this._rented = true;
      return `You have rented a ${this._make} ${this._model}.`;
    }
  }

  return(): string {
    if (this._rented) {
      this._rented = false;
      return `You have returned the ${this._make} ${this._model}. Thank you for renting with us!`;
    } else {
      return `This ${this._make} ${this._model} is not currently rented.`;
    }
  }
}

class Car extends Vehicle {
  private _numDoors: number;
  private _numPassengers: number;

  constructor(make: string, model: string, year: number, rented: boolean, numDoors: number, numPassengers: number) {
    super(make, model, year, rented);
    this._numDoors = numDoors;
    this._numPassengers = numPassengers;
  }

  rentalRate(): number {
    // Example implementation: $50/day for a car
    return 50;
  }

  get numDoors(): number {
    return this._numDoors;
  }

  get numPassengers(): number {
    return this._numPassengers;
  }
}

class Truck extends Vehicle {
  private _payloadCapacity: number;

  constructor(make: string, model: string, year: number, rented: boolean, payloadCapacity: number) {
    super(make, model, year, rented);
    this._payloadCapacity = payloadCapacity;
  }

  rentalRate(): number {
    // Example implementation: $100/day for a truck
    return 100;
  }

  get payloadCapacity(): number {
    return this._payloadCapacity;
  }
}

class Motorcycle extends Vehicle {
  private _engineSize: number;

  constructor(make: string, model: string, year: number, rented: boolean, engineSize: number) {
    super(make, model, year, rented);
    this._engineSize = engineSize;
  }

  rentalRate(): number {
    // Example implementation: $25/day for a motorcycle
    return 25;
  }

  get engineSize(): number {
    return this._engineSize;
  }
}

const car = new Car('Toyota', 'Corolla', 2021, false, 4, 5);
console.log(car.rent()); // "You have rented a Toyota Corolla."
console.log(car.return()); // "You have returned the Toyota Corolla. Thank you for renting with us!"
console.log(car.rent());