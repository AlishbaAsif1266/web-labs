//pdf 1
console.log(4 + 3 * 4 / 2);
console.log((13 % 5) ** 2);

//let
let year = 1985;
let hens = 4;
let roosters = 2;
console.log(hens + roosters);

hens - 1; //3
console.log(hens); //still 4
hens = hens-1;
console.log(hens);

let totalScore = 199;
console.log(totalScore + 1);

let bankBalance = 100;
bankBalance += 200;
bankBalance --;
console.log(bankBalance);

//boolean
let isLoggedIn = true;
let gameOver = false;
const isWaterWet = true;
let numPuppies = 23;
numPuppies = false;
numPuppies =100;
//typeOf
console.log(typeof(isWaterWet));
console.log(typeof(numPuppies));

//string
let firstname = "Alishba";
let secondName = "Asif";
let msg = `i am a CS student`;
console.log(firstname + secondName);
console.log(msg);
//upper and lower cases
let upprName = firstname.toUpperCase();
console.log(upprName);
let lowername = secondName.toLowerCase();
console.log(lowername);

//trim
let msg2 = `  leave me alone plzzzzz   `;
console.log(msg2.trim());

//indexOf
let tvShow = `catdog`;
console.log(tvShow.indexOf(`cat`));
console.log(tvShow.indexOf(`dog`));
console.log(tvShow.indexOf('z'));

let yell = 'GO AWAY!!';
let index = yell.indexOf('!');
console.log(index);

//Slice
let str = 'thygvjbckhucjnmtuyfjv';
console.log(str.slice(0,5));
console.log(str.slice(5));

//replace
let funny = `meeral so funny! hahaha`;
console.log(funny.replace('hahaha', 'hehehe'));

const age = "5" + "5";
console.log(age);

console.log("pecan"[7]);
console.log("POP"[3]);

let userInput = "ALISHBA@gmail.com";
let cleanedInput = userInput.trim().toLowerCase();
console.log(cleanedInput);

console.log(`I could ${4 + 3} sheep`);

let item = `cucumbers`;
let price = 1.99;
let quantity = 4;
console.log(`You bought ${quantity} ${item},total price: $${price*quantity}`);

//Null
let loggedInUser = null;
loggedInUser = `Meeral`;
console.log(loggedInUser);

//undefined
let pickles;
pickles;
pickles = 'are you hungry';
let food = 'tacos';
console.log(food[7]);

//math object
console.log(Math.PI);
console.log(Math.round(4.9));
console.log(Math.abs(-456));
console.log(Math.abs(2,5));
console.log(Math.pow(2,5));
console.log(Math.floor(3.9999));

//random numbers 
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

//random integers
const step1 = Math.random();
console.log(step1);
const step2 = step1 * 10;
console.log(step2);
const step3 = Math.floor(step2);
console.log(step3);
const step4 = step3 +1;
console.log(step4);
console.log(Math.floor(Math.random()*10)+1);

//parseInt & parseFloat
console.log(parseInt('24'));
console.log(parseInt('24.987'));
console.log(parseInt('28dayslater'));
console.log(parseFloat('24.987'));
console.log(parseFloat('7'));
console.log(parseFloat('i ate 3 apples'));

//Comparisons
console.log(10 > 1);
console.log(0.2 > 0.3);
console.log(-10 < 0);
console.log(50.0 < 5);
console.log(0.5 <= 0.5);
console.log(99 >= 4);
console.log(99 >= 99);
console.log('a' < 'b');
console.log('A' > 'a');

// Double equal
console.log(5 == 5);
console.log('b' == 'c');
console.log(7 == '7');
console.log(0 == ' ');
console.log(true == false);
console.log(0 == false);
console.log(0 == undefined);

//Triple Equal
console.log(5 == 5);
console.log(1 == 2);
console.log(2 == '2');
console.log(false == 0);
console.log(10 != '10');
console.log(10 !== '10');

//If Statements
let rating = 3;
if(rating === 3){
    console.log("YOU ARE A SUPERSTAR");
}

//ELSE IF
let rate =2;
if(rate === 3){
    console.log("YOU ARE A SUPERSTAR");
}
else if (rate === 2){
    console.log("MEETS EXPECTATIONS");
}

//ELSE IF
let rates = 1;
if(rates === 3){
    console.log("YOU ARE A SUPERSTAR");
}
else if (rates === 2){
    console.log("MEETS EXPECTATIONS");
}
else if (rates === 1){
    console.log("NEEDS IMPROMENT");
}

//ELSE 
let num = -99;
if(num === 3){
    console.log("YOU ARE A SUPERSTAR");
}
else if (num === 2){
    console.log("MEETS EXPECTATIONS");
}
else if (num === 1){
    console.log("NEEDS IMPROMENT");
}
else {
    console.log("INVALID NUMBERS");
}

