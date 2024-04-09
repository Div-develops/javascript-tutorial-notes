const score = 400;
console.log(score)//400

const balance = new Number(1000.0589643); /* Declaring this way ensures that it is definitely a number datatype.*/
console.log(balance); //[Number:1000]
console.log(balance.toString().length);
console.log(balance.toFixed(3)); //1000.059. converts number to string.rounds the string to specified number of decimals

const otherNumber = 123;
console.log(otherNumber.toPrecision(3)); //123. Rounds the number to specified number of digits.

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); //10,00,000. Makes visulization of no of zeroes easy.and sometime used to display number in specific format in the ecommerce apps.

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); //genrates number between 0 and 1(0 inclusive and 1 exclusive).

// Returns a random integer from 0 to 9:
Math.floor(Math.random() * 10);
// Returns a random integer from 0 to 10:
Math.floor(Math.random() * 11);

// Returns a random integer from 1 to 10:
Math.floor(Math.random() * 10) + 1;

console.log(Math.floor((Math.random() * 10) + 1));

const min = 10;
const max = 20;

console.log(Math.floor((Math.random()*(max-min + 1)) + min)) //max-min provides the range,and added 1 to remove the 0value



/* A simple explanation is "Math.random() sirf 0 se 1 tk 
random number generate krta hai 0 is inclusive, 1 is exclusive....
So in this statement Math.random() * 10, the result can never be 
equal to 10 qki 10 lane k lie usko 1 se mulitply 
hona pdega jo ki possible nahi hai, to result hmesha 10 
se niche hoga (it could be 9.999999) but 10 nhi hoga, or iske upr se agar aap 
Math.floor(Math.random() * 10) krte ho to result 0 se 9 tk koi bhi integer ho skta hai
but 10 nahi, to 10 ko bhi range me include krne k lie hum usme 1 add kr dete hai.....
that is if you do Math.floor(Math.random() * 11 ) to result [0,10] 
tk aaega both inclusive.....and at last isme 
bas aap 1 add kr doge to result [1,10] m convert ho jaega.... */
