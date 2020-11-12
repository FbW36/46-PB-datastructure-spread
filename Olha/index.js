//* 1. Combining Arrays
// Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.
const euroCountries = ['Germany', 'Belgium', 'Italy', 'Portugal', 'Hubgary', 'Slovakia', 'Ukraine'];
const asianCountries = ['China', 'Vietnam', 'Japan', 'Philippines', 'Mongolia', 'Russia', 'Tajikistan'];

console.log([...euroCountries, ...asianCountries]);

// Once again create two arrays. Save all elements of both arrays to another variable.
const numbersOneToFive = [1, 2, 3, 4, 5];
const numbersSixToTen = [6, 7, 8, 9, 10];

const numbersOneToTen = [...numbersOneToFive, ...numbersSixToTen];

console.log(numbersOneToTen);

//* 2. Copying Arrays
// Copy an array using the spread operator. Store the copied array in another variable.

const original = ['spread', 'operator', 'is', 'fun'];
const copy = [...original];
console.log(original, copy); // [ 'spread', 'operator', 'is', 'fun' ] [ 'spread', 'operator', 'is', 'fun' ]

copy.splice(3, 1, 'useful');
console.log(original, copy); // [ 'spread', 'operator', 'is', 'fun' ] [ 'spread', 'operator', 'is', 'useful' ]

//* 3. Find the Largest...
// Create a function to find the largest number in an array.

const numArray = [34, 67, 325, 1, 9];

const findLargestNumber = arr => {
	return Math.max(...arr);
}

const largestNumber = findLargestNumber(numArray);
console.log(largestNumber); // 325

//* 4. Find the Smallest
// Create a function to find the smallest number in an array.

// the same array as above

const findSmallestNumber = arr => {
	return Math.min(...arr);
}

const smallestNumber = findSmallestNumber(numArray);
console.log(smallestNumber); // 1

//* 5. Clone and Merge
// Given two objects:
const person = { name: "John" };
const job = { role: "Teacher" };

//? 5.1 Clone the person object.

const personClone = {...person};

console.log(personClone); // { name: 'John' }

//? 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.

const employee = {...person, ...job};

console.log(employee); // { name: 'John', role: 'Teacher' }

//? 5.3 Then change the values of the properties in the employee object.

employee.name = 'Mark';
employee.role = 'Web developer';

console.log(employee); // { name: 'Mark', role: 'Web developer' }


//* Bonus: 6. Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.

const isWhole = (num1, num2, num3, num4) => {
	console.log(num1, num2, num3, num4);
	return Number.isInteger((num1 + num2 + num3 + num4) / 4);
}

console.log(isWhole(1, 2, 3, 4)); // ➞ false
console.log(isWhole(9, 2, 2, 5)); // ➞ false
console.log(isWhole(9, 6, 3, 6)); // ➞ true

// Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!

console.log(isWhole([9, 6, 3, 6])); // false => because there is only 1 argument passed, which is an array. the 3 missing args are defaulted to undefined. the average of one array and 3 undefined is not an integer :)
console.log(isWhole(...[9, 6, 3, 6])); // true => now it's working!
