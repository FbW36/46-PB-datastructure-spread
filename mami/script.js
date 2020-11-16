// # 46-PB-datastructure-spread

// # Spread the Word

// #### 1. Combining Arrays
// * Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.
// * Once again create two arrays. Save all elements of both arrays to another variable.

const euroCountries = ["germany", "spain"];
const asianCountries = ["japan", "singapore"];

const countries = [...euroCountries, ...asianCountries];
const countries2 = euroCountries.concat(asianCountries);
console.log(countries);
console.log(countries2);
// #### 2. Copying Arrays
// * Copy an array using the spread operator. Store the copied array in another variable.
const a = [1, 2, 3, 4, 5];
const b = [6, 7, 8, 9, 10];

const x = [...a, ...b];
console.log(x);

// #### 3. Find the Largest...
// Create a function to find the largest number in an array.

function largest(array) {
  return array.reduce((acc, cur) => {
    if (cur > acc) {
      acc = cur;
    }
    return acc;
  });
}
console.log("3==>", largest([1, 3, 6, 8, 2]));

function largestSpred(array) {
  return Math.max(...array);
}
console.log(largestSpred([1, 3, 6, 8, 2]));
// #### 4. Find the Smallest
// Create a function to find the smallest number in an array.
function smallest(array) {
  return array.reduce((acc, cur) => {
    if (cur < acc) {
      acc = cur;
    }
    return acc;
  });
}
console.log("4==>", smallest([1, 3, 6, 8, 2]));

function smallestSpred(array) {
  return Math.min(...array);
}
console.log(smallestSpred([1, 3, 6, 8, 2]));

// #### 5. Clone and Merge
// Given two objects:
// ```javascript
// const person = {name: "John"}
// const job = {role: "Teacher"}
// ```

const person = { name: "John" };
const job = { role: "Teacher" };

const clonePerson = { ...person };
console.log(clonePerson);
// * 5.1 Clone the person object.
// * 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.
// * 5.3 Then change the values of the properties in the employee object.
const employee = { ...person, ...job };
console.log(employee);

employee.name = "Max";
employee.age = 70;
employee.role = "doctor";

console.log(employee);

// #### Bonus: 6.  Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.
// * Examples
// * isWhole(1, 2, 3, 4) ➞ false
// * isWhole(9, 2, 2, 5) ➞ false
function isWhole() {
  let array = Object.values(arguments);
  console.log("array", array);

  let avr = array.reduce((acc, cur) => (acc += cur)) / array.length;
  console.log("avr=>", avr);
  return Number.isInteger(avr);
}
console.log("1==>", isWhole(4, 2, 2, 4));
console.log("2==>", isWhole([4, 2, 2, 4]));
let array = [4, 2, 2, 4];
console.log(isWhole(array));
function isWhole2(...arg) {
  console.log("...arg", arg);

  let avr = arg.reduce((acc, cur) => (acc += cur)) / arg.length;
  console.log("avr=>", avr);
  return Number.isInteger(avr);
}

console.log("3==>", isWhole2(1, 2, 3, 4));
console.log("4==>", isWhole2([1, 5, 3, 4]));
// * Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!
