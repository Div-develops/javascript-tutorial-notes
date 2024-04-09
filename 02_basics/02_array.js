const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros);
console.log(marvel_heros)//returns a new array with dc_heroes added as one element instead of adding all it's element separately.

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros) //adds the element elementwise rather than adding the whole array as a single element

const all_new_heroes = [...allHeros, ...dc_heros];
console.log(all_new_heroes) //does the same job as concat but here you can more than 2 arrays easily.

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity)//flattens the array by removing the nested patterns
console.log(real_another_array)//contains all element without nesting.

console.log(Array.isArray("Divya")); //will tell whether the input is array or not
console.log(Array.isArray([1, 2, 3]));

console.log(Array.from("Divya")); //creates array from the element. contains the string characters
console.log(Array.from("Divya is good.")) // contains the string characters and not words

const obj = {
    name: "divya",
    age: 21,
    sign:"aries"
}

console.log(Array.from(obj.name))
console.log(Array.from({ name: "Divya" })); //asked in interviews. output is none 
//as js don't know which part of the object has to be converted into array(keys or values)

let score1 = 100;
let score2 = 200;
let score3 = 300;



/* The Array.of() static method creates
 a new Array instance from a variable number of arguments, 
 regardless of number or type of the argument.

 The difference between Array.of() and the
 Array() constructor is in the handling of single arguments: 
 Array.of(7) creates an array with a single element, 7, whereas 
 Array(7) creates an empty array with a length property of 7. 
 (That implies an array of 7 empty slots, not slots with actual undefined values.)
 */
let char1 = "hello";
let char2 = "world"
console.log(Array.of(score1, score2, score3))
console.log(Array.of(char1))
console.log(Array.of(char1, char2)) 
console.log(Array.of("hello world")) // will not create ["hello","world"]. will return ['hello world'] as there is only element.it needs a set of elements