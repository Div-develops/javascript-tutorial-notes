/* object can be created using two syntax
let user = new Object(); "object constructor syntax"(singleton object)
let user = {}; "object literal syntax"(non singleton object)
*/

const mySym = Symbol("key1")
const Jsuser = {
    name: "divya",
    "full name": "divya pawar",
    [mySym]: "mykey1",
    age: 18,
    location: "bhilai",
    email: "divyapawar.sstc@gmail.com",
    isLoggedIn: false,
    isLoggedInDays:["Monday","Saturday"]
}

console.log(Jsuser.email);
console.log(Jsuser["full name"]);
console.log(Jsuser["email"]);
console.log(Jsuser[mySym]);

/* To access a property, we can use:

The dot notation: obj.property.
Square brackets notation obj["property"]. 
Square brackets allow taking the key from a variable, like obj[varWithKey].

*/

/* FREEZING AN OBJECT: DOESN'T ALLOW CHANGES TO HAPPEN */
// Object.freeze(Jsuser);
Jsuser.email = "yololo"
console.log(Jsuser.email) //no change done as the object is freezed.

Jsuser.greeting = function () {
    console.log("Hello JS user")
}

Jsuser.greetingTwo = function () {
    console.log(`Hello JS user,${this["full name"]}`)
}

console.log(Jsuser.greeting())
console.log(Jsuser.greetingTwo())