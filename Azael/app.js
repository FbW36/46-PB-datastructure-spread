// # 46-PB-datastructure-spread

// # Spread the Word

// #### 1. Combining Arrays
// * Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.
// * Once again create two arrays. Save all elements of both arrays to another variable.

let euroCountries = ["Oporto", "Madrid", "London"];
let asianCountries = ["Kioto", "Nepal", "Bombay"];

euroCountries = [...euroCountries, ...asianCountries];

console.log("euroCountries :>> ", euroCountries); //euroCountries :>>  [ 'Oporto', 'Madrid', 'London', 'Kioto', 'Nepal', 'Bombay' ]

let knifes = ["usuba", "santoku", "deba"];
let sushi = ["nigiri", "maki", "naguro"];

let japanThings = [...knifes, ...sushi];

console.log("japanThings :>> ", japanThings);

// #### 2. Copying Arrays
// * Copy an array using the spread operator. Store the copied array in another variable.

let knifes2 = ["usuba", "santoku", "deba"];

let knifes2Copy = [...knifes2];

console.log("knifes2Copy :>> ", knifes2Copy);

// #### 3. Find the Largest...
// Create a function to find the largest number in an array.
const nums = [1, 76, 98, 900, 45, 10];

function findLargest(array) {
  return Math.max(...array);
}
console.log("findLargest :>> ", findLargest(nums));
// #### 4. Find the Smallest
// Create a function to find the smallest number in an array.

function findSmallest(array) {
  return Math.min(...array);
}
console.log("findSmallest :>> ", findSmallest(nums));

// #### 5. Clone and Merge
// Given two objects:
// ```javascript
const person = { name: "John" };
const job = { role: "Teacher" };
// ```
// * 5.1 Clone the person object.
const clonPerson = { ...person };

// * 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.
const employee = { ...person, ...job };

console.log("employee :>> ", employee);

// * 5.3 Then change the values of the properties in the employee object.

employee.name = "Juancisco";
employee.role = "gigolo";

console.log("employee :>> ", employee);

// #### Bonus: 6.  Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.
// * Examples
// * isWhole(1, 2, 3, 4) ➞ false
// * isWhole(9, 2, 2, 5) ➞ false

// * Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!

function isWhole(num1, num2, num3, num4) {
  let sum = num1 + num2 + num3 + num4;
  return Number.isInteger(sum / 4);
}

console.log("isWhole :>> ", isWhole(1, 2, 3, 4)); //isWhole :>>  false
console.log("isWhole :>> ", isWhole(1, 2, 3, 6)); //isWhole :>>  true

console.log("isWhole :>> ", isWhole([1, 2, 3, 6])); //isWhole :>>  false, the array makes the function crash

console.log("isWhole :>> ", isWhole(...[1, 2, 3, 6])); //isWhole :>>  true!!
