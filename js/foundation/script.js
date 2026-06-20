// const students = [
//   { name: 'Ali', score: 85 }, { name: 'Sara', score: 92 },
//   { name: 'Hamza', score: 61 }, { name: 'Zara', score: 74 },
// ]
// const passed  = students.filter(s => s.score >= 70)
// const average = students.reduce((sum, s) => sum + s.score, 0) / students.length
// console.log(`Average: ${average}% | Passed: ${passed.map(s => s.name).join(', ')}`)

// {
// variables, scope, hoisting
// var x = 10;
// let y = 20; // when you want to change the value later
// const z = 30; // when you want to keep the value constant
// console.log(x,y,z); // 10 20 30
// }

// y = 25; // valid
// // z = 35; // invalid, will throw an error

// console.log(score); // undefined due to hoisting
// var score = 100; // variable declaration is hoisted, but assignment is not

// console.log(age); // ReferenceError: Cannot access 'age' before initialization
// let age = 25; // block-scoped variable

// Data types
let name = "John"; // string
let age = 30; // number
let isStudent = true; // boolean
let hobbies = ["reading", "gaming", 26]; // array
let person = { name: "Alice", age: 25, education: "BS" }; // object
let nothing = null; // null
let notDefined; // undefined

// console.log(typeof name); // string
// console.log(typeof age); // number
// console.log(typeof isStudent); // boolean
// console.log(typeof hobbies); // object (arrays are a type of object)
// console.log(typeof person); // object
// console.log(typeof nothing); // object (this is a quirk in JavaScript)
// console.log(typeof notDefined); // undefined

// 6 values falsy
let falsyValues = [false, 0, "", null, undefined, NaN];
// [], {}, and function(){} are all truthy values in JavaScript
// console.log(Boolean([])); // true
// console.log(Boolean({})); // true
// console.log(Boolean(function(){})); // true

// === vs ==
// console.log(5 == '5'); // true (loose equality, type coercion occurs)
// console.log(5 === '5'); // false (strict equality, no type coercion)

// operators
let a = 10;
let b = 5;

// console.log(a + b); // 15 (addition)
// console.log(a - b); // 5 (subtraction)
// console.log(a * b); // 50 (multiplication)
// console.log(a / b); // 2 (division)
// console.log(a % b); // 0 (modulus)

a += 5; // a is now 15
b *= 2; // b is now 10

// console.log(a); // 15
// console.log(b)

// logical operators
let isAdult = true;
let hasID = false;

// console.log(isAdult && hasID); // false (logical AND)
// console.log(isAdult || hasID); // true (logical OR)
// console.log(!isAdult); // false (logical NOT); // 10

// control flow
let score = 90;

// if (score >= 90) {
//   console.log("Grade: A");
// } else if (score >= 80) {
//   console.log("Grade: B");
// } else if (score >= 70) {
//   console.log("Grade: C");
// } else if (score >= 60) {
//   console.log("Grade: D");
// } else {
//   console.log("Grade: F");
// }

// with switch case
// switch (true) {
//   case (score >= 90):
//     console.log("Grade: A");
//      break;
//   case (score >= 80):
//     console.log("Grade: B");
//     break;
//   case (score >= 70):
//     console.log("Grade: C");
//   case (score >= 60):
//     console.log("Grade: D");
//     break;
//   default:
//     console.log("Grade: F");
// }

// ternary operator
// isloogedIN ? <dashboard /> : <login />;
const grade =
  score >= 90
    ? "A"
    : score >= 80
      ? "B"
      : score >= 70
        ? "C"
        : score >= 60
          ? "D"
          : "F";
// console.log(`${grade}`)

// loops
const students = [
  "Sara",
  "Hamza",
  "Ali",
  "Zara",
  "Ahmed",
  "Ayesha",
  "Bilal",
  "Fatima",
  "Hassan",
  "Hina",
];

// for(let i=0; i < students.length; i++){
//   console.log(students[i]);
// }

// for(const st of students){
//   console.log(st);
// }

let i = 0;
// while(i < students.length){
//   console.log(students[i]);
//   i++;
// }

// do {
//   console.log(students[i]);
//   i++;
// } while(i < students.length);

// Functions

// function calculateGrade(score) {
//   if (score >= 90) {
//     return "Grade: A";
//   } else if (score >= 80) {
//     return "Grade: B";
//   } else if (score >= 70) {
//     return "Grade: C";
//   } else if (score >= 60) {
//     return "Grade: D";
//   } else {
//     return "Grade: F";
//   }
// }

// const ans = calculateGrade(85);
// console.log(calculateGrade(3)); // undefined, because the function does not return anything

// arrow function
const calculateGrade = (score) => {
  if (score >= 90) {
    return "Grade: A";
  } else if (score >= 80) {
    return "Grade: B";
  } else if (score >= 70) {
    return "Grade: C";
  } else if (score >= 60) {
    return "Grade: D";
  } else {
    return "Grade: F";
  }
};

const ans = calculateGrade(85); // "Grade: B"
// console.log(ans); // "Grade: B"

const getStudentInfo = (name, score) => {
  const grade = calculateGrade(score);
  return { name, score, grade };
}

