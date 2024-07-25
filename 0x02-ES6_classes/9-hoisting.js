export class HolbertonClass {
  constructor(year, location) {
    // Assign year and location with underscore
    this._year = year;
    this._location = location;
  }

  // Getter for year
  get year() {
    return this._year;
  }

  // Getter for location
  get location() {
    return this._location;
  }
}

// Create instances of HolbertonClass
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

// Define StudentHolberton
export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    // Assign firstName, lastName, and holbertonClass with underscore
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  // Getter for full name
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  // Getter for holbertonClass
  get holbertonClass() {
    return this._holbertonClass;
  }

  // Getter for full student description
  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

// Create instances of StudentHolberton
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// Export list of students
export const listOfStudents = [student1, student2, student3, student4, student5];
