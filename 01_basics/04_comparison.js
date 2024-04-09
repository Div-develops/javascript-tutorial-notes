let bool = 3 > 2 // result is true or false and not 0 or 1.
console.log(bool) 

/* comparison between different type */

//When comparing values of different types, JavaScript converts the values to numbers.

console.log('2' > 1); //true, string '2' gets converted to number 2.
console.log(true > 0); //true,boolean gets converted to number 1.

/* In regular equality check operands of different types are converted into number so it cannot 
diiferentiate between 0 and false. But what is we want to diffrentiate between  0 and false.
We will use strict equality check ===. It checks the equality without any type conversion.
If a and b are of different type a===b will always return false*/

console.log(0 == false) //true. false got converted to number '0'.
console.log(0 === false) //false


/********************* NULL AND UNDEFINED ***************************/

console.log(null === undefined) //false. As both are of different types.

console.log(null == undefined)
/*true.There’s a special rule. 
These two are a “sweet couple”: 
they equal each other(in the sense of ==), but not any other value.*/

console.log(null == 0)//false

/* For maths and other comparisons < > <= >=
null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.*/

console.log(null > 0) //false
console.log(null == 0)
/*false. As null is only equal to undefined(unstrict equality check) 
The reason is that an equality check == and comparisons > < >= <= work differently.
Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.
*/
console.log(null >= 0) //true. null gets converted to 0.


/*The value undefined shouldn’t be compared to other values:
Why does it dislike zero so much ? Always false */


console.log(undefined > 0); // false (1)
console.log(undefined < 0); // false (2)
console.log(undefined == 0); // false (3)

/* We get these results because:
Comparisons(1) and(2) return false because undefined gets converted to NaN 
and NaN is a special numeric value which returns false for all comparisons.
The equality check(3) returns false because undefined only equals null, undefined, and no other value.
*/

/* Summary
 -> Comparison operators return a boolean value.
 -> Strings are compared letter-by-letter in the “dictionary” order.
 -> When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
 -> The values null and undefined equal == each other and do not equal any other value.
 -> Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.*/

 console.log("2">"12") // both are of same types. so won't be converted to number. "2" is bigger than "1" in dictionary comparison