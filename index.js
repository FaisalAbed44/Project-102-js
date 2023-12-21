// vehicles class
class Vehicle {
  // Constructor to initialize vehicle details
  constructor(name, manufacturer, id) {
    this.name = name;
    this.manufacturer = manufacturer;
    this.id = id;
  }
}

// Create a class for cars that extends the Vehicle class
class Car extends Vehicle {
  constructor(name, manufacturer, id, carType) {
    super(name, manufacturer, id);
    this.carType = carType;
  }
}

// Create a class for airplanes that extends the Vehicle class
class Airplane extends Vehicle {
  constructor(name, manufacturer, id, airplaneType) {
    super(name, manufacturer, id);
    this.airplaneType = airplaneType;
  }
}

// Create a class for employees
class Employee {
  // Constructor to initialize employee details
  constructor(name, id, dateOfBirth) {
    this.name = name;
    this.id = id;
    this.dateOfBirth = dateOfBirth;
  }
}

// Create a class for drivers that extends the Employee class
class Driver extends Employee {
  constructor(name, id, dateOfBirth, licenseID) {
    super(name, id, dateOfBirth);
    this.licenseID = licenseID;
  }
}

// Create a class for pilots that extends the Employee class
class Pilot extends Employee {
  constructor(name, id, dateOfBirth, licenseID) {
    super(name, id, dateOfBirth);
    this.licenseID = licenseID;
  }
}

// Create a class for reservations
class Reservation {
  // Constructor to initialize reservation details
  constructor(reservationDate, employeeId, vehicleId, reservationID) {
    this.reservationDate = reservationDate;
    this.employeeId = employeeId;
    this.vehicleId = vehicleId;
    this.reservationID = reservationID;
  }
}

// Create an array to store reservations
let reservationsArray = [];

// Create three cars and two airplanes
let car1 = new Car("yars", "Manufacturer1", 1, "benzin");
let car2 = new Car("toyota", "Manufacturer2", 2, "Electric");
let car3 = new Car("RA4", "Manufacturer3", 3, "Electric");

let airplane1 = new Airplane("Airplane1", "Manufacturer4", 4, "Type1");
let airplane2 = new Airplane("Airplane2", "Manufacturer5", 5, "Type2");

// Create a function to check compatibility and make a reservation
function makeReservation(employeeId, vehicleId) {
  let employee = reservationsArray.find((res) => res.employeeId === employeeId);
  if (employee && employee.vehicleId !== vehicleId) {
    console.log("Employee does not match the vehicle.");
  } else {
    // Create a new reservation and add it to the array
    let reservation = new Reservation(new Date(), employeeId, vehicleId, reservationsArray.length + 1);
    reservationsArray.push(reservation);
    console.log("Reservation created successfully.");
  }
}

// Make a reservation using the function
makeReservation(1, 1); 
makeReservation(2, 1); 

// Print the content of the array using the map function
reservationsArray.map((reservation) => console.log(reservation));
