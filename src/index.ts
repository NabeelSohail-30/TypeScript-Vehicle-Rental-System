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
      return `Sorry, this vehicle is already rented.`;
    } else {
      this._rented = true;
      return `You have rented a ${this._make} ${this._model} ${this._year} with Rental Price of ${this.rentalRate()}$ USD per Day.`;
    }
  }

  return(): string {
    if (this._rented) {
      this._rented = false;
      return `You have rented a ${this._make} ${this._model} ${this._year} with Rental Price of ${this.rentalRate()}$ USD per Day. Thank you for renting with us!`;
    } else {
      return `This ${this._make} ${this._model} ${this._year} is not currently rented.`;
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
    return 25;
  }

  get engineSize(): number {
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