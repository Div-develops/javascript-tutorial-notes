{
    let a = 3;
    const b = 3;
    var c = 3;
}

// console.log(a);//will throw error as a is defined with let and not accessible outside the block.
// console.log(b);//will throw error as b is defined with const and not accessible outside the block.
console.log(c);//will not throw error as c is defined with var and accessible outside the block.

let a = 3;
{
    let a = 5;
    console.log("INNER SCOPE a:",a)
}
console.log("OUTER SCOPE a:", a)


{
    a = 5;
    console.log("INNER SCOPE a:", a)
}
console.log("OUTER SCOPE a:", a)

/* A variable declared inside a function is only visible inside that function. They are called local variables*/

/* Outer variables A function can access an outer variable as well.  It can modify it as well.
Variables declared outside of any function, such as the outer userName in the code above, are called global.
Global variables are visible from any function (unless shadowed by locals).
*/

const houses = 3
function one() {
    const username = "divya";

    function two() {
        const website = "medium";
        console.log("Username: ",username)//can access global variables inside a nested scope
        console.log("Houses: ",houses)//can access global variables inside a nested scope
    }
    // console.log(website); will throw error  "website is not defined" as it is local to function two()
    two();

}

one()

if (true) {
    const houses = 4;//we are able to redeclare the variable inside the block scope and it will shadow the outer variable.
    const username = "divyap"
    if (username == "divyap") {
        const website = "youtube"
        console.log("hello",username + website + houses)
    }
    // console.log(website) website is not accessible here as it is defined locally inside the if block above
}
// const houses = 4; cannot redeclare it again outside the block scope but can be done inside a block scope
// console.log(username) will throw error as username is not accessible here as it is defined locally inside the if block.

// ++++++++++++++++++++++++++++++INTERESTING+++++++++++++++++++++++++++++++++++++//


console.log("ADD ONE FUNCTION VALUE: " , addone(5))
function addone(num) {
    return num + 1;
}

// addTwo(5) throw error that addTwo is accessed before initialization. but in the addOne function we were able to call it without any error. here as we are initializing a const with a function value,therefore it needs to be initalized before calling it.

const addTwo = function (num) {
    return num + 2;
}