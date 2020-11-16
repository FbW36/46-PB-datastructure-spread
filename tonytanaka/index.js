// 1
const euroCountries = ['Germany', 'Belgium', 'Turkey']
const asianCountries = ['Japan', 'China', 'Malaysia']

const allCountries = [...euroCountries, ...asianCountries]
console.log('allCountries ==>', allCountries)
// allCountries ==> [ 'Germany', 'Belgium', 'Turkey', 'Japan', 'China', 'Malaysia' ]

const letters = ['a', 'b', 'c']
const numbers = [1, 2, 3]
const letNum = [...letters, ...numbers]
console.log('letNum ==>', letNum)

// 2
let countriesToVisit = [...euroCountries]
console.log('CountriesToVisit ==>', euroCountries)

// 3
const arrayOfNumbers = [1,5,75,32,21,56,97,43,67]
let largest = Math.max(...arrayOfNumbers)
console.log('largest number is ==>', largest)

// 4
let smallest = Math.min(...arrayOfNumbers)
console.log('smallest number is ==>', smallest)

// 5
const person = { name: "John" };
const job = { role: "Teacher" };

const clonePerson = {...person}
console.log('clonePerson ==>', clonePerson)

const employee = {...person, ...job}
console.log('employee ==>', employee)

employee.name = 'Barack'
employee.role = 'ex-president'
console.log('employee ==>', employee)

// 6
function isWhole (x1, x2, x3, x4) {
return (((x1 + x2 + x3 + x4) / 4 ) % 1 === 0)
}
console.log(isWhole(1, 2, 3 ,4)) // false
console.log(isWhole(9, 2, 2 ,5)) // false
console.log(isWhole(7, 2, 3 ,4)) // true

console.log(isWhole([7, 2, 3 ,4])) // the first element is the array and the others are undefined
