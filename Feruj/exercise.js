// 1. Combining Arrays 

const euroCountries =['Ger','Fra','Bel']
const asianCountries = ['Ban','Ind','Pak']
const newEuroCountries = [...euroCountries,...asianCountries]

console.log(newEuroCountries);
//[ 'Ger', 'Fra', 'Bel', 'Ban', 'Ind', 'Pak' ]
const euroCountries2 =['Grece','cyp','swe']
const asianCountries2 = ['nep','sri','myn']
const newEuroCountries2 = [euroCountries2,asianCountries2]
console.log(newEuroCountries2);
//[ [ 'Grece', 'cyp', 'swe' ], [ 'nep', 'sri', 'myn' ] ]

//2. Copying Arrays
const array = ['Ban','Ind','Pak','Grece','cyp','swe']
const coppyArray = [...array]
console.log(coppyArray);

//3. Find the Largest... 
const array1 = [46,58,20,17,35,31,31,97,17,26,14]
const largest = num=>Math.max(...array1)
console.log(largest(array1));

//4. Find the Smallest
const smallest = num=>Math.min(...array1)
console.log(smallest(array1));

//5. Clone and Merge
const person = {name: "John"}
const job = {role: "Teacher"}

const personObject = { ...person };
console.log(personObject);
const employee = { ...person, ...job };
console.log(employee);
let { name, role } = employee;
name = "Feruj";
role = "Business";

console.log(`Name is ${name}, and Role ${role}`);

// Bonus: 6.  Is the average a whole number?

function wholeNumCheck(a,b,c,d) {
    let avgNum = (a+b+c+d)/4
    if (Number.isInteger(avgNum)){
        return true
    }else{
        return false
    }
}
console.log(wholeNumCheck(1, 2, 3, 4));//false
console.log(wholeNumCheck(9, 2, 2, 5));//false
console.log(wholeNumCheck(1,2,3,2));// true


