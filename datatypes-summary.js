//primitive
//7 types : String,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp =null
let userEmail;

const ID = Symbol('123')
const anotherID = Symbol('123')

console.log(ID == anotherID)

const bigNumber = 2345678457689654n

//Reference (non primitive)
//Array ,Objects,Functions

const heros = ["shaktiman","naagraj","doga"];
let myObj ={
    name:"ajitesh",
    age : 20
}

const muFunction = function(){
    console.log("hello world");
}

console.log(typeof anotherID);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Stack {Primitive}, Heap {Non-Primitive}

let myName = "ajiteshshukla"

let anotherName = myName;

console.log(myName)
console.log(anotherName)

let user1={
    email:"ajiteshshukla@gmail.com",
    upi:"agf@456789"
}

let user2=user1

user2.email = "fdhg@gmail.com"

console.log(user1)
console.log(user2)