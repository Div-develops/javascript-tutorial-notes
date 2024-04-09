"use strict"; //treats all javascript code as newer version of javascript. Stricter error handling 

x = 9; // ReferenceError: x is not defined



alert(3 + 3) //we are using nodejs,not browser.alert is provided by browser not by node js. Node js doesn't have DOM like browsers do.
             //to use alert in node js there is a different syntax 
            
//ECMA- Sets javascript standard rules
//Data types
/*
number
bigint
string
boolean
null -> It means that variable has been declared but given the value null.It is a special value that represents nothing,empty value,no object. 
undefined -> It mean variable has been declared but has not been assigned any value

symbol -> A “symbol” represents a unique identifier.
Symbols are guaranteed to be unique. Even if we create many symbols 
with exactly the same description, they are different values. 
The description is just a label that doesn’t affect anything.

For instance, here are two symbols with the same description – they are not equal:

*/

let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false

console.table([typeof undefined,typeof null]);
//typeof null is an object whereas type of undefined is undefined
