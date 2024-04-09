/*Shallow copy: means that only the first level of the object is copied. Deeper levels are referenced.
Deep copy: means that all levels of the object are copied. This is a true copy of the object.*/



const obj = { name: 'Version 1', additionalInfo: { version: 1 } };

const shallowCopy1 = { ...obj };

shallowCopy1.name = 'Version 2';
shallowCopy1.additionalInfo.version = 2;


console.log(obj); // { name: 'Version 1', additionalInfo: { version: 2 } }
console.log(shallowCopy1); // { name: 'Version 2', additionalInfo: { version: 2 } }

/* idhar pe,original object ka name ppt same raha jabki shallowcopy ne name property  
bhi change kiya. par additionalinfo.version vala property change hogya kyuki vo nested property tha.
name nested property nhi tha */

// array
const originalArray = [1, 2, [3, 4]];
let copiedArray = originalArray.slice();

console.log("Original:", originalArray); // Output: [1, 2, [3, 4]]
console.log("Copied:", copiedArray);     // Output: [1, 2, [3, 4]]

// Modify the nested array in the copied array
copiedArray[2][0] = 5;

console.log("After modification in copied array:");
console.log("Original:", originalArray); // Output: [1, 2, [5, 4]] (nested array modified)
console.log("Copied:", copiedArray);     


/*When you have nested arrays or objects within the original array, 
and you create a shallow copy using methods like slice(), both the original and the copied arrays 
will contain references to the same nested arrays or objects. 
This means that modifying the nested arrays or objects within one array 
will affect the corresponding nested arrays or objects in the other array, 
as they are sharing the same references.*/

let myarr = [1, 2, 3, "hello"];
console.log(typeof myarr.length)//number

/* Array Methods */
const new_arr = myarr.push(6); //returns new length of array.
const new_len2 = myarr.push(7);

console.log(myarr, new_len2)

console.log(myarr.pop(7))//remove last element. returns the element that it removed
console.log(myarr)

let myarr3 = [8, 12, 3, 4];
console.log(myarr3.shift())//removes 1st element. returns the removed element
console.log(myarr3);

console.log(myarr3.unshift(5));//adds element in the beginnning. returns length of the array.
console.log(myarr3)



/* QUESTIONAREE METHOD */
 
console.log(myarr3.includes(5)) //returns true or false.
console.log(myarr3.indexOf(5)) //returns the index prosition

const newString = myarr3.join("-"); //joins the elements of array into a string.
console.log(newString, typeof newString)


/* slics vs splice */
console.log("A", myarr);
const myn1 = myarr.slice(1, 3);
console.log(myn1);

console.log("B", myarr);
const myn2 = myarr.splice(1, 3)
console.log("C",myarr)
console.log(myn2)


/* array.slice(start, end)*/

/*array.splice(start, deleteCount, newElem1, newElem2, ..., newElemN);

start denotes the index from which the method will start its operation on the array.
deleteCount denotes the number of values to be deleted from the start. If the value is 0,nothing will be deleted.
newElem1 to newElemN denote the values that would be added after the start.*/

/* The slice() method can be used to create a copy of an array or return a portion of an array. 
It is important to note that the slice() method does not 
alter the original array but instead creates a shallow copy.
Unlike the slice() method, the splice() method will change the contents of the original array. 

The splice() method is used to add or 
remove elements of an existing array and the return value will be the removed items from the array.
If nothing was removed from the array, then the return value will just be an empty array.*/

