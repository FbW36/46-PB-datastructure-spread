// 1 Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.

let euroCountries = ["Germany", "Italy"];
let asianCountries = ["Japan", "India"];

// euroCountries += [, ...asianCountries]; Germany,Italy,Japan,India
euroCountries.push(...asianCountries);
console.log("euroCountries=", euroCountries);

//Once again create two arrays. Save all elements of both arrays to another variable.
let newCountries = ["Bosnia", "Hungary"];
let newCountries2 = ["Brazil", "Poland"];

let neweuroAsianCountries = [...newCountries, ...newCountries2];
console.log("neweuroAsianCountries=", neweuroAsianCountries);

// 2 copying arrays
let copiedArrayOfnewcountries = [...newCountries];
console.log(copiedArrayOfnewcountries);

// 3 Once again create two arrays. Save all elements of both arrays to another variable.
let givenNumbers = [10, 20, 100];
function findLargestnum(gnum) {
  return Math.max(...gnum);
}

console.log(findLargestnum(givenNumbers));

// 4 Create a function to find the smallest number in an array.
let givenNumbers2 = [10, 20, 100];
function findLargestnum2(gnum) {
  return Math.min(...gnum);
}

console.log(findLargestnum2(givenNumbers2));

// 5
const person = { name: "John" };
const job = { role: "Teacher" };

//5.1 clone
let { name } = person;
name = "Murali";
console.log("clone=", { name });

// 5.2 Merge
let employee = { ...person, ...job };
console.log("employee=", employee);

// 5.3 change the value of employee object

let { name2, role } = employee;
name2 = "Suda";
role = "Doctor";
console.log("changed value of employee = ", { name2, role });

// 6: Is the average a whole number?

function isWholenum(num1, num2, num3, num4) {
  avarageOfnums = (num1 + num2 + num3 + num4) / 4;

  if (avarageOfnums.toString().includes(".")) {
    return false;
  } else {
    return true;
  }
}

console.log(isWholenum(1, 2, 3, 4)); // 2.5 = false
console.log(isWholenum(2, 2, 2, 2)); // 2 = true
