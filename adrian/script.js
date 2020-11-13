//1
const euroCountries = ["Spain", "Germany"];
const asiaCountries = ["Vietnam", "Japan"];
const euroAsiaticCountries = euroCountries.concat(asiaCountries);

//2
const euroAsiaticCountries1 = [...asiaCountries, ...euroCountries];

//3
function findLargest(array) {
  // return Math.max(...array)
  return array.reduce((acc, curr) => {
    if (curr > acc) acc = curr;
    else curr = acc;
    return acc;
  }, 0);
}

//4
function findSmallest(array) {
  let smallest = array[0];
  array.forEach((num) => {
    if (num < smallest) smallest = num;
  });
  return smallest;
}

//5
const person = { name: "John" };
const job = { role: "Teacher" };
//5.1
const clonedPerson = { ...person };
const clonedPerson1 = Object.assign({}, person);
//5.2
const employee = Object.assign({}, job, person);
const employee1 = { ...person, ...job };
//5.3
employee.name = "bob";
employee.role = "Swimmer";

//6
function isWhole(...args) {
  let denominator = args.length;
  let sum = args.reduce((acc, curr) => acc + curr);
  return Number.isInteger(sum / denominator);
}
console.log(isWhole(1, 2, 3, 4));
