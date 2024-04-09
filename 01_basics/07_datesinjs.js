const currentDate = new Date();
console.log(currentDate) //  currentDate is an object. Date is also an object(Date object)

const date = new Date();
console.log(date.toString()) //  Thu Mar 28 2024 18:24:13 GMT+0530 (India Standard Time)

const dateString = new Date();
console.log("hello", date.toDateString()) //  Thu Mar 28 2024. Only date is displayed

const isodate = new Date();
console.log(date.toISOString()) //  2024-03-28T12:55:05.508Z

const localDate = new Date();
console.log(localDate.toLocaleDateString()) //  28/3/24


/* manually formatting the date */
const customDate = new Date();
const formattedDate = `${customDate.getDate()}-${customDate.getMonth() + 1}-${customDate.getFullYear()}` //28-3-2024. '-' is used as separator
console.log(formattedDate)

/* providing value to date */

let myCreatedDate = new Date(2023, 0, 24); //months start from 0.
console.log(myCreatedDate);
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate2)
let myCreatedDate3 = new Date("2023-01-14"); //better way as date is coming as expected.
console.log(myCreatedDate3)
console.log(myCreatedDate3.toLocaleDateString())

let myTimeStamp = new Date();
console.log(myCreatedDate.getTime()) //gives time in milliseconds.

/* Asked in interview */
console.log(Math.floor(Date.now() / 1000)) //gives time in seconds
/* Asked in interview */

console.log(myTimeStamp.toLocaleDateString('default', {
    weekday: "long",
    year: "numeric",
    month: "long",
    hour: "numeric"
}))