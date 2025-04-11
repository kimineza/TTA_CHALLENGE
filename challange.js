//Fuction to greet a user

function greetUser(name) {
    return `Hello, ${name}!`;
  }

  //Function to add two numbers

function addNumbers(a,b) {
   return a + b;
}
console.log(addNumbers(4,7)); // Output: 11

//Multiply array values by 2

function multiplyArray(arr) {
    return arr.map(num => num * 2);
} 
// example: multiplyArray([1,2,3]) returns [2,4,6]

// For loop from 1 to 5

for (let i =1; i <= 5; i++) {
    console.log(i);
}

// While loop subtracting until 0

let num = 5;
while (num > 0) {
    console.log(num);
    num--;
}

// Print fruits using forEach

let fruits = ["apple","banana","cherry"];
fruits.forEach(fruit => console.log(fruit));

// Filter numbers greater than 10

let numbers = [4,12,7,20,3];
let filtered = numbers.filter(num => num > 10);
console.log(filtered); // [12,20]

// Student object and print properties 

let student = {
    name:  "John",
    age: 20,
    isEnrolled: true
};
console.log(student.name, student.age, student.isEnrolled);

//Add  sayHello method to student

student.sayHello = function() {
    console.log(`Hi, my name is ${this.name}`);
}
student.sayHello(); // Output: Hi, my name is John

// Class with constructor and method

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
  }
  
  let person1 = new Person("Alice", 25);
  person1.introduce();

  // Use map to square each number

let squared = [2, 4, 6, 8].map(num => num * num);
console.log(squared); // [4, 16, 36, 64]

// JavaScript array method questions

// Add "yellow" to colors
let colors = ["red", "blue", "green"];
colors.push("yellow");
console.log(colors); // ["red", "blue", "green", "yellow"]

// Remove last element using .pop()
colors = ["red", "blue", "green"];
colors.pop();
console.log(colors); // ["red", "blue"]

// Douch each number with .map()
let number = [10, 20, 30, 40, 50];
let doubled = number.map(num => num * 2);
console.log(doubled); // [20, 40, 60, 80, 100]

// Filter ages 18 and above
let ages = [15, 21, 17, 30, 12];
let adults = ages.filter(age => age >= 18);
console.log(adults); // [21, 30]

// Greeting for each name
let names = ["Anna", "Ben", "Claire"];
names.forEach(name => console.log(`Hello, ${name}!`));

// Sum scores using .reduce()
let scores = [2, 4, 6];
let total = scores.reduce((acc, curr) => acc + curr, 0);
console.log(total); // 12

// Check if "green" exists
colors = ["red", "blue", "green"];
console.log(colors.includes("green")); // true

// Find index of "book"
let items = ["pen", "book", "laptop"];
console.log(items.indexOf("book")); // 1

// Find first number>10 
let mixed = [1, "apple", true, 42];
let found = mixed.find(item => typeof item === "number" && item > 10);
console.log(found); // 42

// Join fruits into a string
let fruit = ["apple", "banana", "cherry"];
let result = fruit.join(", ");
console.log(result); // "apple, banana, cherry"