// 1. Combining Arrays
// Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.

let asianCountries = ["China", "India", "Japan", "Korea"];
let euroCountries = ["Germany", "France", "Spain", "Greece", ...asianCountries];
console.log(euroCountries);

// Once again create two arrays. Save all elements of both arrays to another variable.
let array1 = [2, 6, 8, true];
let array2 = ["Hello", "world", "welcome"];
const array3 = [...array1, ...array2];
console.log(array3);

// 2. Copying Arrays
// Copy an array using the spread operator. Store the copied array in another variable.
let arr = [null, 3, true, false, "hello"];
let copiedArr = [...arr];
console.log(copiedArr);

// 3. Find the Largest...
// Create a function to find the largest number in an array.
const largest = (array) => {
  for (let i = 0; i < array.length; i++) {
    let largNum = array[i];
    if (largNum > array[i + 1]) {
      return largNum;
    }
  }
};
console.log(largest([2, 5, 93, 55, 78, 20]));

// 4. Find the Smallest
// Create a function to find the smallest number in an array.
const smallest = (array) => {
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (num < array[i + 1]) {
      return num;
    }
  }
};
console.log(smallest([2, 5, 93, 55, 78, 20]));

// 5. Clone and Merge
// Given two objects:

const person = { name: "John" };
const job = { role: "Teacher" };

// 5.1 Clone the person object.
const personObject = { ...person };
console.log(personObject);

// 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.
const employee = { ...person, ...job };
console.log(employee);

// 5.3 Then change the values of the properties in the employee object.
let { name, role } = employee;
name = "Darren";
role = "IT";

console.log(`name: ${name}, role: ${role}`);
