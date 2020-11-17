/*. Combining Arrays
- Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.
- Once again create two arrays. Save all elements of both arrays to another variable.*/

let euroCountries = [
  "France",
  "Germany",
  "Portugal",
  "Greek",
  "Italy",
  "Netherlands",
];

let asianCountries = ["Kambodia", "Laos", "Vietnam"];

euroCountries = [...euroCountries, ...asianCountries];
console.log(
  euroCountries
); /* [
'France', 'Germany',
    'Portugal', 'Greek',
    'Italy', 'Netherlands',
    'Kambodia', 'Laos',
    'Vietnam'
]*/

// 2. Copying Arrays
//Copy an array using the spread operator.Store the copied array in another variable.

let asianCountries2 = ["Kambodia", "Laos", "Vietnam"];
let copyOfAsianCounties2 = [...asianCountries2];
console.log(copyOfAsianCounties2);

//3. Find the Largest...
//Create a function to find the largest number in an array.

arr = [5, 7, 8, 9, 3, 2, 5];

function largest(arr) {
  return Math.max(...arr);
}

console.log(largest(arr));

//4. Find the Smallest
//Create a function to find the smallest number in an array.

function smallest(arr) {
  return Math.min(...arr);
}

console.log(smallest(arr));

/* 5. Clone and Merge
Given two objects:
const person = { name: "John" };
const job = { role: "Teacher" };
*/

const person = { name: "John" };
const job = { role: "Teacher" };

//5.1 Clone the person object.
const clonePerson = { ...person };
console.log(clonePerson);

// 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.

let employee = { ...person, ...job };
console.log(employee); // { name: 'John', role: 'Teacher' }

// 5.3 Then change the values of the properties in the employee object.

employee = { name: "Jack", role: "astronaut" };
console.log(employee); // { name: 'Jack', role: 'astronaut' }

//------------------------------

// BONUS

/**Bonus: 
 * 6. Is the average a whole number?
Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.

Examples
isWhole(1, 2, 3, 4) ➞ false
isWhole(9, 2, 2, 5) ➞ false
Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result! */

function wholeNumber(arr) {
  for (let item of arr) {
    if (Number.isInteger((item += item) / arr.length)) {
      return true;
    } else {
      return false;
    }
  }
}

arr2 = [1, 2, 3, 4];
arr3 = [9, 2, 2, 5];
arr4 = [4, 4];
console.log(wholeNumber(arr3));
console.log(wholeNumber(arr2));
console.log(wholeNumber(arr4));