const studentIn = getStudentInfo("ALI", 85);
const studentIn2 = getStudentInfo("Sara", 92);
// console.log(studentIn); // { name: 'ALI', score: 85, grade: 'Grade: B' }
// console.log(studentIn2); // { name: 'Sara', score: 92, grade: 'Grade: A' }


const createReport = (name, score, passing = 70) => {
  const grade = calculateGrade(score);
  const status = score >= passing ? "Passed" : "Failed";
  return { name, score, grade, status };
} 

// console.log(createReport("Ali", 85)); // { name: 'Ali', score: 85, grade: 'Grade: B', status: 'Passed' }


// closures


function makeCounter() {
  let count = 0; // private variable
  
  return function() {
    count++;
    return count;
  };
};

const counter = makeCounter();

// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

const counter2 = makeCounter();
// console.log(counter2());
// console.log(counter2());
// console.log(counter());


function createBankAccount(initialBalance) {
  let balance = initialBalance; // private variable

  return {
    deposit: function(amount) {
      balance += amount;
      return balance;
    },
    withdraw: function(amount) {
      if (amount <= balance) {
        balance -= amount;
        return balance;
      } else {
        return "Insufficient funds";
      }
    },
    getBalance: function() {
      return balance;
    }
  };
}

const myAccount = createBankAccount(1000);
// console.log(myAccount.getBalance()); // 1000
// console.log(myAccount.deposit(500)); // 1500
// console.log(myAccount.withdraw(200)); // 1300
// console.log(myAccount.withdraw(2000)); // "Insufficient funds"
// console.log(myAccount.getBalance()); // 1300

// objects = key value pairs
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  color: "red",
  start: function() {
    console.log("Car started");
  },
  stop: function() {
    console.log("Car stopped");
  }
};

// console.log(car.make); // "Toyota"
// console.log(car["model"]); // "Camry"
// car.start(); // "Car started"
// car.stop(); // "Car stopped"


const studentsData = [
  { name: 'Ali', score: 85 }, { name: 'Sara', score: 92 },
  { name: 'Hamza', score: 61 }, { name: 'Zara', score: 74 },
  { name: 'Ahmed', score: 55 }, { name: 'Ayesha', score: 78 },
  { name: 'Bilal', score: 82 }, { name: 'Fatima', score: 68 },
  { name: 'Hassan', score: 90 }, { name: 'Hina', score: 73 },
];

// MAP, FILTER, REDUCE

// MAP

const nameswithGrade = studentsData.map((s) => {
  return {
    name: s.name,
    grade: calculateGrade(s.score)
  }
});
// console.log(nameswithGrade); // ['Ali', 'Sara', 'Hamza', 'Zara', 'Ahmed', 'Ayesha', 'Bilal', 'Fatima', 'Hassan', 'Hina']

// Filtred students who passed (score >= 70)

// const passedStudents = studentsData.filter(s => s.score >= 70);
const passedGrade = nameswithGrade.filter((s) => s.grade !== "Grade: F").map((s) => `${s.name} - ${s.grade}`);
// console.log(passedStudents); // [{ name: 'Ali', score: 85 }, { name: 'Sara', score: 92 }, { name: 'Zara', score: 74 }, { name: 'Ayesha', score: 78 }, { name: 'Bilal', score: 82 }, { name: 'Hassan', score: 90 }, { name: 'Hina', score: 73 }]
// console.log(passedGrade); // [{ name: 'Ali', grade: 'Grade: B' }, { name: 'Sara', grade: 'Grade: A' }, { name: 'Zara', grade: 'Grade: C' }, { name: 'Ayesha', grade: 'Grade: C' }, { name: 'Bilal', grade: 'Grade: B' }, { name: 'Hassan', grade: 'Grade: A' }, { name: 'Hina', grade: 'Grade: C
// find

const ali = studentsData.find(s => s.name === "Ali");
// Reduce
const data = studentsData.reduce((obj, s) =>  {
  obj.totalScore += s.score;
  obj.count += 1;
  return obj;
}, {});
// console.log(data); // { totalScore: 758, count: 10 }


// objects: destructuring, spread operator, rest operator

const student = { name: "Ali", score: 85, grade: "B", age: 20 };

// destructuring  
// const { name, score, grade, age } = student;

// spread operator
const updatedStudent = { ...student, score: 90, grade: "A" };
console.log(updatedStudent); // { name: 'Ali', score: 90, grade: 'A', age: 20 }

// rest operator
// const { name, score, ...rest } = student;
// console.log(name); // "Ali"
// console.log(rest); // { grade: 'B', age: 20 }

// copy by value vs copy by reference
let x = 10; // primitive type, copy by value
let y = x; // y is a copy of x
y = 20; // changing y does not affect x
// console.log(x); // 10
// console.log(y); // 20

let obj1 = { name: "Ali" }; // non-primitive type, copy by reference
let obj2 = obj1; // obj2 is a reference to the same object as obj1
obj2.name = "Sara"; // changing obj2 also changes obj1
// console.log(obj1.name); // "Sara"
// console.log(obj2.name); // "Sara"

// optional chaining
const studentInfo = {
  name: "Ali",
  score: 85,
  grade: "B",
  address: {
    city: "Karachi",
    country: "Pakistan"
  }
};

console.log(studentInfo.address.city); // "Karachi"
console.log(studentInfo.address?.city); // "Karachi"
console.log(studentInfo.contact?.email); // undefined, does not throw an error