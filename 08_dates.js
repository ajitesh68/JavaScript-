//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,23)
let myCreatedDate1 = new Date(2023,0,23,4,5)
let myCreatedDate2 = new Date("01-14-2023")



console.log(myCreatedDate1.toLocaleString());
console.log(myCreatedDate2.toLocaleString());


let myTimeStamp = Date.now()

console.log(myTimeStamp)
console.log(myCreatedDate1.getTime());
console.log(Date.now());

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay());


newDate.toLocaleString('dafault',{
    weekday: "long",
})




