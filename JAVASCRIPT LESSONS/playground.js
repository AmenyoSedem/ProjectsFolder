// function calculateFoodExpenses(food, tip){
//     tipPercentage = tip / 100
//     tipAmount = food * tipPercentage
//     total = sum(food, tipAmount)
//     return total
// }

// console.log(Math.floor(Math.random() * 3))

/* LESSON_2 (THIS IS A BABY WEATHER APP)
NOTE: This is a program on conditional operators and if statements

let weather = prompt('What is the weather: ')

if (weather == 'rainy') {
    console.log('Grab your umbrella')
} else {
    console.log('Wear your sunglasses')
}
*/

// Functions
// This is a function called 'sayMyName'
// and it has 0 arguments
// does: it logs out your name to the console or browser
function sayMyName() {
  console.log("Sedem");
}

// This is a function called 'sayMyName2'
// and it has 1 argument called = 'name'
// it logs out your name to the console or the browser
function sayMyName2(name) {
  console.log(name);
}

// sayMyName('Sedem')

function greetings(name) {
  console.log(`Hi ${name} Nice to meet you!!!`);
}

// greetings('Stanley')

function sum(a, b) {
  // The return statement makes the function reusable
  return a + b;
}

// num1 = sum(1, 2)
// console.log(num1)

// This is an arrow function with an explicit return
const sumArrow = (a, b) => {
  return a + b;
};

// This is an arrow function with an inplicit return
const sumArrow2 = (a, b) => a + b;

// console.log(sumArrow2(18, 50))

function calculateFoodExpenses(food, tip) {
  let tipPercentage = tip / 100;
  let tipAmount = food * tipPercentage;
  let total = sumArrow(food, tipAmount);
  return total;
}

// buyer = calculateFoodExpenses(10, 20)
// console.log(`The total is $${buyer}`)

// Arrays
const groceries = ["banana", "apple", "orange", "pear"];
// console.log(groceries)
// grab the 3rd index which is actually = 'pear
// console.log(groceries[3])

groceries.push("Blue berries");

// console.log(groceries)
// console.log(groceries.slice(2, 4))

groceries.push("Mango");
// console.log(groceries)

// console.log(groceries.slice(1, 4))

// console.log(groceries.indexOf('banana'))

// Objects
const person = {
  name: "Fucker",
  shirt: "White",
  age: 50,
};

// console.log(person)
// console.log(person.name)
// console.log(person.shirt)
// console.log(person['age'])

// person.phone = '+23359714750'
// console.log(person.phone)
// console.log(person)

// person2 object
const person2 = {
  name: "Qazi",
  shirt: "Black",
};

// console.log(person2)
// console.log(person2.name)
// console.log(person2.shirt)

// person2.age = 28
// console.log(person2.age)
// console.log(person2)

const introducer = (name, shirtColor, assets, liabilities) => {
  const person = {
    name: name,
    shirtColor: shirtColor,
    assets: assets,
    liabilities: liabilities,
    netWorth: function () {
      return this.assets - this.liabilities;
    },
  };

  const intro = `Hello!!! My name is ${
    person.name
  } and the color of my shirt is ${
    person.shirtColor
  } and my net worth is $${person.netWorth()}`;

  return intro;
};

// console.log(introducer('Qazi', 'black', 100000, 500))
// console.log(introducer('Leonardo', 'white'))

// Loops
// const fruits = ['banana', 'apple', 'orange', 'pear']
// for (let i=0;
//     i < fruits.length;
//     i += 1
//     ){
//         console.log(i, fruits[i])
//     }

// Modern world format of writing for loops
// for (const fruit of fruits) {
//     console.log(fruit)
// }

const double = (numbers) => {
  let result = [];
  for (const number of numbers) {
    result.push(number ** 2);
  }
  return result;
};

// console.log(double([1,2,3,4,5]))

// This a letter counter, that get the length of a phrase and outputs it
const letterCounter = (phrase) => {
  let result = 0;

  for (const index in phrase) {
    result = Number(index) + 1;
  }

  return { result: result };
};

// const phrase = prompt('Enter you phrase')

// console.log(letterCounter(phrase))

// sum up all numbers in an array
const sumArray = (numbers) => {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }

  return { result };
};

// numbers = [1,2,3,4,5,6]
// console.log(sumArray(numbers))

const max = (numbers) => {
  let result = numbers[0];

  for (const number of numbers) {
    if (number > result) {
      result = number;
    }
  }

  return { result };
};

// numbers = [1,2,3,4]
// console.log(max(numbers))

