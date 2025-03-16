function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Ajitesh")); // Output: Hello, Ajitesh!


//we use these type of functions a lot in react
function logingUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return '${username} just logged in'
}



//calling the function
function add(a, b) {
    return a + b;
}
let sum = add(3, 5); // Calling the function
console.log(sum); // Output: 8
//in java script there is no need to give datatypes to arguments
let sum2 = add(3, "a"); // Calling the function
console.log(sum2);





// Return Statement
// The return statement specifies the value a function should return. 
// If no return is specified, the function returns undefined.
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4)); // Output: true




//Anonymous Functions
let square = function(num) {
    return num * num;
};
console.log(square(5)); // Output: 25
//Anonymous functions are functions without a name. They are 
//often used as arguments to other functions or assigned to variables.



// 6. Arrow Functions (ES6)
// Arrow functions provide a 
// shorter syntax for writing functions. They are anonymous by default.
const add1 = (a, b) => a + b;
console.log(add1(2, 3)); // Output: 5


//when we have to pass a lot of arguments 
//special problem occurs while making projects where a lot of arg 
//are required
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500))
// (...) is know as rest operator as well as spread operator it 
// depends on the situation


// 15. Methods vs Functions
// A function is a standalone block of code.
// A method is a function that is a property of an object.
// let person = {
//     name: "Alice",
//     greet: function() {
//         return "Hello, " + this.name + "!";
//     }
// };
// console.log(person.greet()); // Output: Hello, Alice!





let person = {
    name: "Alice",
    
};
function greet(anyobject) {
    return "Hello, " + anyobject.name + "!";
}
console.log(greet(person)); // Output: Hello, Alice!