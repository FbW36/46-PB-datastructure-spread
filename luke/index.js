// #### 1. Combining Arrays
const euroCountries = ["England", "Italy"];
const asianCountries = ["Japan", "China"];

euroCountries.push(...asianCountries);
console.log(euroCountries);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

// #### 2. Copying Arrays
const arrToCopy = ["array", "to", "copy"];
const copiedArr = [...arrToCopy];
console.log(copiedArr);

// #### 3. Find the Largest...
function findTheLargest(arr) {
  let largest = undefined;
  arr.map((num) => {
    if (largest === undefined) {
      largest = num;
    } else if (num > largest) {
      largest = num;
    }
  });
  return largest;
}
console.log(findTheLargest([1, 2, 55, 99, 6]));

// #### 4. Find the Smallest
function findTheSmallest(arr) {
  let smallest = undefined;
  arr.map((num) => {
    if (smallest === undefined) {
      smallest = num;
    } else if (num < smallest) {
      smallest = num;
    }
  });
  return smallest;
}
console.log(findTheSmallest([1, -2, 55, 99, 6]));

// #### 5. Clone and Merge
const person = { name: "John" };
const job = { role: "Teacher" };

const clonePerson = person;
console.log(clonePerson);

const employee = {
  ...person,
  ...job,
};
console.log(employee);

employee["name"] = "Mary";
employee["role"] = "Head Teacher";
console.log(employee);

// #### Bonus: 6.  Is the average a whole number ?
function isAverageWholeNum(num1, num2, num3, num4) {
  let sumOfNums = (num1 + num2 + num3 + num4) / 4;
  if (sumOfNums.toString().includes(".")) {
    return false;
  } else {
    return true;
  }
}
console.log(isAverageWholeNum(4, 4, 4, 5)); // false
console.log(isAverageWholeNum([4, 4, 4, 4], 4, 2, 3)); // it doesnt work with an array because the arr counts as NaN, it will still output true because of my condition
