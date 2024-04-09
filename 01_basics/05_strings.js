/* To concat string only use backticks */

/* String interpolation:placing variables enclose with curly braces prefixed with $ symobol inside 
placeholder under backticks */

/* changes done to the string are not permanent
as string is a primitive datatype */
const name = "divya"
const sign = "aries"

console.log(`My name is ${name} and my sign is ${sign}`)

const gameName = new String("mario")
console.log(typeof gameName) //object. Creating using constructor

const gameName2 = "mario"
console.log(typeof gameName2) //string.created using string function

console.log(gameName == gameName2) //true

console.log(gameName.charAt(2))
console.log(gameName.indexOf('r'))
console.log(gameName.substring(1, 3)) //not inclusive of end parameter
console.log(gameName.slice(1, 3)) //can take negative indexes also

const bottle = " milton  "
console.log(bottle.trim()) //removes trailing and leading spaces both

const placesIVisited = "Mumbai,Bangalore,Vizag";
console.log(placesIVisited.replace('a', 'z'))// replace only the first occurence.
console.log(placesIVisited.replaceAll('a', 'z')) //replace all the occurences.
console.log(placesIVisited.includes("Vizag"))
console.log(placesIVisited.split(','))//converts into array based on the separator passed