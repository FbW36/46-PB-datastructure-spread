// 46-PB-datastructure-spread
// Spread the Word
// 1. Combining Arrays

//     Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.

const euroCountries = ['Spain','France','Germany']
const asianCountries = ['Japan','China','India']
euroCountries.push(...asianCountries)//Add asianCountries items to the end of euroCountries. 
console.log(euroCountries)//[ 'Spain', 'France', 'Germany', 'Japan', 'China', 'India' ]

//     Once again create two arrays. Save all elements of both arrays to another variable.
const euroCountries2 = ['Spain','France','Germany']
const asianCountries2 = ['Japan','China','India']
const mergeCountries = [...euroCountries2, ...asianCountries2]
console.log(mergeCountries)

// 2. Copying Arrays
//     Copy an array using the spread operator. Store the copied array in another variable.
const colors1 = ['red', 'green','blue']
const colors2 = ['lila', 'yellow', 'brown']
const primAndSec = [...colors1, ...colors2]
console.log("copying arrays => ", primAndSec)

// 3. Find the Largest...
// Create a function to find the largest number in an array.
const numMax = [4,5,21,3];
console.log("Largest Number => ", Math.max.apply(null, numMax))

// 4. Find the Smallest
// Create a function to find the smallest number in an array.
const numMin = [4,5,21,3];
console.log("Smallest number => ", Math.min.apply(null, numMin))

// 5. Clone and Merge
// Given two objects:
const person = {name: "John"}
const job = {role: "Teacher"}
// 5.1 Clone the person object.
let { person1} = person
console.log(person)
//2. 
let person2 = person.name
console.log(`name: ${person2}`)
// 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.
const employee = {...person, ...job }
console.log(employee)
// 5.3 Then change the values of the properties in the employee object.
const employee1 = {person: 'lila',job: 'student', oldName: person.name}
console.log(employee1)

// Bonus: 6. Is the average a whole number?
// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not.
//     Examples
//     isWhole(1, 2, 3, 4) ➞ false
//     isWhole(9, 2, 2, 5) ➞ false
//     Once you have created a function, pass in an array as an argument which contains four elements - check if this method still outputs the correct result!
const isWhole = [1, 2, 3, 4];
const isWholeOrNot = (eval(isWhole.join('+'))/isWhole.length)
if(typeof isWholeOrNot === Number) {
    console.log(true)
}else{
    console.log(false)
}
//      isWhole(1, 2, 3, 4) ➞ false Yep
//     isWhole(9, 2, 2, 5) ➞ false Yep 