let score = "33"

console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

let scoreabc = "33abc"
console.log(typeof scoreabc)
console.table([Number(scoreabc), typeof Number(scoreabc)])

//"33" => 33
//"33abc" => NaN(typeof NaN is still a number)
//true => 1; false => 0

let isLoggedIn = "divya"
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.table([booleanIsLoggedIn, typeof booleanIsLoggedIn])

let isLoggedInSpace = ""
let booleanIsLoggedInSpace = Boolean(isLoggedInSpace)

console.table([booleanIsLoggedInSpace, typeof booleanIsLoggedIn])

// "" -> False
// "Divya" -> True

let tempNumber = 33
let tempStringNumber = String(tempNumber)
console.table([tempStringNumber,typeof tempStringNumber])

// ******************Operations******************

let value = 3
let negValue = -value
console.log(negValue)

let str1 = "hello"
let str2 = " divya"
let str3 = str1 + str2
console.log(str3)

console.log(1 + 2 + "3") // 33(first got added numerically then stringwise)
console.log("1" + "2" + 3) //123(got added stringwise)

/* Postfix operator*/
let x = 3;
const y = x++;

console.log("x:",x, "y:",y)// x is 4; y is 3

let x2 = 3n; //3n is a bigint value
const y2 = x2++;
console.log("x2:", x2, "y2:", y2) // x2 is 4n; y2 is 3n
//the increment operator increments and returns the value before incrementing.


/* Prefix operator */
let z = 3;
const w = ++z;
//the increment operator increments and returns the value after incrementing.


console.log("z:", z, "w:", w)


