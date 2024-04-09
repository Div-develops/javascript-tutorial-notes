// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email: "divya@gmail.com",
    fullname: {
        username: {
            firstName: "Divya",
            lastName: "Pawar"
        }
    }
}

console.log(regularUser.fullname.username.firstName)

/* There are two ways to concatente different objects */
const ob1 = { 1: "a", 2: "b" };
const ob2 = { 3: "c", 4: "d" };
const ob3 = { 5: "e", 6: "f" };

const ob4 = { ob1, ob2 };//works like push method of array.ek pura object as it is add hojayega 
console.log(ob4)

const ob5 = Object.assign({}, ob1, ob2, ob3);
console.log(ob5)//saare keys,values separately,without nesting add hote he

const ob6 = { ...ob1, ...ob2, ...ob3 }
console.log(ob6) //best way to concatente different objects


const users = [
    {
        id: 1,
        email:"a@gmail.com"
    },
    {
        id: 2,
        email:"b@gmail.com"
    },
    {
        id: 3,
        email:"c@gmail.com"
    }
]

console.log(users[1].email)
console.log(Object.keys(tinderUser));//returns an array of keys
console.log(Object.values(tinderUser))//return an array of value
console.log(tinderUser.hasOwnProperty('isLoggedIn'))//checks if the specified value exists in the object or not

    
const course = {
    coursename: "js",
    teacher: "honey singh",
    price:10
}
    
const {teacher:guru } = course;
console.log(guru)
    
/* JSON Format */
[
    {},
    {},
    {}
]