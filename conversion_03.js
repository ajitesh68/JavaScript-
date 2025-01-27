let score = "44"

console.log(typeof(score))

let valueINnum = Number(score)
console.log(typeof valueINnum)
console.log(valueINnum);


//"33" ->  33
// "33abs" -> NaN
// true -> 1 ; false -> 0


let isLoggedIN = 1
let booleanInLoggedIN = Boolean(isLoggedIN)
console.log(booleanInLoggedIN)

//1 -> true ; 0-> false
//"" -> false ( if empty string is there then the value will be false)
// "ajitesh" -> true (if something is written in the string then value will be true)


let someNum = 1
let stringNum = String(someNum)
console.log(stringNum)
console.log(typeof(stringNum))

//*******************oprerations****************/

let value = 345
let negvalue = -value
console.log(negvalue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2%2)
// console.log(2*2)


let str1 ="hello"
let str2 ="ajitesh"

let str3 =str1 + str2

console.log(str3)

// console.log("1"+2)
// console.log(2 + 2 + "2")
// console.log(1 + 2 + "2")//if string is at last then first two will add up then string would conactenate with the number
// console.log("2" + 2 + 2)//if string is at start then all others after it would be consiered as strings

let num1,num2,num3;

let gameCounter=100;
// ++gameCounter;
console.log(++gameCounter);