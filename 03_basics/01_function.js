//Functions are the main "building blocks" of the program.They allow code to be called many times without repetition.

function sayMyName() {
    console.log("D")
    console.log("I")
    console.log("V")
    console.log("Y")
    console.log("A")

}

sayMyName()//will call the function
console.log(sayMyName)//will not call the function.prints: [Function: sayMyName]


function addTwoNumbers(num1, num2) {
    console.log(num1+num2)
}

function addTwoNumbers2(num1, num2) {
    return num1 + num2 //will not display the result until you store the result of function call and then display it.
    // this is the difference between the above and the current  function definition 
}

//addTwoNumbers(4,5)
//addTwoNumbers2(4,5)
console.log(addTwoNumbers2(4, 5))

/*If a function is called, but an argument is not provided, 
then the corresponding value becomes undefined.*/

function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please provide a username");
        return;
    }
    return `${username} has logged in`
}
console.log(loginUserMessage())//default parameter were used.
console.log(loginUserMessage("divya"))//given parameter were used.

/* a function always gets a copy of the value: */

function showMessage(from, text) {

    from = '*' + from + '*'; // make "from" look nicer

    console.log(from + ":" + text);
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
console.log(from); // Ann

/* A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
An argument is the value that is passed to the function when it is called (it’s a call time term).*/

/*The nullish coalescing operator ?? provides a short way 
to choose the first “defined” value from a list.

It’s used to assign default values to variables:
    set height=100, if height is null or undefined
    height = height ?? 100; 
    
The important difference between them is that:

|| returns the first truthy value.
?? returns the first defined value.

let height = 0;
alert(height || 100); // 100. as 0 is also a falsy value
alert(height ?? 100); // 0. as 0 is a defined value

*/


/* If a function does not return a value, it is the same as if it returns undefined: */

/*  return 
    (some + long + expression + or + whatever * f(a) + f(b))
    is equivalent to
    return;
    (some + long + expression + or + whatever * f(a) + f(b)) ....(basically an empty return)

    If we want the returned expression to wrap 
    across multiple lines, we should start it at the same line as return. 
    Or at least put the opening parentheses there as follows:
    return (
    some + long + expression
    + or +
    whatever * f(a) + f(b)
    )
*/

/* 'short-circuiting' means in the context of boolean operators 
is that for a set of booleans b1, b2, ..., bn, the short circuit versions 
will cease evaluation as soon as the first of these booleans is true (||) or false (&&).

To sum it up, for practical applications,
we can use the OR operator to set default values, 
and we can use the AND operator to execute code in the second operand if the first one is true.

*/

function calculatePrice(...num1) {
    return num1 //returns an array of number passed as an arguments. here ...is a rest operator.
}
function calculatePrice2(val1,val2,...num1) {
    return num1 //returns an array of number passed as an arguments. here ...is a rest operator.
}

console.log(calculatePrice(1, 2, 3))
console.log(calculatePrice2(1, 2, 3, 4, 5)) //here val1=1,val2=2 and num1 = [3,4,5]

const user = {
    name: "sam",
    bill:21
}

function handleObject(anyobject) {
    if (anyobject.bill) {
        console.log(`Username is ${anyobject.name} and price is ${anyobject.bill}`)

    }
    else {
        console.log("give valid bill")/*later the bill variable can be changed to bills. so to handle 
                                        such scenarios we can check if bills is defined.*/
    }
}


handleObject(user)

const newArray = [100, 200, 300];
function returnSecondValue(array) {
    return array[1]
}
console.log(returnSecondValue(newArray))