const letterFrequency = (phrase) => {
  // make a `frequency` object {}
  let frequency = {};
  for (const letter of phrase) {
    //check if letter exists in frequency
    if (letter in frequency) {
      // increment the value by +1
      frequency[letter]++;
      // otherwise, set the value to 1
    } else {
      frequency[letter] = 1;
    }
  }

  return frequency;
};

// console.log(letterFrequency('lol, what are you doing later tonight lol, haha'))

// incremental operators
// ++, --, +=

// word
const wordFrequency = (phrase) => {
  words = phrase.split(" ");
  return letterFrequency(words);
};

// phrase = prompt('Enter your phrase')
// console.log(wordFrequency(phrase))

// This is a function that takes the number of hours and convert it into minutes
function howManyMinutes(hours) {
  minutes = Math.ceil(hours / 0.0166666666666667);
  return { minutes };
}

// console.log(howManyMinutes(2))

// This is a program that takes the number of months and convert it into days
const daysInMonth = (month) => {
  const days = Math.ceil(month / 0.0333333333333333);
  return days;
};

// console.log(daysInMonth(1))

// The 50-30-20 strategy is a simple way to budget
// which involves spending 50% of after-tax income on needs,
// 30% after tax income on wants,
// 20% after-tax income on savings or paying off debt.
// This is a function that outputs and segment income into the 50-30-20 saving strategy
const savingsStrategy = (income) => {
  let output = {};
  const needs = income / 2;
  const wants = Math.floor(income / 3.333333333333333);
  const savings = income / 5;

  return (output = { needs, wants, savings });
};

// console.log(savingsStrategy(500))

// HIGHER ORDER FUNCTIONS
// map - it loops and return an array
// filler - it loops and  return an array with matching conditions
// reduce

// MAP
let result = [1, 2, 3, 4].map((number) => number * 2);
// console.log(result)

// map version of the previously created double function
const doubleMap = (numbers) => {
  return numbers.map((number) => number * 2);
};

// console.log(doubleMap([1,2,3,4]))

// FILTER
const filter = (numbers, greaterThan) => {
  return numbers.filter((number) => number > greaterThan);
};

// console.log(filter([1,2,3,4,5,6], 2))

nums = [1, 2, 3, 4, 5, 6];
// console.log(nums.filter(num => num < 2 || num > 4))
// console.log(nums.filter(num => num < 2 && num > 4))
// console.log(nums.filter(num => num < 6 && num > 2))
// console.log(nums.filter(num =>  num > 3))

// Filtering based on actors' networth
const actors = [
  { name: "johnny", networth: 2000000 },
  { name: "amber", networth: 100 },
  { name: "leonardo", networth: 800000000 },
];

// console.log(actors.reduce((prev, curr) => prev + curr.networth, 0))
// console.log(actors.filter(actor => actor.networth > 10))

// REDUCE
// SUM: Think reduce
// reduce takes a function as an argument
// reduce loops and gives you back the accumulator

const numsOfReduce = [1, 2, 3];
const resultOfReduce = numsOfReduce.reduce((prev, curr) => prev + curr);

// console.log(resultOfReduce)

// DOM MANIPULATION LESSONS: How to edit the HTML tags in the javascript file and more other stuffs

// let titleDiv = document.getElementById('title')

// console.log('before: ',titleDiv.innerText)

// let message = 'Goodbye my lover!'
// titleDiv.innerText = message;

// console.log('after: ', titleDiv.innerText)

// titleDiv.innerHTML = `<p>${message}</p>`

// titleDiv.style.backgroundColor = 'azure'

// select a random element from an array
const randomFruit = (fruits) => {
  const randomNumber = Math.floor(Math.random() * fruits.length);

  return fruits[randomNumber];
};

// fruits = ['🍌' , '🍎' , '🍊' , '🍐']

// console.log(randomFruit(fruits))

// if else if else
// rainy (1), sunny (-1), overcast (0)
const weatherScorer = (weather, weather2) => {
  if (weather == "rainy") {
    score = 3;
  } else if (weather == "rainy" && weather2 == "overcast") {
    score = 4;
  } else if (weather == "rainy" && weather2 == "sunny") {
    score = 2;
  } else if (weather == "sunny") {
    score = 0;
  } else if (weather == "sunny" && weather2 == "overcast") {
    score = 1;
  } else {
    score = 1;
  }

  return score;
};

// console.log(weatherScorer('rainy','sunny'))

// DOG API
// https://dog.ceo/api/breeds/image/random