//NESTING
let password = "cat dog";
if (password.length >= 6) {
    if (password.indexOf('') !== -1) {
    console.log("Password cannot include spaces");
    }
else {
    console.log("Valid password!!");
    }
}
else {
    console.log("Password too short!");
}

//Logical Operators
console.log(1 <= 4 && 'a' === 'a');
console.log(9 > 10 && 9 >= 9);
console.log('a'.length === 3 && 1+1 === 4);

//AND
let foodEat = 'taco tuesday';
if(foodEat.length >= 6 && foodEat.indexOf(' ') === -1){
    console.log("Good food to eat!");
}
else{
    console.log("Not good food to eat!");
}

//OR
console.log(1 !== 1 || 10 === 10);
console.log(10/2 || 5 === null);
console.log(0 || undefined);

let ages = 76;
if(ages < 6 || ages >= 65){
    console.log('You get in for free!');
}
else{
    console.log('That will be $10 please!');
}

//NOT
console.log(!null);
console.log(!(0 === 0));
console.log(!(3 <= 4));

//ARRAYS
let students = [];
let colors = ['red', 'orange', 'yellow'];
console.log(colors.length);
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);
console.log(colors[4]);
let numbers = [19, 22, 56, 12, 51];
let stuff = [true, 68, 'cat', null];
//Modifying Arrays
colors[2] = 'yellow';
colors[4] = 'blue';
colors[3] = 'green';
console.log(colors);
//Const Array
const eggs = ['brown', 'brown'];
eggs.push('white');
eggs[0] = 'green';
console.log(eggs);

//NESTED ARRAY
const colorplate = [
    ['red', 'crimson'],
    ['orange', 'dark orange'],
    ['yellow', 'golden rod'],
    ['blue', 'navy blue'],
    ['green', 'olive'],
    ['purple', 'orchid']
]
console.log(colorplate);
const board = [
    ['0', null, 'X'],
    [null, 'X', 0],
    ['X', 0, null]
]
console.log(board);

//For Loop
for(let i=1; i<=10; i++){
    console.log(i);
}
for(let i=50; i>=0; i-=10){
    console.log(i);
}
//infinite loop
for(let i=20; i>=0; i++){
    console.log(i);
}
//looping over arrays
const animals = ['lions', 'trigers', 'bears'];
for(let i=0; i<animals.length; i++){
    console.log(i, animals[i]);
}
//Nested Loops
let strs = 'LOL';
for(let i=0; i<=4; i++){
    console.log("Outer:", i);
    for(let j=0; j< strs.length; j++){
        console.log('   Inner:', str[j]);
    }
}
//While Loop
let nums = 0;
while(nums < 10){
    console.log(nums);
    nums ++;
}

let targetNum = Math.floor(Math.random()*10);
let guess = Math.floor(Math.random()*10);
while(guess !== targetNum){
    console.log(`Guessed ${guess}....Incorrect!`);
    guess = Math.floor(Math.random()*10);
}
console.log(`CORRECT! Guessed: ${guess} & target was: ${target}`);

//Break Keyword
let target = Math.floor(Math.random()*10);
let guesss = Math.floor(Math.random()*10);
while(true){
    guesss = Math.floor(Math.random()*10);
    if(guesss === target){
        console.log(`CORRECT! Guesses: ${guesss} & target was: ${target}`);
        break;
    }
    else{
        console.log(`Guessed ${guess}......Incorect`);
    }
}

//for....Of
let subredddicts = ['soccer', 'popheads', 'cringe', 'books'];
for(let sub of subreddicts){
    console.log(`${sub} - www.reddit.com/r/${sub}`);
}

//Nested For....Of
const magicSquare = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
];
for(let row of magicSquare){
    let sum = 0;
    for (let num of row){
        sum += num;
    }
    console.log(`Row of ${ro} sums to ${sum}`);
}

//Define
function grumpus(){
    console.log(`ugh.... you again....`);
    console.log(`for the last time....`);
    console.log(`LEAVE ME ALONE!!!`);
}
console.log(grumpus());
//greet
function greet(person){
    console.log(`Hi, ${person}!`);
}
greet(`Alishba`);
greet(`Asif`);
//Arguments
function findLargest(x,y){
    if(x > y){
        console.log(`${x} is Larger!`);
    }
    else if(x < y){
        console.log(`${y} is Larger!`);
    }
    else{
        console.log(`${x} and ${y} is Equal!`);
    }
}
findLargest(-2, 77);
findLargest(33, 33);

//Return
const yells = "I will end you". toLocaleUpperCase();
yell;
const idx = ['a', 'b', 'c']. indexOf('c');
idx;

//no return
function add(x,y){
    console.log(x+y);
}
const sum = add(10,16);
sum;

//first return
function add(x,y){
    return x+y;
}
const sums = add(10,16);
sums;
const answer = add(100, 200);
answer;