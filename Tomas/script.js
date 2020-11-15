let log = console.log;
// 1. Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries
const euroCountries = ['Germany','Greece','Italy']
const asianCountries = ['Pakistan','Iran','Japan']
euroCountries.push(...asianCountries)
log('euroCountries -->', euroCountries)
// Once again create two arrays. Save all elements of both arrays to another variable

// using for..of
const nums1 = [1,2,'three']
const nums2 = [4,5,6]
function allElements(arrays) {
    const elements = []
    for(i of arguments) {
        for(j of i) {
            elements.push(j)
        }
    }
    return elements
} 
log('allElements -->', allElements(nums1,nums2))
// using spread operator
const allElements2 = [...nums1,...nums2]
log('allElements2 -->', allElements2)

// 2. Copy an array using the spread operator. Store the copied array in another variable
const arr1 = [...asianCountries]
log('cloned array -->', arr1)

// 3. Create a function to find the largest number in an array

// using sort()
const getLargestNum = (arr) => {
    arr.sort((a,b) => a-b)
    return arr[arr.length-1]
}
log('getLargestNum -->', getLargestNum([3,22,66,7,3]))
// using spread operator
const getLargestNum2 = (arr) => {
    return Math.max(...arr)
}
log('getLargestNum2 -->' ,getLargestNum2([3,22,6,7,3]))

// 4. Create a function to find the smallest number in an array
const getSmallestNum = (arr) => {
    return Math.min(...arr);
}
log('getSmallestNum -->', getSmallestNum([3,22,1,6,7,4]))
// 5.
const person = {name: "John"}
const job = {role: "Teacher"}
// 5.1 Clone the person object.
const personClone = {...person}
log('personClone -->', personClone)
// 5.2 Merge these two objects into one object: "employee". Use the spread operator to do so.
const employee = {...person,...job}
log('employee -->', employee)
// 5.3 Then change the values of the properties in the employee object.
employee.name = 'Bob'
employee.role = 'Talking head'
log('changed employee -->', employee)

// Create a function that takes 4 integers as parameters and returns true or false depending on whether the average of all the arguments is a whole number or not
function isWhole() {
    sum = 0
    for(i of arguments) {
        sum += i;
    }
    return (sum / arguments.length) % 1 === 0
}
log(isWhole(2,2,2,2)) // true
log(isWhole([2,2,2,2])) // wrong output (false)
log(isWhole(...[2,2,2,2])) // correct output (true)