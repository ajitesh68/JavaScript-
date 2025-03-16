// 1. What is Scope?
// Scope defines the region of your code where a variable or function can be accessed. JavaScript has the following types of scope:

// Global Scope

// Local Scope (Function Scope)

// Block Scope (Introduced in ES6 with let and const)


//Global Scope
// Variables declared outside of any function or block are 
// in the global scope. They can be accessed from anywhere in your code.
let globalVar = "I am global"; // Global scope

function checkScope() {
    console.log(globalVar); // Accessible
}
checkScope(); // Output: I am global
console.log(globalVar); // Output: I am global




// 3. Local Scope (Function Scope)
// Variables declared inside a function are in the local scope. 
// They can only be accessed within that function.

function myFunction() {
    let localVar = "I am local"; // Local scope
    console.log(localVar); // Accessible
}
myFunction(); // Output: I am local
console.log(localVar); // Error: localVar is not defined




// Note: Variables declared with "var" are not block-scoped;
//  they are function-scoped.


// 4. Block Scope (Introduced in ES6)
// Block scope is created by {} (curly braces) in if, for, while,
// and other block statements. Variables declared with let and const
// are block-scoped, meaning 
// they are only accessible within the block they are defined in.

if (true) {
    let blockVar = "I am block-scoped"; // Block scope
    console.log(blockVar); // Accessible
}
console.log(blockVar); // Error: blockVar is not defined




function testScope() {
    if (true) {
        var varVar = "I am var"; // Function-scoped
        let letVar = "I am let"; // Block-scoped
    }
    console.log(varVar); // Output: I am var
    console.log(letVar); // Error: letVar is not defined
}
testScope();



// 6. Lexical Scope (Static Scope)
// JavaScript uses lexical scoping, meaning the scope of a variable is 
// determined by its position in the source code. Inner functions have 
// access to variables in their outer (enclosing) functions.

function outer() {
    let outerVar = "I am outer"; // Outer scope

    function inner() {
        console.log(outerVar); // Accessible due to lexical scope
    }
    inner();
}
outer(); // Output: I am outer



// 8. Closures and Scope
// A closure is a function that retains access to its lexical scope,
// even when the function is executed outside that scope.
function outer() {
    let outerVar = "I am outer"; // Outer scope

    function inner() {
        console.log(outerVar); // Accessible due to closure
    }
    return inner;
}

let closureFunc = outer();
closureFunc(); // Output: I am outer



// 9. Hoisting and Scope
// Hoisting is JavaScript's behavior of moving 
// declarations to the top of their scope.

// var declarations are hoisted to the top of their function or global scope.

// let and const are hoisted but not initialized, 
// leading to a "temporal dead zone" until they are declared

console.log(hoistedVar); // Output: undefined (var is hoisted)
var hoistedVar = "I am hoisted";

console.log(hoistedLet); // Error: Cannot access 'hoistedLet' before initialization
let hoistedLet = "I am not hoisted";




// 10. Nested Scopes
// Scopes can be nested within each other. 
// Inner scopes have access to outer scopes, but not vice versa.
function outer() {
    let outerVar = "I am outer"; // Outer scope

    function inner() {
        let innerVar = "I am inner"; // Inner scope
        console.log(outerVar); // Accessible
    }
    console.log(innerVar); // Error: innerVar is not defined
}
outer();