// Arrow functions are ideal when:

// You want to preserve the this value of the enclosing scope.

// You need a concise syntax for short functions.

// You’re working with callbacks or higher-order functions.

// Example: Arrow Function in a Callback

const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]