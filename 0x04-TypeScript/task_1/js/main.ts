// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  contract?: boolean;
  [key: string]: any; // allows extra properties
}

// Director extends Teacher
interface Director extends Teacher {
  numberOfReports: number;
}

// Teacher example
let teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "New York",
};

console.log("Teacher:", teacher3);

// Director example
let director1: Director = {
  firstName: "John",
  lastName: "Doe",
  location: "New York",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log("Director:", director1);

// Function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

//function printTeacher(firstName: string, lastName: string): string {
  //return `${firstName[0]}. ${lastName}`;
//}

console.log("Print Teacher:", printTeacher("John", "Doe"));

// TeacherClass interface
interface TeacherClass {
  firstName: string;
  lastName: string;
}

// StudentClass implements TeacherClass
class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Create student instance
const student1 = new StudentClass("Alice", "Smith");
console.log("Student Display Name:", student1.displayName());
console.log("Student Homework:", student1.workOnHomework());
