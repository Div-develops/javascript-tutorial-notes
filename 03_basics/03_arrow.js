const user = {
    username: "sam",
    price: 999,
    
    welcomeMessage:function() {
        console.log(`${this.username},welcome to website`)//to use current context we use "this"
    }
}

user.welcomeMessage();
user.username = "divya";
user.welcomeMessage();
//the changed username is reflected in the welcomeMessage() function call.

console.log(this)//this refers to empty global object.

function chai() {
    let username = "divya"
    console.log("INSIDE CHAI FUNCTION",this.username)
}

chai()


const chai2 = function () {
    let username = "divya";
    console.log("INSIDE CONST FUNCTION",this);
}

chai2()//global object is {} but if you executed this in brower it would have given a windows object,as in browser windows object is global

const chai3 = () => {
    let username = "divya";
    console.log("INSIDE ARROW FUNCTION", this);
}

chai3()
//Technically, it’s also possible to access the 
//object without this, by referencing it via the outer variable:
//But such code is unreliable. If we decide to copy user to another variable, e.g. admin = user 
//and overwrite user with something else, then it will access the wrong object.
let user2 = {
    name: "John",
    age: 30,

    sayHi() {
        console.log(user.name); // "user" instead of "this"
    }

};


let user3 = {
    name: "John",
    age: 30,

    sayHi() {
        console.log(this.name); // leads to an error
    }

};


let admin = user3;
user3 = null; // now user3 is referenicng null. original object is not changed

admin.sayHi(); // TypeError: Cannot read property 'name' of null


/* ++++++++++++++ WAYS TO RETURN A VALUE FROM A FUNCTION ++++++++++++++ */

// const addTwo = (a, b) => {
//     return a + b;
// }

// const addTwo = (a, b) = a + b;

// const addTwo = (a, b) => (a + b);

// const addTwo = (a,b) => ({username:"divya"})
