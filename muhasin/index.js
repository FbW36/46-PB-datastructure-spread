// 1.  Combining Arrays
// Create two arrays. e.g. euroCountries and asianCountries. Add asianCountries items to the end of euroCountries array.
//Once again create two arrays. Save all elements of both arrays to another variable.

const euroCountries = ["Germany","Nederlanden","Austria","Belgium","France", "Italy"];
const asianCountries = ["China","India","Singapore","Japan","Bangladesh","Korea","Vietnam"]

const addAsianCountriesWithEuroCountries = euroCountries.concat(asianCountries)
console.log("addAsianCountriesWithEuroCountries ==>", addAsianCountriesWithEuroCountries);

const addAsianCountriesWithEuroCountries2 = [...euroCountries,...asianCountries]

// 2. . Copying Arrays
// Copy an array using the spread operator. Store the copied array in another variable.

const names = ["Alex","Tommy","Jon"]
const copyNames = [...names]

console.log("copyNames ==>", copyNames);

const newNames = copyNames;
console.log("newNames ==>", newNames);

// 3. Find the Largest
// Create a function to find the largest number in an array.

numArr = [3,8,9,6,2,5];

const largestNumber = numbers => Math.max(...numbers);

console.log("largestNumber ==>",largestNumber(numArr)); // 9

// 4. Find the Smallest 
// Create a function to find the smallest number in an array.
numArr2 = [3,8,9,6,2,5];

const smallestNumber = numbers => Math.min(...numbers);

console.log("smallestNumber ==>",smallestNumber(numArr2)); // 2

// Clone and Merge 
const person = {name: "John"}
const job = {role: "Teacher"}

const personClone = {...person}

const employee = {...person,...job}

employee.name = "Muhasin";
employee.role = "Developer"

console.log("employee ==>", employee);

// 6. Is the average a whole number?

function isWhole(num1, num2,num3,num4){
    let average = (num1 + num2 + num3+ num4)/4;
   if(Number.isFinite(average)){
       return true;
   }else{
       return false;
   }
}

console.log(isWhole(1,2,3,4));
console.log(isWhole(9,2,2,5));


console.log(isWhole([9,2,2,5]));

