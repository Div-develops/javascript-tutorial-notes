(function chai() {
    //named iife
    console.log("DB CONNECTED")
}());

((name) => {
    //unnamed iife
    console.log(`Hello ${name}`)
})("Divya")//passing parameter in iffe;

//semicolon is must if you want to use multiple iife in a single file.
//IIFE - IMMEDIATELY INVOKED FUNCTIONS EXPORTS
//An Immediately-Invoked Function Expression (IIFE) is a function that is executed instantly after it's defined.
//primary purpose of using IIFEs in JavaScript - to avoid polluting the global scope by containing variables and functions inside a locally scoped IIFE.
//This function is invoked immediately after it is defined, creating a temporary local scope. Any variables declared inside the IIFE are not accessible outside of it.