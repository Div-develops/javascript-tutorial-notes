/* Javascript is a dynamically typed language.
This means that variable datatype is determined at runtime,and
you don't need to explicitly declare the type of variable during runtime. */

/* Typescript is a static typed language.Provides better safety and better error handling*/

/* TWO TYPES OF DATAYPE ARE THERE BASED ON HOW THEY ARE STORED IN MEMORY AND ACCESSED FROM THE MEMORY*/

/* PRIMITIVE DATA TYPES */
/* 1. String
   2. Number
   3. Boolean
   4. Null
   5. Undefined
   6. Symbol
   7. BigInt */

/* Predefined datatype provided by javascript is known as primitive datatype. */
/* Primitive values are data that are stored directly in a variable. 
   When we assign a primitive value to a variable,a copy of that value is created and stored in memory
   Any change made to the variable do not affect the original value. */

let x = 5;
let y = x;
y = 10;
console.log(x); // Output: 5
console.log(y); // Output: 10

/* In the example above, the variable y is assigned a copy of the value of x. 
When we change the value of y, it does not affect the value of x. 
This is because x and y are separate variables with separate memory locations. */

/* REFERENCE DATATYPE */

/* These datatypes are derieved from the primitive datatypes.
They are objects that are stored in memory and accessed through references.
These include arrays,objects and functions */

/* When we assign a reference value to a variable,a reference to the original value 
is created and stored in memory. Any changes made to the variable will affect the original value. */

let array1 = [1, 2, 3];
let array2 = array1;
array2.push(4);
console.log(array1); // Output: [1, 2, 3, 4]
console.log(array2); // Output: [1, 2, 3, 4]

/* In the example above, the variable array2 is assigned a reference to the original array array1. 
When we push a value to array2, 
it also affects array1 because both variables reference the same memory location. */

/*

* Primtive Datatypes

                  Type                                   typeof

i)             Number                               number
ii)            String                                   string
iii)           Boolean                               boolean
iv)           Bigint                                   bigint
v)            Symbol                                symbol
vi)           Null !!                                      object
vii)          Undefined                           undefined


* Non-Primitive OR Referance OR Object datatype

                  Type                                 typeof

i)               Object                                object
ii)              Array                                 object
iii)             Function                            function(object) 
*/


/* ++++++++++++++++ Memory Representation ++++++++++++++++++*/

/* JavaScript uses the stack data structure to store static or fixed-size data. 
This includes all numbers, strings, booleans, and other primitive data types. 
These data types have a fixed size known at compile time. 
Variables such as objects, arrays, etc., are not stored in the stack as their size varies during run time.*/

/* JavaScript uses a heap for storing variables whose size 
is unknown at compile time or may vary at the run time, such as objects, arrays, functions, etc.
JavaScript allocates memory for objects within the heap, but we must have 
a reference to that memory location to access the value. 
The reference to the memory location resides in the stack memory.*/

/* SUMMARY */

/*  The stack is used to store static data, whereas the heap is used to store dynamic data. 
    The stack contains references to the objects in a heap. 
    JavaScript also uses a garbage collector to deallocate unused memory from the heap. 
    The mark and sweep technique is one of the most common garbage collection algorithms.*/

let box1 = {
    width: 100,
    height: 50
};

let box2 = box1;

box2.width = 200;

console.log('Box 1 width: ', box1.width);
console.log('Box 2 width: ', box2.width);
/* If box1 contained the values of object then the changes made to box2 would not have been reflected in box1.
but it got reflected as they both contains the reference to the object and not the value of object.*/