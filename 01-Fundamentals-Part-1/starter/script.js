let js = "amazing";
if (js === "amazing") alert("hello world");

const unchangeable = "unchangeable variable";
let changeable = "changeable variable";

console.log(unchangeable);
console.log("Javascript uses camelCase but variables cannot be declared with a number as the initial character");
console.log("Keep you variable names descriptive to meet convention and make life easier");

let country = "UK";
let continent = "Europe";
let population = "65 million";

console.log(country);
console.log(continent);
console.log(population);

const isIsland = true;
const language = "English";

console.log(isIsland, population, country, language);


// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// Your tasks:

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

let markWeight = 78
let johnWeight = 92
let markHeight = 1.69
let johnHeight = 1.95

let markBMI = markWeight / markHeight ** 2
let johnBMI = johnWeight / johnHeight ** 2
let markHigherBMI = markBMI > johnBMI
