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
  return Math.max(...array);
};
console.log(largest([2, 5, 93, 55, 78, 20]));

// 4. Find the Smallest
// Create a function to find the smallest number in an array.
const smallest = (array) => {
  return Math.min(...array);
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

////* Bonus: 6. Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.
function isWhole(num1, num2, num3, num4) {
  let average = (num1 + num2 + num3 + num4) / 4;
  if (Number.isInteger(average)) {
    return true;
  } else {
    return false;
  }
}
console.log(isWhole(1, 2, 3, 4));
console.log(isWhole(9, 2, 2, 5));
console.log(isWhole(9, 3, 3, 5));

//Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!
console.log(isWhole([9, 3, 3, 5])); // This does't work , beacuse this only contains one argument
