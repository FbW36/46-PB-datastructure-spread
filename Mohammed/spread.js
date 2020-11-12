
// 1. Combining Arrays


// Creating two arrays (euroCountries and asianCountries)
let euroCountries = ['Germany', 'France', 'British', 'Sweden', 'Turkish'];
let asianCountries = ['India', 'Yemen', 'China', 'Iraq', 'Japan'];

// Add asianCountries items to the end of euroCountries array
euroCountries.push(...asianCountries);
console.log(euroCountries, typeof euroCountries);

// =======================================================

// create two arrays (of our choice)
let firstArr = ['one', 'two', 'three'];
let secondArr = [1, 2, 3, 4, 5];

// Save all elements of both arrays to another variable
let anotherVar = firstArr.concat(secondArr);
console.log(anotherVar, typeof anotherVar);

//=======================================================

// 2. Copying Arrays

let originalArr = ['cat', 'dog', 'rat'];

// Copy an array using the spread operator
let copyArr = [...originalArr];

console.log(copyArr);

// Store the copied array in another variable
another_var = copyArr;
console.log(another_var);

// ===============================================

// 3. Find the largest

// Create a function to find the largest number in an array
numArr = [1,2,4,7,0, 90];

const maxNoFinder = numbers => Math.max(...numbers);

console.log(maxNoFinder(numArr));

//====================================================

// 4. Find the smallest

// Create a function to find the smallest number in an array
const minNoFinder = numbers => Math.min(...numbers);

console.log(minNoFinder(numArr));

// ==============================================

// 5. Clone and Merge

const person = {name: 'John'};

const job = {role: 'Teacher'};

// 5.1 Clone the person object
const clonedPerson = {...person};
console.log(clonedPerson);

// 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.
const employee = {...person, ...job};
console.log(employee);

// 5.3 Change the values of the properties in the employee object
let {name, role} = employee;
name = 'Alex';
role = 'Director';

console.log(name, role);
console.log(employee);
console.log(person.name, person.role);

// ======================================================

// #### Bonus: 6. Is the average a whole number?

function isWholeNumber(...theArgs)
{
    const sum = theArgs.reduce((previous, current) => 
    {
        return previous + current;
    });

    return (sum/theArgs.length) - Math.floor(sum/theArgs.length) === 0;
}

console.log(`isWholeNumber(1, 2, 3, 4) ==> ${isWholeNumber(1, 2, 3, 4)}` );
console.log(`isWholeNumber(9, 2, 2 ,5) ==> ${isWholeNumber(9, 2, 2, 5)}` );
console.log(`isWholeNumber(5, 2, 7, 10) ==> ${isWholeNumber(5, 2, 7, 10)}` );