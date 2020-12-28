// let js = "amazing";
// if (js === "amazing") alert("hello world");

// const unchangeable = "unchangeable variable";
// let changeable = "changeable variable";

// console.log(unchangeable);
// console.log("Javascript uses camelCase but variables cannot be declared with a number as the initial character");
// console.log("Keep you variable names descriptive to meet convention and make life easier");

// let country = "UK";
// let continent = "Europe";
// let population = "65 million";

// console.log(country);
// console.log(continent);
// console.log(population);

// const isIsland = true;
// const language = "English";

// console.log(isIsland, population, country, language);


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

// let markWeight = 78
// let johnWeight = 92
// let markHeight = 1.69
// let johnHeight = 1.95

// let markBMI = markWeight / markHeight ** 2
// let johnBMI = johnWeight / johnHeight ** 2
// let markHigherBMI = markBMI > johnBMI

// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

let dolphinAv = (96 + 108 + 89) / 3
let koalaAv = (88 + 91 + 110) / 3
console.log(dolphinAv, koalaAv)

if (dolphinAv > koalaAv) {
  console.log("Dolphins win");
} else if (dolphinAv < koalaAv) {
  console.log("Koalas win");
} else if {
  console.log("tie");
};

if ((dolphinAv || koalaAv) > 100) {
  if (dolphinAv > koalaAv) {
    console.log("Dolphins win");
  } else if (dolphinAv < koalaAv) {
    console.log("Koalas win");
  } else {
    console.log("tie");
  };
} else {
  console.log("you guys need to score more");
};