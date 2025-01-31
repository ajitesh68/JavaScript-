const arr = [0,4,3,3,5]
const myhero = ["shaktimaan","naagraj"]

console.log(arr[0]);
const myArr2 = new Array(1,1,4,5,5)
console.log(myArr2)

// Array Methods

myArr2.push(6)
console.log(myArr2)


myArr2.push(8)
console.log(myArr2)


myArr2.pop()
console.log(myArr2)

myArr2.unshift(9)
console.log(myArr2)

myArr2.shift() 
console.log(myArr2)

console.log(myArr2.includes(9))
console.log(myArr2.indexOf(1))
console.log(myArr2.indexOf(8))

const newarr = myArr2.join()

console.log(myArr2)
console.log(newarr)


// --------------slice , splice-----------

console.log("A",myArr2)

const myn1 = myArr2.slice(1,3)

console.log(myn1)
console.log("B",myArr2)



const myn2 = myArr2.splice(1,3)
console.log(myn2)
console.log("C",myArr2)
