//1
const euroCountries = ["Portugal", "Italy", "Spain"];
const asianCountries = ["Tailand", "Vietnam", "Tibet"];
const allCities = [...euroCountries, ...asianCountries]
console.log("1b==>", allCities);
euroCountries.push(...asianCountries);
console.log("1a==>",euroCountries);

//2
const initialArray = [1,2,3,4];
initialArray.push(5)
const copiedArray = [...initialArray];

console.log("2==>",initialArray, copiedArray);

//3
function findLargest(array){
    const max = Math.max(...array);
    return max;
}

console.log("3==>",findLargest([1,4,3,2,6]));

//4
function findSmallest(array){
    const min = Math.min(...array);
    return min;
}

console.log("4==>",findSmallest([6,4,3,1,2]));

//5
const person = {name: "John"};
const job = {role: "Teacher"};

const personClone = {...person};
const employee = {...person, ...job};
employee.role="Nurse";
console.log("5==>",employee);

//Bonus 6
function isWhole(){
    let argumentsArray = Object.values(arguments);
    const sum = argumentsArray.reduce((acc,curr)=>acc+curr);
    let average = sum / argumentsArray.length;
    return average%1===0?true:false;
}
let array=[2,2]
console.log(isWhole(...array));