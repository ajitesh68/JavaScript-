// An IIFE (Immediately Invoked Function Expression) is a JavaScript 
// function that runs as soon as it is defined. It’s a common pattern
//  used to create a local scope and avoid polluting
//  the global namespace. 


//Syntax
(function() {
    // Code to execute
})();

(function(name) {
    console.log("Hello, " + name);
})("Alice");
// Output: Hello, Alice


//semicolon(;) is used to end one code


// 5. Returning Values from an IIFE
// An IIFE can return a value, which can be assigned to a variable.
const result = (function(a, b) {
    return a + b;
})(3, 5);
console.log(result); // Output: 8



// 6. IIFE with Arrow Functions
// You can also use arrow functions to create an IIFE.
(() => {
    console.log("IIFE with arrow function!");
})();


//Variables inside an IIFE are not accessible outside, 
// making them "private."



// Avoiding Global Pollution
// IIFEs help avoid adding variables to the global scope.
(function() {
    let localVar = "I am local";
    console.log(localVar); // Output: I am local
})();
console.log(localVar); // Error: localVar is not defined
