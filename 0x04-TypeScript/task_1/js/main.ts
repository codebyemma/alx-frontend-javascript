interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    contract?: boolean
}

interface Directors extends Teacher {
    numberOfReports: number
}

let teacher3: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    location: "New York",
};

console.log(teacher3);

let director1: Directors = {
    firstName: "John",
    lastName: "Doe",
    location: "New York",
    fullTimeEmployee: true,
    numberOfReports: 17
};

console.log(director1);

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName[0]}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));

interface teacherclass {
    firstName: string;
    lastName: string;
};

class studentClass implements teacherclass  {
    firstName: string;
    lastName: string;

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }

}